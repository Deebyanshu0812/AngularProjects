import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  public bgStyle:string='red';
  public textStyle:string='white';
  public padding:string='10';
  public fontSize:string='10';

  public styleObj:{'background-color':string,
  'color':string,'padding':string,'font-size':string}={
    "background-color":this.bgStyle,
    "font-size":this.fontSize+"px",
    color:this.textStyle,
    padding:this.padding+"px"
  };

  public ApplyStyles(){
    this.styleObj={
    "background-color":this.bgStyle,
    "font-size":this.fontSize+"px",
    color:this.textStyle,
    padding:this.padding+"px"
    };
  }
  public PaddingChange(){
    this.styleObj={
      "background-color":this.bgStyle,
      "font-size":this.fontSize+"px",
      color:this.textStyle,
      padding:this.padding+"px"
    };
  }
  public FontChange(){
    this.styleObj={
      "background-color":this.bgStyle,
      "font-size":this.fontSize+"px",
      color:this.textStyle,
      padding:this.padding+"px"
    };
  }
}
