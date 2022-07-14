import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, switchMap, timer } from 'rxjs';
import { Position } from 'src/app/model/position';
import { Scooter } from 'src/app/model/scooter';
import { ScooterDTO } from './dto/scooterDTO';

const url = "https://escooter-dt-gateway.azurewebsites.net/api/scooters"

@Injectable({
  providedIn: 'root'
})
export class ScooterTwinsService {

  private scooters : Observable<Scooter[]>

  constructor(private client: HttpClient) {
    this.scooters = timer(1, 5000).pipe(
      switchMap(() => this._getScootersFromAzureDT()),
    );
  }

  private stopPolling = new Subject();

  ngOnDestroy() {
    this.stopPolling.next(0);
  }

  getScooterTwins(): Observable<Scooter[]>{
    return this.scooters;
  }

  private _getScootersFromAzureDT(): Observable<Scooter[]> {
    let scooterDTOs = this.client.get<ScooterDTO[]>(url);
    return scooterDTOs.pipe(
      map((x,_) => x
      .filter(s => s.connected)
      .map(s=> new Scooter(
        s.id,
        s.batteryLevel,
        new Position(s.latitude, s.longitude),
        s.locked,
        s.rented,
        s.enabled,
        s.standby
      )))
    )
  }
}
