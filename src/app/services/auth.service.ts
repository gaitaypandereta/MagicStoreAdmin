import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htttp: HttpClient, private myRoute:Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  });

/*
  registeruser(){
    const url_api="http://localhost:3000/cukis";
    return this.htttp.post(
      url_api {
        name,
        email,
        password
      },
        {headers: this.headers}
    )
    .pipe(map(data => data));

  }
*/
loginuser(email:string, password:string):Observable<any>{
 const url_api = "http://localhost:3000/userlogin?include=user"

 return this.htttp
    .post( url_api, {email, password},{headers: this.headers})
    .pipe(map(data => data));
}

  setUser(user):void{
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token):void{
    localStorage.setItem("accessToken", token);

  }

  getToken(){
   return localStorage.getItem("accessToken");
  }

  getCurrentUser(){
    let user_string = localStorage.getItem("currentUser");
    if(!isNullOrUndefined){
      let user = JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }


  logoutUser(){
    let accessToken = localStorage.getItem("accessToken")
    const url_api = "http://localhost:3000/userlogin?access_token=${access_token}";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.htttp.post(url_api, {headers: this.headers} );
  }


 //------------------------
  sendTokene(token: string) {

    localStorage.setItem("LoggedInUser", token)

  }

  getTokene() {

    return localStorage.getItem("LoggedInUser")

  }

  isLoggednIne() {

    return this.getToken() !== null;

  }

  logoute() {

    localStorage.removeItem("LoggedInUser");

    this.myRoute.navigate(["login"]);

  }



}
