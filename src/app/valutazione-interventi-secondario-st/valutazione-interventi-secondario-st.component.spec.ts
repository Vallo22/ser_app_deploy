import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutazioneInterventiSecondarioStComponent } from './valutazione-interventi-secondario-st.component';

describe('ValutazioneInterventiSecondarioStComponent', () => {
  let component: ValutazioneInterventiSecondarioStComponent;
  let fixture: ComponentFixture<ValutazioneInterventiSecondarioStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValutazioneInterventiSecondarioStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutazioneInterventiSecondarioStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
