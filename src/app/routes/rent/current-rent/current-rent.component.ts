import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-current-rent',
  templateUrl: './current-rent.component.html',
  styleUrls: ['./current-rent.component.scss']
})
export class CurrentRentComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    if (!this.loginService.hasCurrentRent()) {
      this.router.navigate(['/map']);
    }
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
