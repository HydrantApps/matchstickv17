import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { UserProfile } from '../auth.types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  authService = inject(AuthService);
  firestore = inject(Firestore);
  usersCollection = collection(this.firestore, 'users');
  users$: Observable<UserProfile[]> | undefined;

  ngOnInit(): void {
    //console.log(collectionData(this.usersCollection,{idField: 'id'}))
    this.users$ = collectionData(this.usersCollection, {
      idField: 'id',
    }) as Observable<UserProfile[]>;
  }

  adminUpdateUser = (user: UserProfile) => {
    const docRef = doc(this.firestore, 'users', user.id!);
    updateDoc(docRef, { ...user })
      .then((data) => {
        //this.notifications.notify('Profile Updated Successfully')
      })
      .catch((error) => {
        //this.notifications.notify('There was an error updaing the Profile')
      });
  };

  deleteUser = (user: UserProfile) => {
    const docRef = doc(this.firestore, `users/${user.id}`);
    deleteDoc(docRef)
      .then((data) => {
        //this.notifications.notify('Profile Updated Successfully')
      })
      .catch((error) => {
        //this.notifications.notify('There was an error updaing the Profile')
      });
  };
}
