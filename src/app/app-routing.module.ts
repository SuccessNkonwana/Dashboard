import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { UpdateComponent } from './pages/update/update.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
