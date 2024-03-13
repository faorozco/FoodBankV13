import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BeneficiaryModel } from '../../models/beneficiary.model';
@Injectable({
  providedIn: 'root',
})
export class SheetConectionService {
  listBeneficiariesDEV =
    'https://sheet.best/api/sheets/ac3a04ca-e138-4aa0-823c-81e75cdfa7b4';
  EntregadosDevApi =
    'https://sheet.best/api/sheets/1db8faf2-69c4-483c-8db9-bc52d66cd130';
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

    // Extraer componentes de la fecha
    const dia = currentDate.getDate().toString().padStart(2, '0');
    const mes = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Enero = 0
    const año = currentDate.getFullYear().toString();

    // Extraer componentes de la hora
    const hora = currentDate.getHours().toString().padStart(2, '0');
    const minuto = currentDate.getMinutes().toString().padStart(2, '0');
    const segundo = currentDate.getSeconds().toString().padStart(2, '0');

    // Concatenar componentes con el formato deseado
    const dateTimeString = `${dia}/${mes}/${año}, ${hora}:${minuto}:${segundo}`;

    return dateTimeString;
  }

  updateBeneficiary(id: string, body: BeneficiaryModel) {
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
    return this.http.delete(`${url}/idDelivery/${id}`);
  }
}
