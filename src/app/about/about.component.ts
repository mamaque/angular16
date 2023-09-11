import { Component, OnInit, ɵɵngDeclareDirective } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
    '.class1 {color: limegreen }',
    '.class2 {font-family: "Brush Script MT"; font-size: 2rem}',
    '.class3 {background-color: yellow}',
    '.classA {color: limegreen }',
    '.classB {color: darkred }',

  ]
})
export class AboutComponent implements OnInit {

  name = 'Track By Example';
  store: IUser[];
  gods : IGod[];
  selectedGod : IGod = {name:'name', gender: 'god' };
  showGoddess : boolean = true;
  myColor = 'LightCoral';
  condition = false;

  constructor() {
    this.store = this.getData();
    this.gods = this.getGods();
   }

  ngOnInit(): void {
    this.setCurrentClasses();
  }
 
  getData() : IUser[] {
    return [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Travers' },
    ];
  }

  trackByFunction(index : number, item : IUser) {
    return item.id;
  }

  /// /
  selectValue : any = 12;;
  assignSelectedGod() : void {
    this.selectValue = 10;
    var e = document.getElementById("gods");
    this.selectValue = (e != null) ? e.textContent : null;
  }
 


  run() : void {
    alert("run");
    //document.getElementById("srt")?.value? = document.getElementById("Ultra")?.value?;
    var element1 =  document.getElementById("srt") as HTMLSelectElement;
    var element2 = document.getElementById("Ultra") as HTMLInputElement;
    if (element1 && element2) {
      element1.value = element2.value;
    }
  }

  getNewData() {
    this.store = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Travers' },
      { id: 4, name: 'Sam' },
      { id: 5, name: 'Kelly' },
      { id: 6, name: 'Thor' },
    ];
  }

  getAlmostSameData() {
    this.store = [
      { id: 1, name: 'John' },
      { id: 7, name: 'Marie' },
      { id: 3, name: 'Travers' },
      { id: 4, name: 'Sam' },
      { id: 5, name: 'Kelly' },
      { id: 6, name: 'Thor' },
    ];
  }
  changeSecond() {
    this.store[1].name = 'Marie';
  }
  changeId() {
    this.store[1].id = 15;
  }
  addItem() {
    this.store.push({id:8, name:'Anna'});
  }

  suppress3() {
    this.store.splice(4,1);
  }




getGods () : IGod [] {
  return [
    {name:"athena", gender:"goddess"},
    {name:"zeus", gender:"god"},
    {name:"poseidon", gender:"god"},
    {name:"artemis", gender:"goddess"},
    {name:"dyonysos", gender:"god"},

  ]
 };

  /// /
  selectedNumber = null;
  onChange(event : any) {
    //alert("onChange : " + this.selectedNumber);
    console.log(this.selectedNumber);
    console.log(event);
  }

  class1var = true;
  class2var = true;
  class3var = true;

  currentClasses: Record<string, boolean> = {};

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      class1: this.class1var,
      class2: this.class2var,
      class3: this.class3var,
    };
  }


} // end of class AboutComponent


interface IUser {
  id:number;
  name : string;
}

interface IGod {
  name:string;
  gender: string;
}
