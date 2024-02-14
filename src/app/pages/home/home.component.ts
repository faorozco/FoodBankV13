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
  new = 'New beneficiary'


  constructor(private sheetConection: SheetConectionService) {
    this.form = new FormGroup({
      search: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    }
  



    inputText(text: any){
      this.dataTable = this.filterArray(this.temporalData, text)

  }


 

  getAllBeneficiaries() {
    this.sheetConection.getAllBeneficiaries().subscribe({
      next: (res) => {
        this.temporalData = res.map((obj: BeneficiaryModel) => {
          return {
            ...obj,
            index: res.indexOf(obj),
            nameUpperCase: obj.Name.toUpperCase(),
            LastUpperCase: obj.LastName.toUpperCase(),
          };
        });;
        this.dataTable = this.temporalData
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  filterArray(value: any[], search: string) {
    return value.filter((arr) => {
      return (
        arr.nameUpperCase.includes(search.toUpperCase()) ||
        arr.LastUpperCase.includes(search.toUpperCase()) ||
        arr.DocumentNumber.includes(search.toUpperCase())
      );
    });
  }



  deleteBeneficiary(beneficiary: any) {

    console.log(beneficiary.index)
    return this.sheetConection.deleteBeneficiary(beneficiary.index).subscribe({
      next: (res) => {
        console.log('Elemento eliminado');
        console.log(res);
        this.getAllBeneficiaries();
      }, 
      error: (err) => {
        alert('Intentelo más tarde');
      }
    })
  }
}
