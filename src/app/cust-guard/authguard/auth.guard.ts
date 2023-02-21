import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  reverse:boolean=false
  
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(sessionStorage.getItem("userId")){
        return true;
      }else{
        
        return  false;
      }
          
  }
  
}
