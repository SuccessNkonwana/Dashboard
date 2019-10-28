import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  key: any;
  commentRef: any;

  constructor(private route:ActivatedRoute,public afAuth: AngularFireAuth,private firestore:AngularFirestore) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
       
      this.key = params.key;
      console.log(this.key); 

      
      this.commentRef = this.firestore.collection('comments', ref => ref.orderBy('Timestamp').where('key', '==', this.key )).valueChanges()


    });
  }




}
