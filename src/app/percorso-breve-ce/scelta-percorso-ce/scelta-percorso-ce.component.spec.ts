import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaPercorsoCeComponent } from './scelta-percorso-ce.component';

describe('SceltaPercorsoCeComponent', () => {
  let component: SceltaPercorsoCeComponent;
  let fixture: ComponentFixture<SceltaPercorsoCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceltaPercorsoCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceltaPercorsoCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
