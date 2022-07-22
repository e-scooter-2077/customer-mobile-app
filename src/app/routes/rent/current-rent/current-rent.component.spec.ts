import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRentComponent } from './current-rent.component';

describe('CurrentRentComponent', () => {
  let component: CurrentRentComponent;
  let fixture: ComponentFixture<CurrentRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
