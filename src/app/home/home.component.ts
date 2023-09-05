import { Component, OnInit } from '@angular/core';

interface User {
  name : string;
  lastName : string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  headerName = "Angular Application";
  subscription = 250;
  discount = 0.15;
  isDisabled = false;
  colorDiscount = "red";

  headClassName = "head-class";
  headStyleValue = {"color":"orange","font-size":"40px"};

  condition = true;
  users : User[] = [
    {name: "John",    lastName: "Smith"},
    {name: "Mary",    lastName: "Stuart"},
    {name: "Suzie",   lastName: "Quarter"},
    {name: "Michael", lastName: "Hale"},
    {name: "Ernest ", lastName: "Lancaut"},
    {name: "Shaun",   lastName: "Felder"},
    {name: "Jack",    lastName: "Martinez"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  functionDisplay(textToDisplay : string) : void {
    alert (textToDisplay); 
  }

  toggleCondition() : void {
    this.condition = !this.condition;
  }

}


