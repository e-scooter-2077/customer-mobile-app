import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScooterMarkerComponent } from './scooter-marker.component';

describe('ScooterMarkerComponent', () => {
  let component: ScooterMarkerComponent;
  let fixture: ComponentFixture<ScooterMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScooterMarkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScooterMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
