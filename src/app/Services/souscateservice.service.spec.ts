import { TestBed } from '@angular/core/testing';

import { SouscateserviceService } from './souscateservice.service';

describe('SouscateserviceService', () => {
  let service: SouscateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SouscateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
