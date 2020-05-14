import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralParameterListComponent } from './general-parameter-list.component';

describe('GeneralParameterListComponent', () => {
  let component: GeneralParameterListComponent;
  let fixture: ComponentFixture<GeneralParameterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralParameterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralParameterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
