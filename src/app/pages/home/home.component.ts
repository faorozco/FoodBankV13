import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HOME_BUTTONS } from 'src/app/constants/home-buttons..const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards = HOME_BUTTONS;
  passwordIncorrect: boolean = false;
  title: string = ''

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['./']);
    }
    this.title = `¡Hi, 👋 ${localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")!) : ""}!`
  }

  getName () {
    return ;
  }
}
