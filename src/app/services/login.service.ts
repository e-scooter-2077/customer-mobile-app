import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('account') != null
  }

  login(user: Customer) {
    sessionStorage.setItem('account', JSON.stringify(user))
  }

  logout() {
    sessionStorage.removeItem('account')
  }

  getLoggedInCustomer(): Customer {
    if (this.isLoggedIn()) {
      return JSON.parse(sessionStorage.getItem('account')!)
    }
    throw new Error('No logged in user')
  }
}
