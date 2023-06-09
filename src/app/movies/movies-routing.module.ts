import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';

const routes: Routes = [{
path:'',
component:LayoutComponent,
children:[
  {path:'home', component:HomeComponent},
  {path:'show-movie/:id', component:ShowMovieComponent},

 

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
