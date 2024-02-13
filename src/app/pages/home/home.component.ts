import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  temporalData: BeneficiaryModel[] = [];
  form!: FormGroup;

  constructor(private sheetConection: SheetConectionService) {
    this.form = new FormGroup({
      search: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
      this.getAllBeneficiaries();
    }
  



  newSearch(){
    if (this.form.value.search === '' ) {
      this.dataTable = this.temporalData;
    }
  }

  searchBtn() {
    this.dataTable = this.filterArray(this.dataTable, this.form.value.search);
  }

 

  getAllBeneficiaries() {
    this.sheetConection.getAllBeneficiaries().subscribe({
      next: (res) => {
        this.temporalData = res;
        this.generateIndex(this.temporalData);
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
      };
    });
    this.temporalData = this.dataTable;
  }

  filterArray(value: any[], search: string) {
    const newValue = value.map((obj) => {
      return {
        ...obj,
        nameUpperCase: obj.Name.toUpperCase(),
        LastUpperCase: obj.LastName.toUpperCase(),
      };
    });

    return newValue.filter((arr) => {
      return (
        arr.nameUpperCase.includes(search.toUpperCase()) ||
        arr.LastUpperCase.includes(search.toUpperCase()) ||
        arr.DocumentNumber.includes(search.toUpperCase())
      );
    });
  }
}
