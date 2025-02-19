import { TestBed } from '@angular/core/testing';

import { UnsubscriptionService } from './unsubscription.service';

describe('UnsubscriptionService', () => {
  let service: UnsubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
