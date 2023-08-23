import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4>Composant with inline style and template</h4>
  `,
  styles: [
    "h4{color:green}"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
