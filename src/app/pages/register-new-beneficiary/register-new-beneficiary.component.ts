import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SheetConectionService } from 'src/app/services/sheet-conection.service';

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
  activeSubmit = true;

  constructor(
    private sheetConection: SheetConectionService,
    private router: Router
  ) {
    this.formSheet = new FormGroup({
      RegistrationDate: new FormControl('pendiente', Validators.required),
      DocumentType: new FormControl('', Validators.required),
      DocumentNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      Name: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      BirthDate: new FormControl('', Validators.required),
      Sex: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
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
  }

  ngOnInit(): void {}

  next(): void {
    this.partForm = 2;
  }

  back(): void {
    this.partForm = 1;
  }

  onSubmit(): void {
    if (this.formSheet.valid) {
      this.sheetConection.newBeneficiary(this.formSheet.value).subscribe({
        next: (res) => {
          this.alertText = 'the beneficiary has been created correctly';
          this.alertType = 'success';
          this.activeSubmit = false;
          setTimeout(() => {
            this.alertText = '';
            this.alertType = 'none';
            this.router.navigate(['/']);
          }, 3000);
        },
        error: (err) => {
          this.alertText = 'Try again later';
          this.alertType = 'danger';
          setTimeout(() => {
            this.alertText = '';
            this.alertType = 'none';
          }, 5000);
        },
      });
    } else {
      alert('Formulario invalido, por favor llene todos los campos.');
    }
  }
}
