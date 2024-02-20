import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BeneficiaryModel } from '../models/beneficiary.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SheetConectionService {
  url = environment.sheetUrl;
  urlEntregados = environment.sheetUrlEntregados;

  constructor(public http: HttpClient) {}

  newBeneficiary(body: BeneficiaryModel) {
    return this.http.post<BeneficiaryModel>(this.url, body);
  }
  delivery(body: BeneficiaryModel) {
    return this.http.post<BeneficiaryModel>(this.urlEntregados, body);
  }

  getAllBeneficiaries() {
    return this.http.get<any>(this.url);
  }

  deleteBeneficiary(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentDateTime(): string {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    return dateTimeString;
  }

  updateBeneficiary(id: number, body: BeneficiaryModel){
    return this.http.put(`${this.url}/${id}`, body);
  }
}
