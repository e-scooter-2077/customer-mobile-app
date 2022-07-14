import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { Scooter } from 'src/app/model/scooter';

@Component({
  selector: 'app-scooter-marker',
  templateUrl: './scooter-marker.component.html',
  styleUrls: ['./scooter-marker.component.scss']
})
export class ScooterMarkerComponent implements OnInit {

  @Input("scooter") scooter!: Scooter;
  @Output("click") click = new EventEmitter<void>();
  @ViewChild(MapMarker) marker!: MapMarker;

  constructor() { }

  ngOnInit(): void {
  }

  get iconUrl(): string {
    if (this.scooter.standby) {
      return 'assets/images/scooter-icon-yellow.png';
    }
    if (this.scooter.rented) {
      return 'assets/images/scooter-icon-red.png';
    }
    if (this.scooter.enabled) {
      return 'assets/images/scooter-icon-green.png';
    }
    return 'assets/images/scooter-icon-grey.png';
  }

  get title() {
    return "marker-" + this.scooter.id;
  }
}
