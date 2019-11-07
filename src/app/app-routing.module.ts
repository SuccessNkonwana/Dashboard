import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { UpdateComponent } from './pages/update/update.component';
<<<<<<< HEAD
import { MapComponent } from './map/map.component';
=======
import { ChartComponent } from './pages/chart/chart.component';
>>>>>>> 902759ea8c4007343aff812766dd653d2e599bc2


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'update', component: UpdateComponent},
<<<<<<< HEAD
  {path: 'map', component: MapComponent}
=======
  {path: 'Chart', component: ChartComponent}

>>>>>>> 902759ea8c4007343aff812766dd653d2e599bc2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
