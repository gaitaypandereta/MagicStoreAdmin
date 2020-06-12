import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/usuario';

  constructor(private http:HttpClient) { }



  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number | string): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  createCuki(user) {
  this.http.post(this.url, user).subscribe();
}
  updateUser(user:User){
  return this.http.put(this.url+'/'+user.id, user);
}

  deleteUser(user: User){
  return this.http.delete(this.url +'/'+ user.id);
}

}
