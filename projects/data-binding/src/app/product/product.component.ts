import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  proName:string="Iphone";
  prodPrice:number=12345;
  prodImage:string="./assets/iphone.jpeg";
  inStock:boolean=false;
  trheight:number=150;
  trwidth:number=150;
  imgBorder:number=5;
}
