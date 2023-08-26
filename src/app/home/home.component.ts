import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headerName = "Angular Application";
  subscription = 250;
  discount = 0.15;

  constructor() { }

  ngOnInit(): void {
  }

}
