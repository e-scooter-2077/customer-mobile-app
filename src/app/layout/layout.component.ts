import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { KeyPressDistributionService } from '../services/key-press-distribution.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  title: string = "E-Scooter 2077 User App";

  constructor(
    private keyService: KeyPressDistributionService
  ) { }

  @HostListener('window:keyup', ['$event'])
  public onKeyUp(eventData: KeyboardEvent): void {
    if (eventData.key === ' ') {
      this.keyService.distributeKeyPress(eventData);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  logout(): void {
  }
}
