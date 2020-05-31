import { Component, OnInit } from '@angular/core';
import { SignUpForm } from '../class/sign-up-form';
import { AuthenticationService } from '../service/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    constructor(
        private auth: AuthenticationService,
        private router : Router
    ) { }

    name: string = '';
    email: string = '';
    mobile: number = undefined;
    password: string = '';
    cnfpassword: string = '';
    invalidPassword = false;
    invalid = false;
    errorMessage:string;

    ngOnInit() {
        if(this.auth.isUserLoggedIn)
        {
            this.auth.logout();
        }
    }

    handleSignup() {
        if (this.password != this.cnfpassword) {
            this.invalidPassword = true;
        }
        else {
            let form: SignUpForm = new SignUpForm(this.name, this.email, this.password, this.mobile);
            console.log(form);
            this.auth.signUp(form).subscribe(
                data => {
                    console.log(data);
                    this.router.navigate(['login']);
                },
                error => {
                    console.log(error);
                    this.errorMessage = error.error.message;                    
                    this.invalid = true;
                }
            )
        }
    }
}
