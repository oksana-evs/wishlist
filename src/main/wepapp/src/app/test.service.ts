import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getTitle(): Observable<string> {
    return  this.http.get(this.url+'/here', {responseType: "text"});
  }
}
