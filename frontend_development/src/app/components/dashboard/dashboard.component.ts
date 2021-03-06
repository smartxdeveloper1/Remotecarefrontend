import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import {NgxSpinnerService} from "ngx-spinner"
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
devices;
users;
serviceProvider;
Patients;

// devices={
//   totalNo:5, // all the device
//   active:3, //active means all the active devices
//   notActive:2 // means all the non active devices
// };
// users={
//   totalNo:10, // all the users no matter what type is 
//   active:7, //active means all the Active Users (need not to show to web)
//   notActive:3, // means all the Non Active Users (need not to show to web)
//   totalAdmin:2,
//   totalServiceProvider:2,
//   totalEngineer:2,
//   totalPatient:4
// }
// serviceProvider={
//   totalNo:10, // all the sp under admin
//         active:7, //active means all the Active Users (need not to show to web)
//         notActive:3 
// }
// Patients={
//   totalNo:12, // all the patients under that particular admin(means under sp of that admin)
//   active:9, //active means all the Active Patients 
//   notActive:3
// }
alert={
  totalNo:10, redAlert:7}
user:Boolean
  constructor(
    private service:BackendService,
  ) { }
  public show(): boolean {
    console.log(localStorage.getItem("userInfo"))
    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo)
    if (userInfo.userType === "admin") {
      return true
    } else {
      return false;
    };
  }

  ngOnInit() {
    this.user=this.show()
   
    this.service.dashboarddetails()
  
    .subscribe(
      result=>{
        console.log(result)
        this.devices=result.device
        console.log(this.devices)
        this.users=result.Users
        console.log(this.users)
        this.serviceProvider=result.serviceProvider
        this.Patients=result.Patients
  
      }
    )
  }

}
