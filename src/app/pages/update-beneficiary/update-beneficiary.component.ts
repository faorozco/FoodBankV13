import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BeneficiaryModel } from 'src/app/models/beneficiary.model';
import { SheetConectionService } from 'src/app/services/sheet-conection.service';

@Component({
  selector: 'app-update-beneficiary',
  templateUrl: './update-beneficiary.component.html',
  styleUrls: ['./update-beneficiary.component.css'],
})
export class UpdateBeneficiaryComponent implements OnInit {
  title = 'Update Beneficiary';
  formSheet!: FormGroup;
  alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';
  alertText = '';
  partForm: number = 1;
  activeSubmit = true;
  beneficiary: any = undefined;
  modalTitle: string = 'Modal Title';
  bodyText: string = 'Aqui se coloca el texto';
  btnCloseTextModal: string = 'Close';
  btnSaveTextModal: 'delete' = 'delete';
  colorBtnSave: 'success' | 'danger' = 'danger';

  constructor(
    private sheetConection: SheetConectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formSheet = new FormGroup({
      RegistrationDate: new FormControl('pendiente', Validators.required),
      DocumentType: new FormControl('', Validators.required),
      DocumentNumber: new FormControl('', [Validators.required]),
      Name: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      BirthDate: new FormControl('', Validators.required),
      Sex: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      Nationality: new FormControl('', Validators.required),
      FemaleBetween0_4: new FormControl('', Validators.required),
      MaleBetween0_4: new FormControl('', Validators.required),
      FemaleBetween5_17: new FormControl('', Validators.required),
      MaleBetween5_17: new FormControl('', Validators.required),
      FemaleBetween18_64: new FormControl('', Validators.required),
      MaleBetween18_64: new FormControl('', Validators.required),
      FemaleOver65: new FormControl('', Validators.required),
      MaleOver65: new FormControl('', Validators.required),
      photo: new FormControl('agregar link de carpeta', Validators.required),
    });
    this.beneficiary = history.state.beneficiary;
    this.formSheet.patchValue(this.beneficiary);

    if (this.beneficiary === undefined) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    return this.sheetConection
      .updateBeneficiary(this.beneficiary.index, this.formSheet.value)
      .subscribe({
        next: () => {
          this.alertType = 'success';
          this.alertText = 'Beneficiary updated successfully';
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        error: () => {
          this.alertType = 'danger';
          this.alertText = 'An error occurred';
          setTimeout(() => {
            this.alertType = 'none';
            this.alertText = '';
          }, 2000);
        },
      });
  }

  deleteBeneficiaryModal() {
    this.modalTitle = 'Delete Beneficiary';
    this.bodyText = `Are you sure you want to delete ${this.beneficiary.Name} ${this.beneficiary.LastName}?`;
    this.btnSaveTextModal = 'delete';
    this.btnCloseTextModal = 'Cancel';
    this.colorBtnSave = 'danger';
  }

  saveChangesModal() {
    return this.sheetConection.deleteBeneficiary(this.beneficiary.index).subscribe({
      next: () => {
        this.alertType = 'success';
        this.alertText = 'Beneficiary deleted successfully';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: () => {
        this.alertType = 'danger';
        this.alertText = 'An error occurred';
        setTimeout(() => {
          this.alertType = 'none';
          this.alertText = '';
        }, 2000);
      },
    });
  }
}
