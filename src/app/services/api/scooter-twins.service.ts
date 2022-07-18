import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, switchMap, timer } from 'rxjs';
import { Position } from 'src/app/model/position';
import { Scooter } from 'src/app/model/scooter';
import { environment } from 'src/environments/environment';
import { ScooterDTO } from './dto/scooterDTO';

@Injectable({
  providedIn: 'root'
})
export class ScooterTwinsService {

  private scooters : Observable<Scooter[]>
  private url : string = environment.dtGateway + '/api/scooters'

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
    let scooterDTOs = this.client.get<ScooterDTO[]>(this.url);
    return scooterDTOs.pipe(
      map(s => this._toScooterList(s))
    )
  }

  private _toScooterModel(s: ScooterDTO): Scooter {
    return new Scooter(
      s.id,
      s.batteryLevel,
      new Position(s.latitude, s.longitude),
      s.locked,
      s.rented,
      s.enabled,
      s.standby
    )
  }

  private _toScooterList(scooters: ScooterDTO[]): Scooter[] {
    return scooters
      .filter(s => s.connected)
      .map(s => this._toScooterModel(s))
      .filter(s => s.canBeRented())
  }
}
