import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Rent } from '../model/rent';

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
    sessionStorage.removeItem('rent')
  }

  getLoggedInCustomer(): Customer {
    if (this.isLoggedIn()) {
      return JSON.parse(sessionStorage.getItem('account')!)
    }
    throw new Error('No logged in user')
  }

  hasCurrentRent(): boolean {
    return this.isLoggedIn() && sessionStorage.getItem('rent') != null
  }

  setCurrentRent(rent: Rent) {
    if (this.isLoggedIn()) {
      sessionStorage.setItem('rent', JSON.stringify(rent))
    }
    throw new Error('No logged in user')
  }

  getCurrentRent(): Rent {
    if (this.isLoggedIn() && this.hasCurrentRent()) {
      return JSON.parse(sessionStorage.getItem('rent')!)
    }
    else if (this.isLoggedIn()) {
      throw new Error('No current rent')
    }
    throw new Error('No logged in user')
  }
}
