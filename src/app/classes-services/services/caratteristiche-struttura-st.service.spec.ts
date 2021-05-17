import { TestBed } from '@angular/core/testing';

import { CaratteristicheStrutturaStService } from './caratteristiche-struttura-st.service';

describe('CaratteristicheStrutturaStService', () => {
  let service: CaratteristicheStrutturaStService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaratteristicheStrutturaStService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
