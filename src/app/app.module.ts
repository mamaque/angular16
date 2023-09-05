import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StatusComponent } from './status/status.component';
//import { LoginComponent } from './login/login.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { C404Component } from './c404/c404.component';
import { FormsModule } from '@angular/forms';
// import { AccessRoutingModule } from './access/access-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StatusComponent,
    AddContactComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //LoginComponent,
    //AccessRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
