import { TestBed } from '@angular/core/testing';

import { AssociazioneRiepilogoService } from './associazione-riepilogo.service';

describe('AssociazioneRiepilogoService', () => {
  let service: AssociazioneRiepilogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociazioneRiepilogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
