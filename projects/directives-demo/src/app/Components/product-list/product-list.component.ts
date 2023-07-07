import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public employee:{empID:number,empName:string,empSalary:number}[]=[
    {empID:101,empName:'Deebyanshu',empSalary:1200},
    {empID:101,empName:'Deebyanshu',empSalary:1200},
    {empID:101,empName:'Deebyanshu',empSalary:1200},
    {empID:101,empName:'Deebyanshu',empSalary:1200},
    {empID:101,empName:'Deebyanshu',empSalary:1200}
  ];

  public category:string='Electronics';
  public products:string[]=[];
  public Menu:{category:string,products:string[]}[]=[
    {
      category:'Electronics',
      products:['Oneplus','Iphone','Samsung','Oppo']
    },
    {
      category:'Electricals',
      products:['Fridge','Washing Machine','Smart TV','Cooker']
    },
    {
      category:'Footwear',
      products:['Woodland','Puma','Nike','Bata','Leecooper']
    },
    {
      category:'Tickets',
      products:['Flight','Train','Bus']
    }
  ];
  ngOnInit(){
    this.LoadProducts();
  }
  onCategoryChange(){
    this.LoadProducts();
  }
  public LoadProducts(){
    for(let item of this.Menu){
      if(item.category==this.category){
        this.products=item.products;
      }
    }
  }
}
