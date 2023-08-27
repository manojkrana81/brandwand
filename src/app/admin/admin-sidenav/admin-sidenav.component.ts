import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit{

  constructor(
    private cookieService: CookieService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  logout(){
    this.cookieService.delete('token');
    this.router.navigate(['/authenticate']);
  }
}
