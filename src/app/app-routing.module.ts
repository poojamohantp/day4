// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformpageComponent } from './pages/artformpage/artformpage.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
const routes: Routes = [
  {
  path:'',component: HomePageComponent
  },
  {
    path:'contact',component:ContactPageComponent
  },
    
  {
    path:'artform',component:ArtformpageComponent
  },
  {
    path:'signin',component:SigninPageComponent
  },
  {
    path:'signup',component:SignupPageComponent
  },
  {
    path:'singlepage',component:SinglePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }