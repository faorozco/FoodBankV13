import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent implements OnInit {
  @Input() titleCardButton = 'Aqui va el titulo'
  @Input() textCardButton = 'Aqui va el texto especificando el card a donde dirige'
  @Input() routerCardButton = './new-beneficiary'
  @Input() pathImag = '../../../assets/imgs/camionjpg.jpg'


  constructor() { }

  ngOnInit(): void {
  }

}
