import { Component, inject, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import {
  doc,
  getDoc,
  Firestore,
  collection,
  query,
  where,
  collectionData,
  DocumentData,
  updateDoc,
} from '@angular/fire/firestore';
import { UserProfile } from '../auth.types';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FormUtilsService } from '../../shared/form-utils.service';
import {
  faEnvelope,
  faCheck,
  faLock,
  faSignInAlt,
  faUser,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  NotificationService,
  NotificationTypeEnum,
} from '../../shared/notification/notification.service';
import { NotificationComponent } from '../../shared/notification/notification.component';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NotificationComponent,
    MaskitoDirective,
  ],
})
export class ProfileComponent implements AfterViewInit {
  authService = inject(AuthService);
  firestore = inject(Firestore);
  formBuilder = inject(FormBuilder);
  formUtils = inject(FormUtilsService);
  notifications = inject(NotificationService);
  storage = inject(Storage);
  faLock = faLock;
  faCheck = faCheck;
  faTimes = faTimes;
  userRef: any;
  user$: any;
  usersCollection = collection(this.firestore, 'users');
  profileSignal = signal<UserProfile | DocumentData | null>(null);
  updatePasswordForm = this.formBuilder.group({
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(8),
        this.formUtils.createPasswordStrengthValidator(),
      ]),
    ],
  });
  readonly phoneNumberMask: MaskitoOptions = {
    mask: [
      '+',
      '1',
      ' ',
      '(',
      /\d/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  };

  constructor() {}

  ngAfterViewInit(): void {
    this.authService.userSignal().uid
      ? this.getUser()
      : console.log('no user found');
  }

  getUser = () => {
    console.log(`uid`, this.authService.userSignal()?.uid);
    const q = query(
      this.usersCollection,
      where('uid', '==', this.authService.userSignal().uid),
    );
    const users = collectionData(q, { idField: 'id' });
    users.subscribe((data: DocumentData[]) => {
      if (data.length === 1) {
        const docRef = doc(this.firestore, `users`, data[0]['id']);
        (async () => {
          const docSnap = await getDoc(docRef);
          console.log('docsnap data', docSnap.data());
          this.profileSignal.set(docSnap.data() as UserProfile);
        })();
      }
    });
  };

  updatePassword = () => {
    this.authService
      .updateUserPassword(this.updatePasswordForm.controls.password.value!)
      .subscribe({
        next: () =>
          this.notifications.notify(
            'Password updated successfully',
            NotificationTypeEnum.SUCCESS,
          ),
        error: (e) =>
          this.notifications.notify(e.code, NotificationTypeEnum.SUCCESS),
      });
  };

  updateProfile = () => {
    this.authService.updateProfile();
  };

  sendEmailVerification = () => {
    this.authService.sendEmailVerification();
  };

  update = (userdata: UserProfile) => {
    const docRef = doc(this.firestore, 'users', this.profileSignal()!.id!);
    updateDoc(docRef, { ...userdata })
      .then((data) => {
        this.notifications.notify(
          'Profile Updated Successfully',
          NotificationTypeEnum.SUCCESS,
        );
      })
      .catch((error) => {
        this.notifications.notify(
          'There was an error updaing the Profile',
          NotificationTypeEnum.ERROR,
        );
      });
  };

  uploadFile = (input: HTMLInputElement) => {
    if (!input.files) return;

    const files: FileList = input.files;
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const storageRef = ref(this.storage, file.name);
        uploadBytesResumable(storageRef, file).then((data) => {
          getDownloadURL(ref(this.storage, data.metadata.name)).then((url) => {
            this.profileSignal()!.photoURL = url;
            this.update(this.profileSignal() as UserProfile);
          });
        });
      }
    }
  };
}
