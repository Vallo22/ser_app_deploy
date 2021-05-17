import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoStrutturaBreveCeComponent } from './tipo-struttura-breve-ce.component';

describe('TipoStrutturaBreveCeComponent', () => {
  let component: TipoStrutturaBreveCeComponent;
  let fixture: ComponentFixture<TipoStrutturaBreveCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoStrutturaBreveCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoStrutturaBreveCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
