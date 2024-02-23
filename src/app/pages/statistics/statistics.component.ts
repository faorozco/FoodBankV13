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
        ).reverse();  
    }
  }

  addDate(){
    this.selectedDates = []
    this.selectedDates.push(this.toppings.value)
    console.log(this.selectedDates)
    console.log('funciona')
  }

}
