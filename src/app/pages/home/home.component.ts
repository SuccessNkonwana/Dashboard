import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { InternetCafe } from 'src/app/module/internetCafe';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
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
  config: any;
  collection = { count: 60, data: [] };
 
  constructor(private dataService: DataService, private router: Router,private firestore:AngularFirestore) {
    this.dataService.getItemChanges().subscribe(data => {
      this.itemList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as InternetCafe;
      });
      console.log(this.itemList);

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


  pageChanged(event){
    this.config.currentPage = event;
  }
 
}
