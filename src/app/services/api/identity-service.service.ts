import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { environment } from 'src/environments/environment';
import { CustomerDTO } from './dto/customerDTO';

@Injectable({
  providedIn: 'root'
})
export class IdentityServiceService {

  private baseUrl: string = environment.identityService

  constructor(private client: HttpClient){ }

  getCustomers(): Observable<Customer[]> {
    return of([new Customer('9e75b96f-5806-4f31-9093-20484b1b8f57', 'mario')])
    return this.client.get<CustomerDTO[]>(this.baseUrl + '/customers').pipe(
      map(a => a.map(c => this._toCustomerModel(c)))
    )
  }

  private _toCustomerModel(c: CustomerDTO): Customer {
    return new Customer(
      c.id,
      c.username
    )
  }
}
