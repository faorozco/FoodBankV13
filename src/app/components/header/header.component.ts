import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  enableHeader: any = localStorage.getItem('user')?.length
  user: string = JSON.parse(localStorage.getItem('username')!)

  constructor(public router: Router) { }

  ngOnInit(): void {
    
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['./']);
    this.enableHeader = false;
  }

}
