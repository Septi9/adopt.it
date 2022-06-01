import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Adoptions} from "../adoptions";
import {User} from "../user";



@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  private baseURL = "https://adopt-backend.azurewebsites.net/adoptions";
  private baseURLPost = "https://adopt-backend.azurewebsites.net/adoptions-post";
  // private baseURL = "https://adopt-it.azurewebsites.net/adoptions-post";

  constructor(private http: HttpClient) { }

  getAdoptionsList(): Observable<Adoptions[]> {
    return this.http.get<Adoptions[]>(`${this.baseURL}`);
  }

  create(data): Observable<Adoptions[]> {
    return this.http.post<Adoptions[]>(`${this.baseURLPost}`, data);
  }
}
