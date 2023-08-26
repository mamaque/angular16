import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c404',
  template: `
    <h1> 404 Error ! <br> Page not Found</h1>
  `,
  styles: [
    "h1{color:red;}"
  ]
})
export class C404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
