import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListBeneficiariesComponent } from './admin-list-beneficiaries.component';

describe('AdminListBeneficiariesComponent', () => {
  let component: AdminListBeneficiariesComponent;
  let fixture: ComponentFixture<AdminListBeneficiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListBeneficiariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListBeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
