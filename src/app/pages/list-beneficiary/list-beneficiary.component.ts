import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MSM_ALERTS } from 'src/app/constants/msm-alert.const';
import { TIME_ALERTS } from 'src/app/constants/timeAlerts.const';
import { BeneficiaryModel } from 'src/app/models/beneficiary.model';
import { UserModel } from 'src/app/models/user.model';
import { SheetConectionService } from 'src/app/services/sheets/sheet-conection.service';

@Component({
  selector: 'app-list-beneficiary',
  templateUrl: './list-beneficiary.component.html',
  styleUrls: ['./list-beneficiary.component.css'],
})
export class ListBeneficiaryComponent implements OnInit {
  temporalData: BeneficiaryModel[] = [];
  dataTable: BeneficiaryModel[] = [];
  alertText = '';
  alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';
  check = false;
  modalTitle: string = 'Modal Title';
  bodyText: string = 'Aqui se coloca el texto';
  btnSaveTextModal: 'delete' | 'volunteer_activism' = 'volunteer_activism';
  btnCloseTextModal: string = 'Close';
  beneficiary!: BeneficiaryModel;
  colorBtnSave: 'success' | 'danger' = 'success';
  rol: boolean = false;
  user: UserModel = JSON.parse(localStorage.getItem('user')!);

  constructor(
    private sheetConection: SheetConectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['./']);
    }
    if (this.user.rol === 'DEV' || this.user.rol === 'ADMIN') {
      this.rol = true;
    }
    this.getAllBeneficiaries();
  }

  getAllBeneficiaries() {
    this.sheetConection.getAllBeneficiaries().subscribe({
      next: (res) => {
        this.temporalData = res.map((obj: BeneficiaryModel) => {
          return {
            ...obj,
            lastEdition: obj.RegistrationDate.split(' ')[0],
            index: res.indexOf(obj),
            nameUpperCase: obj.Name.toUpperCase(),
            LastUpperCase: obj.LastName.toUpperCase(),
            totalPeople:
              Number(obj.FemaleBetween0_4) +
              Number(obj.MaleBetween0_4) +
              Number(obj.FemaleBetween5_17) +
              Number(obj.MaleBetween5_17) +
              Number(obj.FemaleBetween18_64) +
              Number(obj.MaleBetween18_64) +
              Number(obj.FemaleOver65) +
              Number(obj.MaleOver65),
            check: false,
          };
        });
        this.dataTable = this.temporalData;
      },
      error: () => {
        alert('try again later, check your internet connection');
      },
    });
  }

  inputText(text: any) {
    this.dataTable = this.filterArray(this.temporalData, text);
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

  updateBeneficiary(beneficiary: any) {
    this.router.navigate(['/update-beneficiary'], { state: { beneficiary } });
  }

  deleteBeneficiaryModal(data: BeneficiaryModel) {
    this.beneficiary = data;
    this.modalTitle = 'Delete Beneficiary';
    this.bodyText = `Are you sure you want to delete ${data.Name} ${data.LastName}?`;
    this.btnSaveTextModal = 'delete';
    this.btnCloseTextModal = 'Cancel';
    this.colorBtnSave = 'danger';
  }

  deliveryBeneficiaryModal(data: any) {
    this.colorBtnSave = 'success';
    this.beneficiary = data;
    this.modalTitle = 'Delivery Beneficiary';
    this.bodyText = `Are you sure you want to deliver ${data.Name} ${data.LastName}?`;
    this.btnSaveTextModal = 'volunteer_activism';
    this.btnCloseTextModal = 'Cancel';
  }

  saveChangesModal(): void {
    if (this.btnSaveTextModal === 'volunteer_activism') {
      this.delivery(this.beneficiary);
    } else if (this.btnSaveTextModal === 'delete') {
      this.deleteBeneficiary();
    }
  }

  deleteBeneficiary() {
    this.sheetConection
      .deleteBeneficiary(this.beneficiary.DocumentNumber)
      .subscribe({
        next: () => {
          this.getAllBeneficiaries();
          this.alertText = MSM_ALERTS.removedBeneficiary;
          this.alertType = 'success';
          setTimeout(() => {
            this.alertText = '';
            this.alertType = 'none';
          }, TIME_ALERTS.alertDanger);
        },
        error: () => {
          this.alertText = MSM_ALERTS.tryAgainLater;
          this.alertType = 'danger';
          setTimeout(() => {
            this.alertText = '';
            this.alertType = 'none';
          }, TIME_ALERTS.alertDanger);
        },
      });
  }

  delivery(donate: BeneficiaryModel) {
    donate.DeliveryDate = this.dateNow();
    donate.DeliverBy = JSON.parse(localStorage.getItem('nameFull')!);
    donate.idDelivery = this.generarStringAleatorio();
    this.sheetConection.delivery(donate).subscribe({
      next: () => {
        donate.check = true;
        this.alertText = MSM_ALERTS.deliverySuccess;
        this.alertType = 'success';
        setTimeout(() => {
          this.alertText = '';
          this.alertType = 'none';
        }, TIME_ALERTS.alertSuccess);
      },
      error: () => {
        this.alertText = MSM_ALERTS.tryAgainLater;
        this.alertType = 'danger';
        setTimeout(() => {
          this.alertText = '';
          this.alertType = 'none';
        }, TIME_ALERTS.alertDanger);
      },
    });
  }

  dateNow() {
    return this.sheetConection.getCurrentDateTime();
  }


  generarStringAleatorio() {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let stringAleatorio = "";
  
    for (let i = 0; i < 30; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      stringAleatorio += caracteres[indiceAleatorio];
    }
  
    return stringAleatorio;
  }
}
