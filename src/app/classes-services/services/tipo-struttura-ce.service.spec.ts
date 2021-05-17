import { TestBed } from '@angular/core/testing';

import { TipoStrutturaCeService } from './tipo-struttura-ce.service';

describe('TipoStrutturaCeService', () => {
  let service: TipoStrutturaCeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoStrutturaCeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
