import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { InternetCafe } from 'src/app/module/internetCafe';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Chart } from 'chart.js'

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
  barChart: any;
  
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

  onDelete(key){
    this.dataService.delete(key);
    alert("Internet Cafe deleted");
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


}
