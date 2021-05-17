import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutazioneInterventiCeComponent } from './valutazione-interventi-ce.component';

describe('ValutazioneInterventiCeComponent', () => {
  let component: ValutazioneInterventiCeComponent;
  let fixture: ComponentFixture<ValutazioneInterventiCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValutazioneInterventiCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutazioneInterventiCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
