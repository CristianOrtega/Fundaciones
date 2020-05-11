import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralParameterComponent } from './general-parameter.component';

describe('GeneralParameterComponent', () => {
  let component: GeneralParameterComponent;
  let fixture: ComponentFixture<GeneralParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
