import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { ArtformpageComponent } from './pages/artformpage/artformpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
   
    ContactPageComponent,
    SigninPageComponent,
    SignupPageComponent,
    SinglePageComponent,
    NavbarComponent,
    FooterComponent,
    ArtformpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
