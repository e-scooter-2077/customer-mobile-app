import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Position } from 'src/app/model/position';
import { Scooter } from 'src/app/model/scooter';
import { ScooterTwinsService } from 'src/app/services/api/scooter-twins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'admin-frontend-app';
  scooters: Scooter[] = [];
  center: Position = new Position(0, 0);
  private scooterSubscription?: Subscription;
  constructor(private scooterTwinsService: ScooterTwinsService) { }

  ngOnInit(): void {
    this.scooterSubscription = this.scooterTwinsService.getScooterTwins().subscribe(scooters => {
      if (scooters.length === 0) {
        return;
      }
      this.scooters = scooters;
      let acc = scooters.map(scooter => [scooter.position.latitude, scooter.position.longitude, 1]).reduce((prev, curr) => [prev[0] + curr[0], prev[1] + curr[1], prev[2] + curr[2]]);
      this.center = new Position(acc[0] / acc[2], acc[1] / acc[2]);
    });
  }

  ngOnDestroy(): void {
    this.scooterSubscription?.unsubscribe();
  }
}
