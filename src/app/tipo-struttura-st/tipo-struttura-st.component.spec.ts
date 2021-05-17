import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoStrutturaStComponent } from './tipo-struttura-st.component';

describe('TipoStrutturaStComponent', () => {
  let component: TipoStrutturaStComponent;
  let fixture: ComponentFixture<TipoStrutturaStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoStrutturaStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoStrutturaStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
