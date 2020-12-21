import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../services/api.service";

@Injectable()
export class AdminSecurity implements CanActivate {
  constructor(private router: Router, private api: ApiService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let admin = sessionStorage.getItem('adminData');
    if (admin) {
        return true;
    }
    else {
        this.router.navigate(['/sign-in']);
        return false;
    }
  }
}