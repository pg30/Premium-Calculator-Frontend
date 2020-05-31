import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/auth/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
      this.auth.logout();
  }

}
