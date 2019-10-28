import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { InternetCafe } from 'src/app/module/internetCafe';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemList: any[];
  userList: any[];
  cafes: any;
  users: any;
  
  constructor(private dataService: DataService, private router: Router,private firestore:AngularFirestore) {
    this.dataService.getItemChanges().subscribe(data => {
      this.itemList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as InternetCafe;
      });
      console.log(this.itemList);

    });

    this.dataService.getUserChanges().subscribe(users => {
      this.userList = users
    }
    )

    this.users = this.firestore.collection('users').valueChanges();
  }


  ngOnInit() {
  }

  commentPage(item) {
    this.router.navigate(['/comments'], {
      queryParams: {
        key: item.key
      }
    })

  }


  public pieChartLabels:string[] = ['Chrome', 'Safari', 'Firefox','Internet Explorer','Other'];
  public pieChartData:number[] = [40, 20, 20 , 10,10];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
