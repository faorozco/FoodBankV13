import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MSM_ALERTS } from 'src/app/constants/msm-alert.const';
import { TIME_ALERTS } from 'src/app/constants/timeAlerts.const';
import { BeneficiaryModel } from 'src/app/models/beneficiary.model';
import { SheetConectionService } from 'src/app/services/sheets/sheet-conection.service';

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
  beneficiary: any = undefined;
  modalTitle: string = 'Modal Title';
  bodyText: string = 'Aqui se coloca el texto';
  btnCloseTextModal: string = 'Close';
  btnSaveTextModal: 'delete' = 'delete';
  colorBtnSave: 'success' | 'danger' = 'danger';
  totalPeople!: number;
  disableButtonSubmit!: boolean;

  constructor(
    private sheetConection: SheetConectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['./']);
    }
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
      PhoneNumber: new FormControl('', Validators.required),
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

    this.formSheet.valueChanges.subscribe((changes) => {
      this.sumTotalPeople();
    });
  }

  sumTotalPeople() {
    this.totalPeople =
      Number(this.formSheet.value.FemaleBetween0_4) +
      Number(this.formSheet.value.MaleBetween0_4) +
      Number(this.formSheet.value.FemaleBetween5_17) +
      Number(this.formSheet.value.MaleBetween5_17) +
      Number(this.formSheet.value.FemaleBetween18_64) +
      Number(this.formSheet.value.MaleBetween18_64) +
      Number(this.formSheet.value.FemaleOver65) +
      Number(this.formSheet.value.MaleOver65);
  }

  onSubmit() {
    if (!this.formSheet.invalid && this.totalPeople > 0) {
      this.disableButtonSubmit = true;
      const body = {
        ...this.formSheet.value,
        EditBy: JSON.parse(localStorage.getItem('nameFull')!),
        RegistrationDate: this.sheetConection
          .getCurrentDateTime()
          .toLocaleString(),
      };
      this.sheetConection
        .updateBeneficiary(this.beneficiary.DocumentNumber, body)
        .subscribe({
          next: () => {
            this.alertType = 'success';
            this.alertText = MSM_ALERTS.beneficiaryUpdate;
            setTimeout(() => {
              this.router.navigate(['/']);
            }, TIME_ALERTS.alertSuccess);
          },
          error: () => {
            this.disableButtonSubmit = false;
            this.alertType = 'danger';
            this.alertText = 'An error occurred';
            setTimeout(() => {
              this.alertType = 'none';
              this.alertText = '';
            }, TIME_ALERTS.errorAlert);
          },
        });
    } else if (this.totalPeople === 0) {
      this.alertText = MSM_ALERTS.numeroIqualtoZero;
      this.alertType = 'warning';
      setTimeout(() => {
        this.alertText = '';
        this.alertType = 'none';
      }, TIME_ALERTS.alertWarning);
    } else {
      this.alertType = 'warning';
      this.alertText = MSM_ALERTS.pleaseAllFields;
      setTimeout(() => {
        this.alertType = 'none';
        this.alertText = '';
      }, TIME_ALERTS.alertWarning);
    }
  }
}
