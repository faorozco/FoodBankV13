import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent implements OnInit {
  @Input() textCardButton = 'Create a new beneficiary of the Foundation Maria Luisa de Moreno International'
  @Input() routerCardButton = './new-beneficiary'
  @Input() buttonInCard = 'New beneficiary'
  @Input() pathImag = '../../../assets/imgs/newBeneficiary.jpg'


  constructor() { }

  ngOnInit(): void {
  }

}
