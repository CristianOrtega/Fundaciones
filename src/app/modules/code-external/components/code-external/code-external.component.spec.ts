import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExternalComponent } from './code-external.component';

describe('CodeExternalComponent', () => {
  let component: CodeExternalComponent;
  let fixture: ComponentFixture<CodeExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
