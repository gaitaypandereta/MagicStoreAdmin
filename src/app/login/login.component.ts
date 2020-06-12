import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UsersLogin} from '../models/usersLogin';
import {Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }
  private user: UsersLogin={
    email:"",
    password: ""
  }
  ngOnInit() {

  }

    onLogin(){
      return this.authService
      .loginuser(this.user.email, this.user.password)
      .subscribe(
        data =>{
          this.authService.setUser(data.user);
          let token = data.id;
          this.authService.setToken(token);
          this.router.navigate(["/cukis"]);
           //console.log(data);
        },
        error => console.groupCollapsed(error)
      );
    }


}
