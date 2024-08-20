import { TestBed } from '@angular/core/testing';

import { PayementClientService } from './payement-client.service';

describe('PayementClientService', () => {
  let service: PayementClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayementClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
