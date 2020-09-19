import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../../../user.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  form:FormGroup;
  user:any=[];
  id:number;

  update()
  {
    console.log(this.form.value);
    this.userservice.updateUserData(this.id,this.form.value).subscribe((res)=>{
      console.log("Success",res)
      alert("Data Updated")
      this.router.navigateByUrl("/")
    })
  }
 
  constructor(private userservice:UserService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"];
      this.userservice.getUserDataById(this.id).subscribe((data)=>{
        this.user=data;
        this.form=new FormGroup({
          name:new FormControl(this.user.name),
          email:new FormControl(this.user.email),
          password:new FormControl(this.user.password),         
          number:new FormControl(this.user.number),
          city:new FormControl(this.user.city),
        })
      })
    })

  }

}

