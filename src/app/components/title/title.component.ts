import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
@Input() title: string = 'Aqui va el titutlo'
  constructor() { }

  ngOnInit(): void {
  }

}
