import { TestBed } from '@angular/core/testing';

import { RisultatoSelezioneCeService } from './risultato-selezione-ce.service';

describe('RisultatoSelezioneCeService', () => {
  let service: RisultatoSelezioneCeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisultatoSelezioneCeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
