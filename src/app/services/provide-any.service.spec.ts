import { TestBed } from '@angular/core/testing';

import { ProvideAnyService } from './provide-any.service';

describe('ProvideAnyService', () => {
  let service: ProvideAnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvideAnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
