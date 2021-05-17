import { TestBed } from '@angular/core/testing';

import { AssociazioneInterventoCeService } from './associazione-intervento-ce.service';

describe('AssociazioneInterventoCeService', () => {
  let service: AssociazioneInterventoCeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociazioneInterventoCeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
