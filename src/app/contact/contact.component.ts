import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>Contacts</h2>
    <a routerLink="add">Add Contact</a><br>
    <a routerLink="edit/1">Edit Contact 1</a><br>
    <a routerLink="edit/2">Edit Contact 2</a><br>
    <a routerLink="edit/3">Edit Contact 3</a><br>
    <a routerLink="edit/5">Edit Contact 5</a><br>
    <a routerLink="edit/7">Edit Contact 7</a><br>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
