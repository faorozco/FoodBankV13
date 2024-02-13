import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BeneficiaryModel } from '../models/beneficiary.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SheetConectionService {
  url = environment.sheetUrl;

  constructor(public http: HttpClient) {}

  newBeneficiary(body: BeneficiaryModel) {
    return this.http.post<BeneficiaryModel>(this.url, body);
  }

  getAllBeneficiaries() {
    return this.http.get<any>(this.url);
  }
}
