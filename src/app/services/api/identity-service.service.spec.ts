import { TestBed } from '@angular/core/testing';

import { IdentityServiceService } from './identity-service.service';

describe('IdentityServiceService', () => {
  let service: IdentityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
