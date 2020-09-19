import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users:User[];

  getData()
  {
    this._userservice.getUserData().subscribe((data:User[])=>{
      this.users=data;
      console.log(this.users);
    });
  }

  delete(id)
  {
    var myFormData=new FormData();
    myFormData.append('id',id);
    this._userservice.deleteUserData(myFormData).subscribe((res)=>{
      console.log("success",res);
      alert("data deleted");
      this.getData();
    })
  }

  constructor(private _userservice:UserService) { }
 
  ngOnInit(): void {
    this.getData()
   
  }

  

}
