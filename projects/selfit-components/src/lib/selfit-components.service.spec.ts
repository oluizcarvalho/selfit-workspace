import { TestBed } from '@angular/core/testing';

import { SelfitComponentsService } from './selfit-components.service';

describe('SelfitComponentsService', () => {
  let service: SelfitComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfitComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
