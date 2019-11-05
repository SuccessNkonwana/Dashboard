import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { DataService } from 'src/app/services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { InternetCafe } from 'src/app/module/internetCafe';

@Component({
  selector: 'app-internet-cafe',
  templateUrl: './internet-cafe.component.html',
  styleUrls: ['./internet-cafe.component.scss']
})
export class InternetCafeComponent implements OnInit {
  itemList: any[];
  userList: any[];
  cafes: any;
  users: any;
  barChart: any;
  config: any;
  collection = { count: 60, data: [] };
  chart:any = [];
  dlist =[];
  item: any;
  boy: number=0;
  girl: number=0;
  other: number=0;


  Internertcafe=true;
  registeredcafe = true;
  registereduser = true;
  location = true;
 
  constructor(private dataService: DataService, private router: Router,private firestore:AngularFirestore) {
    this.dataService.getItemChanges().subscribe(data => {
      this.itemList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as InternetCafe;
      });
      // console.log(this.itemList);

// paginator
      for (var i = 0; i < this.itemList[0].count; i++) {
        this.itemList[0].data.push(
          {
          id: i + 1,
            value: "items number " + (i + 1)
          }
        );
      }
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.itemList[0].count
      };
    });

    this.dataService.getUserChanges().subscribe(users => {
      this.userList = users

     
    }
    )

    // this.users = this.firestore.collection('users').valueChanges();
    // console.log(this.users)
   
  }

f=[];
x;
race;
gender;
b: number = 0;
w: number = 0;
c: number = 0;
mw: number=0;fw: number=0;ow: number=0;
mc: number=0;fc: number=0;oc: number=0;
mb: number=0;fb: number=0;ob: number=0;
  ngOnInit() {
   
  }

  onDelete(key){
    this.dataService.delete(key);
    alert("Internet Cafe deleted");
  }
  onUpdate(item){
    this.router.navigate(['/update'], { queryParams:{key: item.key, name: item.name, address: item.address, email: item.email, phone: item.phone}})
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

  //chat.js

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


  pageChanged(event){
    this.config.currentPage = event;
  }
  pageChanged1(event){
    this.config.currentPage = event;
  }
  pageChanged2(event){
    this.config.currentPage = event;
  }

  Internertcafes() { 
    
            this.registereduser=false;
            this.registeredcafe=false;
            this.location=false;
          this.Internertcafe=true;

  }
  registeredcafes(){

    this.registereduser=false;
    this.registeredcafe=true;
    this.location=false;
  this.Internertcafe=false;
  }
  registeredusers(){
    
    this.registereduser=true;
    this.registeredcafe=false;
    this.location=false;
  this.Internertcafe=false;

  }
locations(){
  
  this.registereduser=false;
  this.registeredcafe=false;
  this.location=true;
this.Internertcafe=false;

}

}
