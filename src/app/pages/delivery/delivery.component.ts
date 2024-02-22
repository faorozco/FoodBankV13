import { Component, OnInit } from '@angular/core';
import { SheetConectionService } from 'src/app/services/sheet-conection.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(private sheetConectionService: SheetConectionService ) { }

  ngOnInit(): void {
  }


  getAllDelivery() {
    this.sheetConectionService.getAllDeliveries().subscribe((data) => {
      console.log(data);
    });
  }

}
