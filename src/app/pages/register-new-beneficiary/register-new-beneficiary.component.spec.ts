import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewBeneficiaryComponent } from './register-new-beneficiary.component';

describe('RegisterNewBeneficiaryComponent', () => {
  let component: RegisterNewBeneficiaryComponent;
  let fixture: ComponentFixture<RegisterNewBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNewBeneficiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
