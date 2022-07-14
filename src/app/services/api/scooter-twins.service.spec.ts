import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ScooterTwinsService } from './scooter-twins.service';

describe('ScooterTwinsService', () => {
  let service: ScooterTwinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ScooterTwinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
