import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }
 /**
     * @author Daniel Dominguez
     * Servicio paa login de papApp
     * @param {json} filters json
     * @returns json
     */
  login(username: any): Observable<any> {
    return this.http.post("https://web-services-papappcost-umb.onrender.com/login/auth", username);
  }
}
