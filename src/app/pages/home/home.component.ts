import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BeneficiaryModel } from 'src/app/models/beneficiary.model';
import { SheetConectionService } from 'src/app/services/sheet-conection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filterData = '';
  dataTable: BeneficiaryModel[] = [];
  temporalData: BeneficiaryModel[] = [];
  form!: FormGroup;
  new = 'New beneficiary';
  alertText = '';
  alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';
  check = false;
  modalTitle: string = 'Modal Title';
  bodyText: string = 'Aqui se coloca el texto';
  btnSaveTextModal: string = 'Save';
  btnCloseTextModal: string = 'Close';
  beneficiary!: any;

  constructor(private sheetConection: SheetConectionService) {
    this.form = new FormGroup({
      search: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  deliveryBeneficiaryModal(data: any){
    this.beneficiary = data;
    this.modalTitle = 'Delivery Beneficiary';
    this.bodyText = `Are you sure you want to deliver the beneficiary: ${data.Name} ${data.LastName}?`;
    this.btnSaveTextModal = 'Deliver';
    this.btnCloseTextModal = 'Cancel';
  }

  deleteBeneficiaryModal(data: any) {
    this.beneficiary = data;
    this.modalTitle = 'Delete Beneficiary';
    this.bodyText = `Are you sure you want to delete ${data.Name} ${data.LastName}?`;
    this.btnSaveTextModal = 'Delete';
    this.btnCloseTextModal = 'Cancel';
  }

  saveChangesModal(): void {
    if (this.btnSaveTextModal == 'Delete') {
      this.deleteBeneficiary(this.beneficiary);
    }
    else if (this.btnSaveTextModal == 'Deliver') {
      this.delivery(this.beneficiary);
    }
  }

  delivery(donate: BeneficiaryModel) {
    donate.DeliveryDate = this.dateNow();
    this.sheetConection.delivery(donate).subscribe({
      next: (res) => {
        donate.check = true;
        this.alertText = 'The beneficiary was successfully delivered';
        this.alertType = 'success';
        this.bodyText = ` ${this.beneficiary.Name} ${this.beneficiary.LastName} was eliminated`;
        setTimeout(() => {
          this.alertText = '';
          this.alertType = 'none';
        }, 5000);
      },
    });

  }

  dateNow() {
    return this.sheetConection.getCurrentDateTime();
  }

  inputText(text: any) {
    this.dataTable = this.filterArray(this.temporalData, text);
  }

  getAllBeneficiaries() {
    this.sheetConection.getAllBeneficiaries().subscribe({
      next: (res) => {
        this.temporalData = res.map((obj: BeneficiaryModel) => {
          return {
            ...obj,
            index: res.indexOf(obj),
            nameUpperCase: obj.Name.toUpperCase(),
            LastUpperCase: obj.LastName.toUpperCase(),
            check: false,
          };
        });
        this.dataTable = this.temporalData;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filterArray(value: any[], search: string) {
    return value.filter((arr) => {
      return (
        arr.nameUpperCase.includes(search.toUpperCase()) ||
        arr.LastUpperCase.includes(search.toUpperCase()) ||
        arr.DocumentNumber.includes(search.toUpperCase())
      );
    });
  }

  deleteBeneficiary(beneficiary: any) {
    return this.sheetConection.deleteBeneficiary(beneficiary.index).subscribe({
      next: (res) => {
        this.alertText = 'The beneficiary was successfully removed';
        this.alertType = 'warning';
        this.bodyText = ` ${this.beneficiary.Name} ${this.beneficiary.LastName} was eliminated`;

        this.getAllBeneficiaries();
        setTimeout(() => {
          this.alertText = '';
          this.alertType = 'none';
        }, 5000);
      },
      error: (err) => {
        this.alertText = 'Try again later';
        this.bodyText = 'Try again later';
        this.alertType = 'danger';
        setTimeout(() => {
          this.alertText = '';
          this.alertType = 'none';
        }, 5000);
      },
    });
  }
}
