import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
  updatePassword,
  user,
  UserInfo,
  User,
  onAuthStateChanged,
  sendEmailVerification,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import {
  Firestore,
  collection,
  addDoc,
  setDoc,
  collectionData,
  collectionGroup,
  DocumentReference,
  query,
  where,
  doc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {
  NotificationService,
  NotificationTypeEnum,
} from '../shared/notification/notification.service';
import {
  LoginCredientals,
  RegisterCredientials,
  UserProfile,
} from './auth.types';
//import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //constructor() { }

  auth = inject(Auth);
  firestore = inject(Firestore);
  router = inject(Router);
  user!: User | null;
  notifications = inject(NotificationService);
  userSignal = signal<UserInfo>({
    displayName: '',
    photoURL: '',
    email: '',
    phoneNumber: '',
    providerId: '',
    uid: '',
  });
  isPremiumMember!: boolean;

  constructor() {
    this.auth.onAuthStateChanged((user) => {
      if (user !== null) {
        this.user = user;
        console.log('email verified', user.emailVerified);
        this.userSignal.set({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          phoneNumber: user.phoneNumber,
          providerId: user.providerId,
          uid: user.uid,
        });
        console.log(this.userSignal());
        // if(!user.emailVerified) {
        //   this.sendEmailVerification(user)
        // }
      } else {
        this.user = null;
        console.log('No logged in User Found');
        this.router.navigate(['/login']);
      }
    });
  }

  /**
   * Logs user into firebase account
   * @param credentials email and password
   */
  emailSignIn = (credentials: LoginCredientals): Observable<void> => {
    const promise = signInWithEmailAndPassword(
      this.auth,
      credentials.email,
      credentials.password,
    ).then(() => {});
    return from(promise);
  };

  /**
   * Registers a user with a new firebase account
   * @param credentials username email and password
   */
  emailSignUp = (credentials: RegisterCredientials): Observable<void> => {
    const promise = createUserWithEmailAndPassword(
      this.auth,
      credentials.email,
      credentials.password,
    ).then((data) => {
      console.log('new user data', data);
      updateProfile(getAuth().currentUser!, {
        displayName: credentials.username,
        photoURL: 'testURL',
      });
      this.createUser({ ...data.user, displayName: credentials.username });
    });
    return from(promise);
  };

  /*
   * Signs User out of Firebase
   */
  signOut = (): Observable<void> => {
    const promise = signOut(this.auth);
    return from(promise);
  };

  /*
   * Updates the User Profile
   */
  updateUserProfile = (user: any) => {
    updateProfile(user, { displayName: 'new user', photoURL: '' }).then(
      (data) => {
        this.notifications.notify(
          'Credentials Updated',
          NotificationTypeEnum.SUCCESS,
        );
      },
    );
  };

  createUser = (newUser: any) => {
    const userPayload = {
      uid: newUser.uid,
      email: newUser.email,
      displayName: newUser.displayName,
      photoURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    };
    const docRef = addDoc(collection(this.firestore, 'users'), {
      ...userPayload,
    }).then((data) => {
      console.log(data);
    });
  };

  // getUser = ():Observable<UserProfile[]> => {
  //   const q = query(this.usersCollection, where('uid', '==', this.currentUser.uid))
  //   return collectionData(q, {idField: 'id'})
  // }
  sendEmailVerification = (user: User) => {
    sendEmailVerification(user).then((data) => console.log(data));
  };
}
