import { TestBed } from '@angular/core/testing';

import { ApplianceService } from './appliance.service';

describe('ApplianceServiceService', () => {
  let service: ApplianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
