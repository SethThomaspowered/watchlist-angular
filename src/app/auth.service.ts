import { Injectable } from '@angular/core';
import { HttpClient, HttpContext} from '@angular/common/http';
import { BYPASS_LOG } from './token-interceptor.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "https://watch-list-api.herokuapp.com/auth/users/register";
  private _loginUrl = "https://watch-list-api.herokuapp.com/auth/users/login";
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user, { context: new HttpContext().set(BYPASS_LOG, true) });
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user, { context: new HttpContext().set(BYPASS_LOG, true) });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
