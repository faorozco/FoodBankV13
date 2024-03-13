import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MSM_ALERTS } from 'src/app/constants/msm-alert.const';
import { TIME_ALERTS } from 'src/app/constants/timeAlerts.const';
import { SheetConectionService } from 'src/app/services/sheets/sheet-conection.service';

@Component({
  selector: 'app-register-new-beneficiary',
  templateUrl: './register-new-beneficiary.component.html',
  styleUrls: ['./register-new-beneficiary.component.css'],
})
export class RegisterNewBeneficiaryComponent implements OnInit {
  partForm: number = 1;
  formSheet!: FormGroup;
  alertText = '';
  alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';
  title: string = 'New beneficiary';
  totalPeople!: number;
  disableButtonSubmit!: boolean;

  constructor(
    private sheetConection: SheetConectionService,
    private router: Router
  ) {
    this.formSheet = new FormGroup({
      RegistrationDate: new FormControl('pendiente', Validators.required),
      EditBy: new FormControl(
        JSON.parse(localStorage.getItem('nameFull')!),
        Validators.required
      ),
      DocumentType: new FormControl('', Validators.required),
      DocumentNumber: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      BirthDate: new FormControl('', Validators.required),
      Sex: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', Validators.required),
      Nationality: new FormControl('0', Validators.required),
      FemaleBetween0_4: new FormControl('0', Validators.required),
      MaleBetween0_4: new FormControl('0', Validators.required),
      FemaleBetween5_17: new FormControl('0', Validators.required),
      MaleBetween5_17: new FormControl('0', Validators.required),
      FemaleBetween18_64: new FormControl('0', Validators.required),
      MaleBetween18_64: new FormControl('0', Validators.required),
      FemaleOver65: new FormControl('0', Validators.required),
      MaleOver65: new FormControl('0', Validators.required),
      photo: new FormControl('agregar link de carpeta', Validators.required),
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['./']);
    }

    this.formSheet.valueChanges.subscribe((changes) => {
      this.sumTotalPeople();
    });

    console.log(this.sheetConection.getCurrentDateTime());
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

  next(): void {
    this.partForm = 2;
  }

  back(): void {
    this.partForm = 1;
  }

  onSubmit(): void {
    if (!this.formSheet.invalid && this.totalPeople > 0) {
      this.disableButtonSubmit = true;
      const body = {
        ...this.formSheet.value,
        RegistrationDate: this.sheetConection
          .getCurrentDateTime()
          .toLocaleString(),
      };
      this.sheetConection.newBeneficiary(body).subscribe({
        next: () => {
          this.alertText = MSM_ALERTS.createBeneficiarySuccess;
          this.alertType = 'success';
          setTimeout(() => {
            this.alertText = '';
            this.alertType = 'none';
            this.router.navigate(['/']);
          }, TIME_ALERTS.alertSuccess);
        },
        error: () => {
          this.alertText = MSM_ALERTS.tryAgainLater;
          this.alertType = 'danger';
          setTimeout(() => {
            this.alertText = '';
            this.alertType = 'none';
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
      this.alertText = MSM_ALERTS.pleaseAllFields;
      this.alertType = 'warning';
      setTimeout(() => {
        this.alertText = '';
        this.alertType = 'none';
      }, TIME_ALERTS.alertWarning);
    }
  }
}
