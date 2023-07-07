import { Component } from "@angular/core";

@Component({
    selector:'product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})


export class ProductComponent{
    productId:number=101;
    productName:string="Iphone";
    productImage:string="../assets/iphone.jpeg";
    productprice:number=67000;
    isAvailable:boolean=true;
}