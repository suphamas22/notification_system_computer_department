import { TestBed } from '@angular/core/testing';

import { DairyService } from './dairy.service';

describe('DairyService', () => {
  let service: DairyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DairyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
