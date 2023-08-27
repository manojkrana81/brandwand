import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '../services/admin/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad(route: Route): boolean {

    if(this.authService.isUserLoggedIn()){
      return true;
    }
    
    this.router.navigate(['/authenticate']);
    return false;
    
  //   const url: string = route.path;
  //   console.log('Url:'+ url);
  //   if (this.authService.isUserLoggedIn()) {
	// return true; 
  //   }
  //   this.authService.setRedirectUrl(url);
  //   this.router.navigate([ this.authService.getLoginUrl() ]);
  //   return false;		
  }
}
