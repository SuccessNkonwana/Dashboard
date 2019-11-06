import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { InternetCafe } from '../module/internetCafe';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private itemDoc: AngularFirestoreDocument<InternetCafe>;

  constructor(private db: AngularFirestore) { }


  getItemChanges() {
    return this.db.collection('localCafe').snapshotChanges();
    
  }
  getUserChanges() {
    return this.db.collection('users').valueChanges();
    
  }
  delete(key){
    this.db.doc('localCafe/' + key).delete();
    
  }
  deleteComment(key){
    this.db.doc('comments/' + key).delete();
  }
  update(item, key) {
    this.itemDoc = this.db.doc<InternetCafe>('localCafe/' + key);
    this.itemDoc.update(item);
  }
}
