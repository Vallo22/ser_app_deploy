import { TestBed } from '@angular/core/testing';

import { QualitaEdificiStService } from './qualita-edifici-st.service';

describe('QualitaEdificiStService', () => {
  let service: QualitaEdificiStService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualitaEdificiStService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
