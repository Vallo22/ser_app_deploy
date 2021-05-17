import { TestBed } from '@angular/core/testing';

import { AssociazioneInterventoStService } from './associazione-intervento-st.service';

describe('AssociazioneInterventoStService', () => {
  let service: AssociazioneInterventoStService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociazioneInterventoStService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
