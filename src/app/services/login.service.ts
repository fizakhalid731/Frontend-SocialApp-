import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) { }

  loginUser(formData: {email: string; password: string}): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
