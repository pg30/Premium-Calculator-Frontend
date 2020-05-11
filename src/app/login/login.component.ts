import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = 'pranay';
  password = '';
  errorMessage = 'Invalid credentials';
  invalid = false;

  constructor(private router : Router,
    private authenticationService : AuthenticationService) { }

  ngOnInit() 
  {
  }

  handleLogin()
  {
    if(this.authenticationService.authenticate(this.username,this.password))
    {
      this.invalid = false;
      this.router.navigate(['home',this.username]);
    }
    else
      this.invalid = true;
  }
}
