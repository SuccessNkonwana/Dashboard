import { Component, OnInit } from '@angular/core';
import * as firebaseApp from 'firebase/app';
import * as geofirex from 'geofirex';
import { Geo } from '../module/geo';

@Component({
  selector: '.app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  geo = geofirex.init(firebaseApp);
  //pointList: any;

  lati: any;
  longi: any;
  latitude: number;
  longitude: number;
  iconurl ='assets/location-marker.png';
  pointList: any[] = new Array();

  constructor() {
    this.geo.collection('localCafe').snapshot().subscribe(data =>{

      //let pointList : any[];
      data.forEach(item=>{
        
        console.log(item.data().position.geohash);

         this.pointList.push(item.data());
        this.lati=item.data().position.geopoint.latitude;
         this.longi =item.data().position.geopoint.longitude;
         console.log(this.pointList);
      })
    });
   
   }

  ngOnInit() {

    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

    })



    
  }

}
