import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-new-beneficiary',
  templateUrl: './register-new-beneficiary.component.html',
  styleUrls: ['./register-new-beneficiary.component.css']
})
export class RegisterNewBeneficiaryComponent implements OnInit {
  partForm: number = 1; 

  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
    this.partForm = 2;
  }

  back(): void {
    this.partForm = 1;

  }

  submit(): void {

  }

}
