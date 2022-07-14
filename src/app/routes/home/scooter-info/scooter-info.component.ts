import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { first } from 'rxjs';
import { Scooter } from 'src/app/model/scooter';
import { RentServiceService } from 'src/app/services/api/rent-service.service';

@Component({
  selector: 'app-scooter-info',
  templateUrl: './scooter-info.component.html',
  styleUrls: ['./scooter-info.component.scss']
})
export class ScooterInfoComponent implements OnInit {
  @Input('scooter') scooter?: Scooter;
  @Output() buttonClicked = new EventEmitter<string>();


  constructor(readonly rentService: RentServiceService) { }

  ngOnInit(): void {
  }

  public rentScooter(scooter: Scooter) {
    console.log("RENT");
    this.buttonClicked.emit();
  }

  public ringScooter(scooter: Scooter) {
    console.log("RING");
    this.buttonClicked.emit();
  }
}
