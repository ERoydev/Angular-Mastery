import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate   {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // This return decide if i can access this route or not i provide this in my Route Object in user.module.ts
        const id = route.params['id'];
        if (id % 2 == 0) {
            return true;

        } else {
            return false;
        }
    }
}