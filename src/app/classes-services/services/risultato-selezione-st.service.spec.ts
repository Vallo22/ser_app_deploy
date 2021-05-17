import { TestBed } from '@angular/core/testing';

import { RisultatoSelezioneStService } from './risultato-selezione-st.service';

describe('RisultatoSelezioneStService', () => {
  let service: RisultatoSelezioneStService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisultatoSelezioneStService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
