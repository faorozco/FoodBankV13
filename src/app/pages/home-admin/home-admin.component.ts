import { Component, OnInit } from '@angular/core';
import { HOME_BUTTONS_ADMIN } from 'src/app/constants/home-buttons-admin.const';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  cards = HOME_BUTTONS_ADMIN

  constructor() { }

  ngOnInit(): void {
  }

}
