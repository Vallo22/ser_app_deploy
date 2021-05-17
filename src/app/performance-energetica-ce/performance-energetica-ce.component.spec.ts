import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceEnergeticaCeComponent } from './performance-energetica-ce.component';

describe('PerformanceEnergeticaCeComponent', () => {
  let component: PerformanceEnergeticaCeComponent;
  let fixture: ComponentFixture<PerformanceEnergeticaCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceEnergeticaCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceEnergeticaCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
