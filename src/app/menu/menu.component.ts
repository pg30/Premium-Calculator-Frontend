import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/auth/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private auth : AuthenticationService) { }

  ngOnInit() {
  }

}
