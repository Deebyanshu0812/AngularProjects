import { Component } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent {
  public products:any[]=[
    {Name:'TV',Price:54000.00},
    {Name:'Mobile',Price:43212.50},
    {Name:'Smart watch',Price:4500.00}
  ];
  UpdateClick(){
    this.products=[
      {Name:'TV',Price:54000.00},
      {Name:'Mobile',Price:43212.50},
      {Name:'Tablet',Price:900.98},
      {Name:'Smart watch',Price:4500.00},
      {Name:'Shoes',Price:4500.98}
    ]
  }
  TrackChanges(index:number){
    return index;
  }
}
