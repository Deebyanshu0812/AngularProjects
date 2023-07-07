import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public ViewName:string="details";
  public ViewClick(viewName:string){
    this.ViewName=viewName;
  }
}
