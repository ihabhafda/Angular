import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IhabService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    let myData = this.http.get<any>("https://run.mocky.io/v3/ec762773-24bb-45ad-9360-029fd281dcc8");
    return myData;
  }
}
