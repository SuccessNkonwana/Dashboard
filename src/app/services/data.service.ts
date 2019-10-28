import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFirestore) { }


  getItemChanges() {
    return this.db.collection('localCafe').snapshotChanges();
    
  }
  getUserChanges() {
    return this.db.collection('users').valueChanges();
    
  }
}
