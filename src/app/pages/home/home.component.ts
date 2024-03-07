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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  modalSegurity() {}

  saveChangesModal(password: string) {
    if (password === '1234') {
      this.router.navigate(['./administration']);
    } else {
      this.passwordIncorrect = true;
      setTimeout(() => {this.passwordIncorrect = false}, 3000);  
    }
  }
}
