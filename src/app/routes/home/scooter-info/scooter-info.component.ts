import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Scooter } from 'src/app/model/scooter';
import { RentServiceService } from 'src/app/services/api/rent-service.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-scooter-info',
  templateUrl: './scooter-info.component.html',
  styleUrls: ['./scooter-info.component.scss']
})
export class ScooterInfoComponent implements OnInit {
  @Input('scooter') scooter?: Scooter;
  @Output() buttonClicked = new EventEmitter<string>();


  constructor(
    readonly rentService: RentServiceService,
    private toastr: ToastrService,
    private login: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public rentScooter(scooter: Scooter) {
    this.rentService
      .rentScooter(scooter, this.login.getLoggedInCustomer())
      .subscribe({
        next: rent => {
          this.login.setCurrentRent(rent);
          this.router.navigate(['/rent']);
        },
        error: res => this.toastr.error(JSON.stringify(res.error.errors)),
      });
  }

  public ringScooter(scooter: Scooter) {
    console.log("RING");
    this.buttonClicked.emit();
  }
}
