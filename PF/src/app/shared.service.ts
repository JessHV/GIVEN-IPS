import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

  getMethodList():Observable<any[]> {
    return this.http.get<any[]>(this.ApiUrl + '/metodo/');
  }

  getAnticoncepcionList():Observable<any[]> {
    return this.http.get<any[]>(this.ApiUrl + '/anticoncepcion/');
  }

  // getAllMethods():Observable<any[]> {
  //   return this.http.get<any[]>(this.ApiUrl + '/metodo/');
  // }

}
