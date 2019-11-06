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
<<<<<<< HEAD
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
//import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { Chart } from 'chart.js'
import * as firebase from 'firebase';


=======
import { ChartComponent } from './pages/chart/chart.component';
// import { AngularFireDatabase} from 'angularfire2/database';
//import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { Chart } from 'chart.js'
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  HttpClientModule } from '@angular/common/http';
import { ChartService } from './services/chart.service';
import { InternetCafeComponent } from './pages/internet-cafe/internet-cafe.component';
import { UsersinternetcafeComponent } from './pages/usersinternetcafe/usersinternetcafe.component';
import {enableProdMode} from '@angular/core'
// import {enableProdMode} from 'angular2/core';
enableProdMode();
>>>>>>> 902759ea8c4007343aff812766dd653d2e599bc2

const firebaseConfig = {
  apiKey: "AIzaSyA-kTR7fRDa0qxM0hBMROLG8APChD8RTxY",
  authDomain: "internetcafe-8ab2b.firebaseapp.com",
  databaseURL: "https://internetcafe-8ab2b.firebaseio.com",
  projectId: "internetcafe-8ab2b",
  storageBucket: "internetcafe-8ab2b.appspot.com",
  messagingSenderId: "194688123148",
  appId: "1:194688123148:web:0329ce7412e2b9ad2d4929"


}; 

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CommentsComponent,
    UpdateComponent,
<<<<<<< HEAD
    MapComponent,
    
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule,ChartsModule,ReactiveFormsModule,
    FormsModule,NgxPaginationModule,
    AppRoutingModule,  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCd0QW8pbjAyI48NtgodmHK7qeilaUquXA'
    })
=======
    ChartComponent

  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule,ChartsModule,ReactiveFormsModule,
    FormsModule,NgxPaginationModule,  MatAutocompleteModule,
    MatButtonModule,FlexLayoutModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,NgxPaginationModule,BrowserModule,
    HttpClientModule,
    AppRoutingModule
>>>>>>> 902759ea8c4007343aff812766dd653d2e599bc2
  ],
  providers: [AngularFireAuth,ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
