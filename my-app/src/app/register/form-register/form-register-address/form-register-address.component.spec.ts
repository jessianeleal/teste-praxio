import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterAddressComponent } from './form-register-address.component';

describe('FormRegisterAddressComponent', () => {
  let component: FormRegisterAddressComponent;
  let fixture: ComponentFixture<FormRegisterAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisterAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
