import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from 'src/app/class/login-form';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ActivatedRoute } from '@angular/router';
import { JwtResponse } from 'src/app/class/jwt-response';
import { Observable } from 'rxjs';
import { SignUpForm } from 'src/app/class/sign-up-form';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private loginUrl = 'http://localhost:8080/login';
    private signupUrl = 'http://localhost:8080/signup';

    constructor(
        private http: HttpClient,
        private interceptor: AuthInterceptorService,
        private route: ActivatedRoute,
        private tokenData : TokenStorageService
    ) { }

    authenticate(loginForm: LoginForm): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(this.loginUrl, loginForm, httpOptions);
    }

    signUp(info: SignUpForm) {
        return this.http.post<string>(this.signupUrl, info, httpOptions);
    }

    logout()
    {
        this.tokenData.signOut();
    }

    isUserLoggedIn()
    {
        if(this.tokenData.getToken())
            return true;
        return false;
    }
}
