import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateComponent } from './pages/update/update.component';
// import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import {AccordionModule} from 'ng-uikit';
import { HomeComponent } from './pages/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CommentsComponent } from './pages/comments/comments.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ChartComponent } from './pages/chart/chart.component';
// import { AngularFireDatabase} from 'angularfire2/database';
//import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { Chart } from 'chart.js'
import {  HttpClientModule } from '@angular/common/http';
import { ChartService } from './services/chart.service';
import { InternetCafeComponent } from './pages/internet-cafe/internet-cafe.component';
import { UsersinternetcafeComponent } from './pages/usersinternetcafe/usersinternetcafe.component';
import {enableProdMode} from '@angular/core'
// import {enableProdMode} from 'angular2/core';
enableProdMode();

const firebaseConfig = {
  apiKey: "AIzaSyA-kTR7fRDa0qxM0hBMROLG8APChD8RTxY",
  authDomain: "internetcafe-8ab2b.firebaseapp.com",
  databaseURL: "https://internetcafe-8ab2b.firebaseio.com",
  projectId: "internetcafe-8ab2b",
  storageBucket: "internetcafe-8ab2b.appspot.com",
  messagingSenderId: "194688123148",
  appId: "1:194688123148:web:0329ce7412e2b9ad2d4929"
}; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CommentsComponent,
    UpdateComponent,
    ChartComponent,
    InternetCafeComponent,
    UsersinternetcafeComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule,ChartsModule,ReactiveFormsModule,
    FormsModule,NgxPaginationModule,BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AngularFireAuth,ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
