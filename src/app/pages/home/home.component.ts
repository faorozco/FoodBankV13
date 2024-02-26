import { Component, OnInit } from '@angular/core';
import { HOME_BUTTONS } from 'src/app/constants/home-buttons..const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards = HOME_BUTTONS
  
  constructor() {}

  ngOnInit(): void {}
}
