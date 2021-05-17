import { TestBed } from '@angular/core/testing';

import { EdificioStService } from './edificio-st.service';

describe('EdificioStService', () => {
  let service: EdificioStService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdificioStService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
