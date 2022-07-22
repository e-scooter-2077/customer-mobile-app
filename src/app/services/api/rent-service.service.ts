import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Rent, RentCancellationInfo, RentConfirmationInfo, RentStopInfo } from 'src/app/model/rent';
import { Scooter } from 'src/app/model/scooter';
import { environment } from 'src/environments/environment';
import { RentDTO } from './dto/rentDTO';
import { ServiceDTO } from './dto/serviceDTO';

@Injectable({
  providedIn: 'root'
})
export class RentServiceService {

  private baseUrl: string = environment.rentService

  constructor(private httpClient: HttpClient) {}

  public rentScooter(scooter: Scooter, customer: Customer): Observable<Rent> {
    return this.httpClient.post<ServiceDTO<RentDTO>>(`${this.baseUrl}/rents?version=1.0`, {
      scooterId: scooter.id,
      customerId: customer.id
    }).pipe(
      map(res => res.data.toRentModel())
    )
  }
}
