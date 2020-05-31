import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../class/login-form';
import { AuthenticationService } from '../service/auth/authentication.service';
import { TokenStorageService } from '../service/auth/token-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    email = '';
    password = '';
    errorMessage = 'Invalid credentials';
    invalid = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private tokenStorage : TokenStorageService 
    ) { }

    ngOnInit() {
        console.log(this.tokenStorage.getToken());
        if(this.authenticationService.isUserLoggedIn())
        {
            this.router.navigate(['home',this.tokenStorage.getUsername()]);
        }
    }

    handleLogin() {
        let loginForm = new LoginForm(this.email, this.password);
        console.log(loginForm);
        this.authenticationService.authenticate(loginForm).subscribe(
            data => {
                this.invalid = false;
                console.log(data);
                this.tokenStorage.saveEmail(data.email);
                this.tokenStorage.saveUsername(data.username);
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveAuthorities(data.authorities);
                this.router.navigate(['home',data.username]);
            },
            error => {
                this.invalid = true;
                console.log(error);
            }
        );
    }
}
