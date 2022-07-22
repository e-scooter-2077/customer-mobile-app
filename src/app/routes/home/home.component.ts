import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Position } from 'src/app/model/position';
import { Scooter } from 'src/app/model/scooter';
import { ScooterTwinsService } from 'src/app/services/api/scooter-twins.service';
import { LoginService } from 'src/app/services/login.service';
import { ScooterMarkerComponent } from './scooter-marker/scooter-marker.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(MapInfoWindow) info!: MapInfoWindow;
  @ViewChildren("marker") scooterMarkers!: QueryList<ScooterMarkerComponent>;
  scooters: Scooter[] = [];
  center: Position = new Position(0, 0);
  private scooterSubscription?: Subscription;
  highlightedScooter?: Scooter;
  zoom = 17;

  constructor(
    private scooterTwinsService: ScooterTwinsService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.scooterSubscription = this.scooterTwinsService.getScooterTwins().subscribe(newScooters => {
      if (newScooters.length === 0) {
        return;
      }
      if (this.scooters.length === 0) {
        this.scooters = newScooters;
        this.centerMapWithScooters(this.scooters);
        return;
      }
      const scooterMap = new Map<string, {scooter: Scooter, deleted: boolean, index: number}>(this.scooters.map((scooter, idx) => [scooter.id, {scooter: scooter, deleted: true, index: idx}]));
      for (const newScooter of newScooters) {
        const id = newScooter.id;
        if (scooterMap.has(id)) {
          const oldScooterManager = scooterMap.get(id)!;
          oldScooterManager.deleted = false;
          this.updateScoooter(oldScooterManager.scooter, newScooter);
        } else {
          this.scooters.push(newScooter);
        }
      }
      for (const scooterManager of scooterMap.values()) {
        if (scooterManager.deleted) {
          this.scooters.splice(scooterManager.index, 1);
        }
      }
    });
  }

  updateScoooter(dst: Scooter, src: Scooter) {
    dst.batteryLevel = src.batteryLevel;
    dst.position = src.position;
    dst.rented = src.rented;
    dst.enabled = src.enabled;
    dst.standby = src.standby;
    dst.id = src.id;
    dst.locked = src.locked;
  }

  ngOnDestroy(): void {
    this.scooterSubscription?.unsubscribe();
  }

  openInfoWindow(marker: ScooterMarkerComponent) {
    this.highlightedScooter = marker.scooter;
    this.info.open(marker.marker);
  }

  buttonClickedOnInfo() {
    this.info.close();
  }

  centerScooter(id: string) {
    var scooter = this.scooters.find(s => s.id == id);
    if (scooter) {
      this.center = scooter?.position;
      const marker = this.scooterMarkers.find(m => m.scooter.id === id);
      if (marker) {
        this.openInfoWindow(marker);
      }
    }
  }

  centerMapWithScooters(scooters: Scooter[]) {
    const accumulator = scooters.map(scooter => [scooter.position.latitude, scooter.position.longitude, 1]).reduce((prev, curr) => [prev[0] + curr[0], prev[1] + curr[1], prev[2] + curr[2]]);
    this.center = new Position(accumulator[0] / accumulator[2], accumulator[1] / accumulator[2]);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
