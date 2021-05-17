import { TestBed } from '@angular/core/testing';

import { ElementiStrutturaStService } from './elementi-struttura-st.service';

describe('ElementiStrutturaStService', () => {
  let service: ElementiStrutturaStService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementiStrutturaStService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
