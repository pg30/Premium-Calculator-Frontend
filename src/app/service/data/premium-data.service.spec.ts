import { TestBed } from '@angular/core/testing';

import { PremiumDataService } from './premium-data.service';

describe('PremiumDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PremiumDataService = TestBed.get(PremiumDataService);
    expect(service).toBeTruthy();
  });
});
