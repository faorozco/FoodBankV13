import { Component, OnInit } from '@angular/core';
import { OPTIONS } from 'src/app/constants/option.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'FBR'
  home = 'Home';
  optionOne = OPTIONS.beneficiaryList;
  optionTwo = OPTIONS.newBeneficiary;
  optionThree = OPTIONS.deliveryList;

  constructor() { }

  ngOnInit(): void {
  }

}
