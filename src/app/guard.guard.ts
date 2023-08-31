import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './area-inicio/servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionServicio:AutenticacionService, private route:Router) {
   
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser= this.autenticacionServicio.UsuarioAutenticado;
    
     if (currentUser ) {  
               
        return true;
      } else {           
      
        this.route.navigate(['/login']);
        return false;
      }
    }
  
}
