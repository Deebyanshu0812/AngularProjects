import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent {
  public courses:string[]=["Typescript","VueJS","JavaScript","Angular","ReactJS","MS Azure"];

  public isDisplay:boolean=true;
}
