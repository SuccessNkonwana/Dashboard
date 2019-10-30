import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  currentUserValue: any;
  login(value1: any, value: any) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
  loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
}
