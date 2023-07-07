import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDetails } from 'projects/filpkart-app/src/app/product.contract';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public messageFromParent:string="";
  @Input() public coursesFromParent:string[]=[];
  @Input() public productsFromParent:ProductDetails[]=[];

  public courses:string[]=["Angular","SpringBoot","SpringMVC","Hibernate"]

  @Output() public ChildClick:EventEmitter<any>=new EventEmitter<any>();
  @Output() public CourseInfo:EventEmitter<any>=new EventEmitter<any>();
  public PrepareData(){
    this.ChildClick.emit('Hello!...Message from Child');
    this.CourseInfo.emit(this.courses);
  }
}
