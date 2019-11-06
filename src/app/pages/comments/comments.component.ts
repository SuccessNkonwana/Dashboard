import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  key: any;
  commentRef: any;
  Timestamp;
  chatRef: any;
  list: any;
  collection: any;

  constructor(private route:ActivatedRoute,public afAuth: AngularFireAuth,private firestore:AngularFirestore, private dataService:DataService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
       
      this.key = params.key;
      console.log("doc key",this.key); 

      //  this.uid = this.afAuth.auth.currentUser.uid;
       //this.chatRef = this.firestore.collection('comments', ref => ref.orderBy('Timestamp').where('internetKey', '==', this.key )).valueChanges();
      // this.commentRef = this.firestore.collection('comments', ref => ref.orderBy('Timestamp').where('key', '==', this.key )).valueChanges();

      

     this.firestore.collection('comments', ref => ref.orderBy('Timestamp').where('internetKey', '==', this.key )).snapshotChanges().subscribe( data => {
      this.list = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } 
      });

      console.log("comment list",this.list)

     })
    });
  }

  // onDelete(comment){
  //   this.dataService.deleteComment(comment.key)
  //   alert("comment deleted");
  // }


}
