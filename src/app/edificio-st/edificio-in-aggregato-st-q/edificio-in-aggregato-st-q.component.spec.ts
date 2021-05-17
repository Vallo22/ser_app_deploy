import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioInAggregatoStQComponent } from './edificio-in-aggregato-st-q.component';

describe('EdificioInAggregatoStQComponent', () => {
  let component: EdificioInAggregatoStQComponent;
  let fixture: ComponentFixture<EdificioInAggregatoStQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioInAggregatoStQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioInAggregatoStQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
