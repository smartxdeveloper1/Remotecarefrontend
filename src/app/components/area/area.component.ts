import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup ,FormArray} from '@angular/forms';
import { BackendService } from 'src/app/backend.service';
import { query } from '@angular/animations';
import { NgxSpinnerService } from "ngx-spinner"
import { Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  selected:string;
  arr:[]
type: string[] = ['Global', 'Country','State', 'City','Zip','Village'];
level: string[] = ['Global', 'Country','State', 'City','Zip','Village'];


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: BackendService,
    private spinnerservice: NgxSpinnerService
  ) { }

area=this.fb.group({
  type:'',
  areaCode:this.fb.array([
])
})






get getarea(){
  return this.area.get('areaCode')as FormArray
}
 addnewarea(){
   this.getarea.push(this.fb.control(''))
 }

remove(index){
  (this.area.get('areaCode')as FormArray).removeAt(index)
}
  ngOnInit() {
  }

 onSubmit(){
  this.service.areacode(this.area.value).subscribe(
    result => {
      console.log(this.area.value)
      console.log(result)
      alert(result['message']);
      // setTimeout(() => {
      //   this.spinnerservice.hide();
      //  }, 1000);
      //  var x;
      //  x=confirm("Are You Sure You Want To Navigate To View Page")
      //  if(x==true){
      //   this.router.navigate(['/view']);}
      //  else{
      //    this.regForm.reset()
      //  }
       
    },
    err => {


    }
  )
 } 
}
