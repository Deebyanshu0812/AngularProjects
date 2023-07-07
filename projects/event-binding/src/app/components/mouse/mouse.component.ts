import { Component } from '@angular/core';
import { ProductDetails } from 'projects/filpkart-app/src/app/product.contract';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent {
  public styleObj:{position:string,left:string,top:string}={
    left:'0px',
    top: '0px',
    position:''

  }
  public img_src:string='';
  public products:ProductDetails[]=[];
  public SetColor(colorName:string){
    switch(colorName){
      case 'black':
        this.img_src='assets/black-shoe.jpg';
        break;
      case 'red':
        this.img_src='assets/red-shoe.jpg';
        break;
      case 'grey':
        this.img_src='assets/grey-shoe.jpg';
        break;
      case 'blue':
        this.img_src='assets/blue-shoe.jpg';
        break;
    }
  }
  public MouseMove(e:any){
    this.styleObj={
      left:e.clientX+'px',
      top:e.clientY+'px',
      position:'absolute'
    }
  }
}
