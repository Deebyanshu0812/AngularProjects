import { Component } from '@angular/core';
import { ProductDetails } from '../contract/product.contract';

@Component({
  selector: 'app-product-details-api',
  templateUrl: './product-details-api.component.html',
  styleUrls: ['./product-details-api.component.css']
})
export class ProductDetailsAPIComponent {
  public product:ProductDetails={
    id:0,
    category:"",
    image:"",
    description:"",
    price:0,
    title:"",
    rating:{
      count:0,
      rate:0
    }
  }

  count:number = 1;
  GetProducts(id:number){
    fetch('https://fakestoreapi.com/products/'+id)
    .then(res=>res.json())
    .then(res=>{
      this.product=res;
    });
  }

  ngOnInit(){
    this.GetProducts(this.count);
  }
    PreviousClick(){
      this.count = this.count-1;
      this.GetProducts(this.count);
    }
    NextClick(){
      this.count = this.count+1;
      this.GetProducts(this.count);
    }
}
