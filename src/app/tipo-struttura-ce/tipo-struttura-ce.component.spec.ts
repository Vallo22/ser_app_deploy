import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoStrutturaCeComponent } from './tipo-struttura-ce.component';

describe('TipoStrutturaCeComponent', () => {
  let component: TipoStrutturaCeComponent;
  let fixture: ComponentFixture<TipoStrutturaCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoStrutturaCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoStrutturaCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
