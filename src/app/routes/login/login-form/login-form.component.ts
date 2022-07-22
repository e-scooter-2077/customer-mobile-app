import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { IdentityServiceService } from 'src/app/services/api/identity-service.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public customers: Customer[] = []

  constructor(
    private loginService: LoginService,
    private identityService: IdentityServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.identityService.getCustomers().pipe(first()).subscribe(customers => {
        this.customers = customers
      }
    )
  }

  login(customer: Customer) {
    this.loginService.login(customer)
    this.router.navigate(['/'])
  }

}
