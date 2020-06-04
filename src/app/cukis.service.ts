import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cuki } from './models/cuki';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CukisService {
  url = 'http://localhost:3000/cukis';
  constructor(private http:HttpClient) { }


  getCukis(): Observable<Cuki[]> {
    return this.http.get<Cuki[]>(this.url);
  }




  getCuki(id: number | string): Observable<Cuki> {
    return this.http.get<Cuki>(this.url + '/' + id);
  }

  createCuki(cuki) {
  this.http.post(this.url, cuki).subscribe();
}
  updateCuki(cuki: Cuki){
  return this.http.put(this.url+'/'+cuki.id, cuki);
}

  deleteCuki(cuki: Cuki){
  return this.http.delete(this.url +'/'+ cuki.id);
}

}
