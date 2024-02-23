import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaryModel } from 'src/app/models/beneficiary.model';
import { SheetConectionService } from 'src/app/services/sheet-conection.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  dataTable: BeneficiaryModel[] = [];
  temporalData: BeneficiaryModel[] = [];
  alertText = '';
  alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';
  bodyText: string = 'Aqui se coloca el texto';
  modalTitle: string = 'Modal Title';
  btnCloseTextModal: string = 'Close';
  colorBtnSave: 'success' | 'danger' = 'success';
  btnSaveTextModal: 'delete' | 'volunteer_activism' = 'volunteer_activism';
  beneficiary!: BeneficiaryModel;

  constructor(
    private sheetConectionService: SheetConectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDelivery();
  }

  inputText(text: any) {
    this.dataTable = this.filterArray(this.temporalData, text);
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
    this.sheetConectionService.getAllDeliveries().subscribe({
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
        this.dataTable = this.temporalData;
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
    if (this.btnSaveTextModal === 'delete') {
      this.deleteDelivery(this.beneficiary);
    }
  }

  deleteDelivery(delivery: any) {
    return this.sheetConectionService.deleteDelivery(delivery.index).subscribe({
      next: (res) => {
        this.alertText = 'The beneficiary was successfully removed';
        this.alertType = 'warning';
        this.bodyText = ` ${this.beneficiary.Name} ${this.beneficiary.LastName} was eliminated`;

        this.getAllDelivery();
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

  generateResult(data: any) {
    this.router.navigate(['./deliveries/statistics'], {state: { data }})
  }
}