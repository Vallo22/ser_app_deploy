import { TestBed } from '@angular/core/testing';

import { PerformanceEnergeticaCeService } from './performance-energetica-ce.service';

describe('PerformanceEnergeticaCeService', () => {
  let service: PerformanceEnergeticaCeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceEnergeticaCeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
