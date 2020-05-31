import { Injectable } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private token: TokenStorageService) { }

    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({headers : req.headers.set(TOKEN_HEADER_KEY,'Bearer '+token)});
        }
        return next.handle(authReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ];