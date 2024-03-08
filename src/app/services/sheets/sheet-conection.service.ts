import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BeneficiaryModel } from '../../models/beneficiary.model';
@Injectable({
  providedIn: 'root',
})
export class SheetConectionService {
  url = 'https://sheet.best/api/sheets/6e67b075-8024-4ffa-8668-6d9b7a3459a3';
  urlEntregados = 'https://sheet.best/api/sheets/a0cb4b83-bcaa-4094-81f1-45a53cebf949';

  constructor(public http: HttpClient) {}

  newBeneficiary(body: BeneficiaryModel) {
    return this.http.post<BeneficiaryModel>(this.url, body);
  }


  getAllBeneficiaries() {
    return this.http.get<any>(this.url);
  }

  deleteBeneficiary(id: string) {
    return this.http.delete(`${this.url}/DocumentNumber/${id}`);
  }

  getCurrentDateTime(): string {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    return dateTimeString;
  }

  updateBeneficiary(id: number, body: BeneficiaryModel){
    return this.http.put(`${this.url}/${id}`, body);
  }

  delivery(body: BeneficiaryModel) {
    return this.http.post<BeneficiaryModel>(this.urlEntregados, body);
  }


  getAllDeliveries() {
    return this.http.get<any>(this.urlEntregados);
  }

  deleteDelivery(id: number) {
    return this.http.delete(`${this.urlEntregados}/${id}`);
  }

}
