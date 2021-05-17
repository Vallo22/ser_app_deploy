import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoStrutturaBreveStComponent } from './tipo-struttura-breve-st.component';

describe('TipoStrutturaBreveStComponent', () => {
  let component: TipoStrutturaBreveStComponent;
  let fixture: ComponentFixture<TipoStrutturaBreveStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoStrutturaBreveStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoStrutturaBreveStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
