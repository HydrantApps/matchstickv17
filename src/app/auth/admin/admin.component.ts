import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  authService = inject(AuthService);
  firestore = inject(Firestore);
  usersCollection = collection(this.firestore, 'users');
  users$: Observable<any[]> | undefined;

  ngOnInit(): void {
    //console.log(collectionData(this.usersCollection,{idField: 'id'}))
    this.users$ = collectionData(this.usersCollection, { idField: 'id' });
  }
}
