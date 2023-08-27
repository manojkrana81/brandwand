import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/admin/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit{
  username: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private cookieService: CookieService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  login(){
    this.authService.login({username: this.username, password: this.password})
      .subscribe((res:any)=>{
        if(res.status=='ok'){
          // Router to user to dashboard
          this.cookieService.set('token', res.data, { path: '/', sameSite: "Strict" });
          this.router.navigate(['/admin/blogs-list']);
        }
        else if(res.status=='error'){ 
          this.snackBar.open(res.message, 'Ok', {
            duration: 3000
          });
        }
      },
      (err)=>{
        this.snackBar.open('Something went wrong', 'Ok', {
          duration: 3000,
        });
      }
      )
  }
}
