import { TestBed } from '@angular/core/testing';

import { PdfDataService } from './pdf-data.service';

describe('PdfDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfDataService = TestBed.get(PdfDataService);
    expect(service).toBeTruthy();
  });
});
