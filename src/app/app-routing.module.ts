import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { LoginComponent } from './login/login.component';
import { C404Component } from './c404/c404.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},

  {
    path:"contact", 
    component:ContactComponent,
    children: [
      {path:"add", component:AddContactComponent},
      {path:"edit/:id", component:AddContactComponent},
    ]
  },
  {path:"access", loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
  {path:"login", loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  {path:"**", component:C404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
