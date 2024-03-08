import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() partForm: number = 1;
  @Input() total: number = 0;

  @Input() typeBirthDate: 'text' | 'date' = 'date';
  @Input() formGroup!: FormGroup;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
    this.partForm = 2;
  }

  back(): void {
    this.partForm = 1;
  }

  Submit(){
    this.onSubmit.emit();


  }

}
