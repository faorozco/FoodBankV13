import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  dataDelivery: any = undefined;
  allDates = new Array();
  selectedDates = new Array();
  toppings = new FormControl();
  filteredDates = new Array();
  totalRecords: number = 0
  totalFemale65: number = 0



  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dataDelivery = history.state.data;

    if (this.dataDelivery === undefined) {
      this.router.navigate(['./deliveries']);
    } else {
      this.allDates = this.dataDelivery
        .map((delivery: any) => delivery.DeliveryDate)
        .filter(
          (date: any, index: number, self: any[]) =>
            self.indexOf(date) === index
        )
        .reverse();
    }
  }

  addDate() {
    this.selectedDates = new Array<Date>();
    this.selectedDates.push(this.toppings.value);
    this.filteredDates = this.filterResults(this.dataDelivery, this.selectedDates);
    this.totalFemale65 = this.generatorFemale65(this.filteredDates)
    console.log('dataDelivery::::> ', this.dataDelivery);
    console.log('filteredDates::::> ', this.filteredDates);
    console.log('selecccionados::: >', this.selectedDates);
  }

  filterResults(beneficiaries: any[], selectedDates: Date[]) {
    return beneficiaries.filter((beneficiary) => {
      return selectedDates.some(d => d.toString() === beneficiary.DeliveryDate.toString())
    })
  }

  generatorFemale65(data: any): number {

    return data = 20
    
  }
}
