import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioInAggregatoStComponent } from './edificio-in-aggregato-st.component';

describe('EdificioInAggregatoStComponent', () => {
  let component: EdificioInAggregatoStComponent;
  let fixture: ComponentFixture<EdificioInAggregatoStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioInAggregatoStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioInAggregatoStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
