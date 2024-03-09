import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BeneficiaryModel } from '../../models/beneficiary.model';
@Injectable({
  providedIn: 'root',
})
export class SheetConectionService {
  listBeneficiariesDEV =
    'https://sheet.best/api/sheets/6e67b075-8024-4ffa-8668-6d9b7a3459a3';
  EntregadosDevApi =
    'https://sheet.best/api/sheets/a0cb4b83-bcaa-4094-81f1-45a53cebf949';
  listBeneficiariesAPIFIMLM =
    'https://sheet.best/api/sheets/add0cfce-5d03-4ad9-9053-974d6f8a8f80';
  listDeliveriesAPIFIMLM =
    'https://sheet.best/api/sheets/81b81f8c-e36a-4c28-8d4c-4da48483aa4f';

  constructor(public http: HttpClient) {}

  newBeneficiary(body: BeneficiaryModel) {
    let url = this.listBeneficiariesAPIFIMLM;
    const rol = JSON.parse(localStorage.getItem('rol')!);
    if (rol === 'DEV') {
      url = this.listBeneficiariesDEV;
    }
    return this.http.post<BeneficiaryModel>(url, body);
  }

  getAllBeneficiaries() {
    let url = this.listBeneficiariesAPIFIMLM;
    const rol = JSON.parse(localStorage.getItem('rol')!);
    if (rol === 'DEV') {
      url = this.listBeneficiariesDEV;
    }
    return this.http.get<any>(url);
  }

  deleteBeneficiary(id: string) {
    let url = this.listBeneficiariesAPIFIMLM;
    const rol = JSON.parse(localStorage.getItem('rol')!);
    if (rol === 'DEV') {
      url = this.listBeneficiariesDEV;
    }
    return this.http.delete(`${url}/DocumentNumber/${id}`);
  }

  getCurrentDateTime(): string {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    return dateTimeString;
  }

  updateBeneficiary(id: number, body: BeneficiaryModel) {
    let url = this.listBeneficiariesAPIFIMLM;
    const rol = JSON.parse(localStorage.getItem('rol')!);
    if (rol === 'DEV') {
      url = this.listBeneficiariesDEV;
    }
    return this.http.put(`${url}/DocumentNumber/${id}`, body);
  }

  delivery(body: BeneficiaryModel) {
    let url = this.listDeliveriesAPIFIMLM;
    const rol = JSON.parse(localStorage.getItem('rol')!);
    if (rol === 'DEV') {
      url = this.EntregadosDevApi;
    }
    return this.http.post<BeneficiaryModel>(url, body);
  }

  getAllDeliveries() {
    let url = this.listDeliveriesAPIFIMLM;
    const rol = JSON.parse(localStorage.getItem('rol')!);
    if (rol === 'DEV') {
      url = this.EntregadosDevApi;
    }
    return this.http.get<any>(url);
  }

  deleteDelivery(id: number) {
    let url = this.listDeliveriesAPIFIMLM;
    const rol = JSON.parse(localStorage.getItem('rol')!);
    if (rol === 'DEV') {
      url = this.EntregadosDevApi;
    }
    return this.http.delete(`${url}/${id}`);
  }
}
