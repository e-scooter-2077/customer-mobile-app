import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoggedIn(): boolean {
    return false
  }

  login(id: string) {
    console.log('Login:', id)
  }
}
