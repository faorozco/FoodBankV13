import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MSM_ALERTS } from 'src/app/constants/msm-alert.const';
import { TIME_ALERTS } from 'src/app/constants/timeAlerts.const';
import { BeneficiaryModel } from 'src/app/models/beneficiary.model';
import { UserModel } from 'src/app/models/user.model';
import { SheetConectionService } from 'src/app/services/sheets/sheet-conection.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  dataTable: BeneficiaryModel[][] = [];
  temporalData: BeneficiaryModel[] = [];
  alertText = '';
  alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';
  bodyText: string = 'Aqui se coloca el texto';
  modalTitle: string = 'Modal Title';
  btnCloseTextModal: string = 'Close';
  colorBtnSave: 'success' | 'danger' = 'success';
  btnSaveTextModal: 'delete' | 'volunteer_activism' = 'volunteer_activism';
  beneficiary!: BeneficiaryModel;
  rol: boolean = false;
  user: UserModel = JSON.parse(localStorage.getItem('user')!);
  disableTable: boolean = true
  paginatorLength!: number;
  pageSize: number = 5;
  previousPageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageIndex: number = 0;
  pageEvent!: PageEvent;

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
    this.getAllDelivery();
  }

  getPaginatorData(event: PageEvent) {
    const newPageSize = event.pageSize;
    if (newPageSize !== this.previousPageSize) {
      this.pageSize = newPageSize;
      this.previousPageSize = newPageSize;
      this.updateDataTable();
    }
    this.pageIndex = event.pageIndex;
  }

  updateDataTable() {
    this.dataTable = this.sheetConection.dividirArrayObjetos(
      this.temporalData,
      this.pageSize
    );
  }

  inputText(text: any) {
    const filteredData = this.filterArray(this.temporalData, text);
    this.dataTable = this.sheetConection.dividirArrayObjetos(filteredData, this.pageSize);
    this.paginatorLength = this.dataTable.length;
  }

  filterArray(value: any[], search: string) {
    return value.filter((arr) => {
      return (
        arr.nameUpperCase.includes(search.toUpperCase()) ||
        arr.LastUpperCase.includes(search.toUpperCase()) ||
        arr.DocumentNumber.includes(search.toUpperCase()) ||
        arr.DeliveryDate.includes(search.toUpperCase())
      );
    });
  }

  getAllDelivery() {
   return this.sheetConection.getAllDeliveries().subscribe({
      next: (data) => {
        this.temporalData = data.map((deliveries: any) => {
          return {
            ...deliveries,
            index: data.indexOf(deliveries),
            nameUpperCase: deliveries.Name.toUpperCase(),
            LastUpperCase: deliveries.LastName.toUpperCase(),
            numberList: data.indexOf(deliveries) + 1,
            DeliveryDate: deliveries.DeliveryDate.split(',')[0],
            DeliveryHour: deliveries.DeliveryDate.split(',')[1],
          };
        });
        this.dataTable = this.sheetConection.dividirArrayObjetos(
          this.temporalData.reverse(),
          this.pageSize
        );
        this.paginatorLength = this.dataTable.length;
        this.disableTable = true
      },

      error: () => {
        alert('try again later, check your internet connection');
      },
    });
  }

  deleteDeliveryModal(data: BeneficiaryModel) {
    this.beneficiary = data;
    this.modalTitle = 'Delete Delevery';
    this.bodyText = `Are you sure you want to delete ${data.Name} ${data.LastName}'s delivery from ${data.DeliveryDate}?`;
    this.btnSaveTextModal = 'delete';
    this.btnCloseTextModal = 'Cancel';
    this.colorBtnSave = 'danger';
  }

  saveChangesModal() {
    this.disableTable = false
    if (this.btnSaveTextModal === 'delete') {
      this.deleteDelivery(this.beneficiary);

    }
  }

  deleteDelivery(delivery: any) {
    return this.sheetConection.deleteDelivery(delivery.idDelivery).subscribe({
      next: () => {
        this.alertText = MSM_ALERTS.removedBeneficiary;
        this.alertType = 'success';
        this.bodyText = ` ${this.beneficiary.Name} ${this.beneficiary.LastName} was eliminated`;
        setTimeout(() => {
          this.alertText = '';
          this.alertType = 'none';
        }, TIME_ALERTS.alertSuccess);
        this.getAllDelivery();
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

  generateResult(data: any) {
    this.router.navigate(['./administration/statistics'], { state: { data } });
  }
}
