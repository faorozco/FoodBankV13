import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SheetConectionService } from 'src/app/services/sheet-conection.service';


@Component({
  selector: 'app-update-beneficiary',
  templateUrl: './update-beneficiary.component.html',
  styleUrls: ['./update-beneficiary.component.css'],
})
export class UpdateBeneficiaryComponent implements OnInit {
  title = 'Update Beneficiary';
  formSheet!: FormGroup;
  formTemp!: FormGroup;
  alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';
  alertText = '';
  partForm: number = 1;
  activeSubmit = true;

  constructor(
    private sheetConection: SheetConectionService,
    private router: Router
  ) {
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
  }

  ngOnInit(): void {}


  onSubmit(){
    console.log(this.formSheet.value);
  }
}
