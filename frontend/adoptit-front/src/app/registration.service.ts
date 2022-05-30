import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }

  public loginUserFromRemote(user :User):Observable<any> {
    return this._http.post<any>("http://localhost:8080/login", user)
  }

  public registerUserFromRemote(user :User):Observable<any> {
    return this._http.post<any>("http://localhost:8080/registeruser", user)
  }

}
