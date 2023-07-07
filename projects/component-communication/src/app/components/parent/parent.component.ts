import { Component } from '@angular/core';
import { ProductDetails } from 'projects/filpkart-app/src/app/product.contract';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public msg:string="Message from Parent";
  public courses:string[]=["Java","JDBC","Servlet","JSP","Spring","Angular"];
  public products:ProductDetails[]=[];
  public msgFromChild:any="";
  public courseFromChilddata:any=[];
  ngOnInit(){
    fetch('https://fakestoreapi.com/products')
    .then(data=>data.json())
    .then(data=>{
      this.products =data;
    })
  }
  public MessageFromChild(e:any){
    this.msgFromChild=e;
  }
  public CourseInfofromchild(e:any){
    this.courseFromChilddata=e;
  }
}
