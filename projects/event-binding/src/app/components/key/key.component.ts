import { Component } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {
  public users:any[]=[
    {Username:'deebyanshu'},
    {Username:'siva'},
    {Username:'ram'},
    {Username:'naresh'}];
    public UserError:string='';
    public isInvalid:boolean=false;

    public VerifyUser(e:any){
      for(var user of this.users){
        if(user.Username==e.target.value){
          this.UserError="Username already taken...";
          this.isInvalid=true;
          break;
        }else{
          this.UserError="Username available...";
          this.isInvalid=false;
        }
      }
    }
}
