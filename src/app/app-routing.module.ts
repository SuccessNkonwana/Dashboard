import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentsComponent } from './pages/comments/comments.component';
<<<<<<< HEAD
import { ChartComponent } from './pages/chart/chart.component';

=======
import { UpdateComponent } from './pages/update/update.component';
>>>>>>> 7e38101b3ecb6b8c0b9d010af361d4e8f4593167


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'comments', component: CommentsComponent},
<<<<<<< HEAD
  {path: 'chart', component: ChartComponent}
=======
  {path: 'update', component: UpdateComponent}
>>>>>>> 7e38101b3ecb6b8c0b9d010af361d4e8f4593167

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
