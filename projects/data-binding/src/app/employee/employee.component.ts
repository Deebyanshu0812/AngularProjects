import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  firstName:string="Deebyanshu";
  lastName:string="Chandra";
  email:string="deebyanshu@gmail.com";
  dob:string="08/12/2000";
  city:string="Varanasi"
}
