import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';
  @Input() alertText: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
