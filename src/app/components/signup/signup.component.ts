import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup;
  user:any=[];

  register()
  {
    console.log(this.form.value)
    this.userservice.saveUserData(this.form.value).subscribe((res)=>{
      console.log("data added",res);
      this.router.navigateByUrl("/view")
    })  
    
  }

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id:new FormControl(""),
      name:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      number:new FormControl("",Validators.required),
      city:new FormControl("",Validators.required)
    })
  }

}
