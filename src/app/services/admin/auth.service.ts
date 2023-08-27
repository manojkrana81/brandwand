import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  login(body:any){
    return this.httpClient.post(`${this.baseUrl}/login`, body);
  }

  isUserLoggedIn(){
    if(this.cookieService.get('token')){
      return true;
    }
    else{
      return false;
    }
  }
}
