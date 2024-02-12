import { Component, OnInit } from '@angular/core';
import { SheetConectionService } from 'src/app/services/sheet-conection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataTable: any = [name, 'Pepito', document, 1088008016];

  



  constructor(private sheetConection: SheetConectionService) {}

  ngOnInit(): void {
    this.getAllBeneficiaries();
  }

  getAllBeneficiaries() {
    this.sheetConection.getAllBeneficiaries().subscribe({
      next: (res) => {
        this.dataTable = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
