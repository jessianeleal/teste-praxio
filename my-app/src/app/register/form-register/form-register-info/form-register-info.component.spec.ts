import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterInfoComponent } from './form-register-info.component';

describe('FormRegisterInfoComponent', () => {
  let component: FormRegisterInfoComponent;
  let fixture: ComponentFixture<FormRegisterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
