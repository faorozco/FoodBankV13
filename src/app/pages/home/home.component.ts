import { Component, OnInit } from '@angular/core';
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

  constructor(private sheetConection: SheetConectionService) {}

  ngOnInit(): void {
    this.getAllBeneficiaries();
  }

  getAllBeneficiaries() {
    this.sheetConection.getAllBeneficiaries().subscribe({
      next: (res) => {
        const data = res;
        this.generateIndex(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  generateIndex(data: any) {
    this.dataTable = data.map((obj: any) => {
      return {
        ...obj,
        index: data.indexOf(obj),
      }
    });
  }
}
