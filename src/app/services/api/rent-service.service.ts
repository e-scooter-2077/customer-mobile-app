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
      map(res =>
        new Rent(
          res.data.id,
          res.data.scooterId,
          res.data.customerId,
          res.data.requestTimestamp,
          res.data.confirmationInfo ? new RentConfirmationInfo(res.data.confirmationInfo.timestamp) : undefined,
          res.data.cancellationInfo ? new RentCancellationInfo(res.data.cancellationInfo.reason) : undefined,
          res.data.stopInfo ? new RentStopInfo(res.data.stopInfo.reason, res.data.stopInfo.timestamp) : undefined))
    )
  }
}
