import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Scooter } from 'src/app/model/scooter';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentServiceService {

  private baseUrl: string = environment.rentService

  constructor(private httpClient: HttpClient) {}

  public enableScooter(scooter: Scooter): Observable<Scooter> {
    return this.httpClient.post(`${this.baseUrl}/scooters/${scooter.id}/enable`, {}).pipe(
      map(_ => scooter)
    )
  }

  public disableScooter(scooter: Scooter): Observable<Scooter> {
    return this.httpClient.post(`${this.baseUrl}/scooters/${scooter.id}/disable`, {}).pipe(
      map(_ => scooter)
    )
  }
}
