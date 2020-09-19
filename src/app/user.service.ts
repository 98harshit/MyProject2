import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { identifierModuleUrl } from '@angular/compiler';

const api='http://localhost/DAC-feb-2020/AngularProject/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  saveUserData(data)
  {
    return this.http.post(api + 'insert.php',data);
  }

   getUserData()
  {
    //return this.http.get<User[]>(api + 'user-list.php')
    return this.http.get(api + 'user-list.php')
  }

  getUserDataById(id)
  {
    return this.http.get(api +'getrecordbyid.php?id='+id);
  }

  updateUserData(id,data)
  {
    return this.http.put(api+'update.php?id='+id,data) 
  }

  deleteUserData(id)
  {
    //this.http.delete<User[]>(api+id);
    return this.http.delete(api + 'delete.php',id);
  }
}
