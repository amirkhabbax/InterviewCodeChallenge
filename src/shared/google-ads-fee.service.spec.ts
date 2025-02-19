import { TestBed } from '@angular/core/testing';

import { GoogleAdsFeeService } from './google-ads-fee.service';

describe('GoogleAdsFeeService', () => {
  let service: GoogleAdsFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleAdsFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
