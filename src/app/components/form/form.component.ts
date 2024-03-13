import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() partForm: number = 1;
  @Input() total: number = 0;
  @Input() disableButton: boolean = false;
  @Input() typeBirthDate: 'text' | 'date' = 'date';
  @Input() formGroup!: FormGroup;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  alertText = '';
  alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';

  constructor() {}

  ngOnInit(): void {}

  next(): void {
    if (
      this.formGroup.value.DocumentType == '' ||
      this.formGroup.value.DocumentNumber == '' ||
      this.formGroup.value.Name == '' ||
      this.formGroup.value.LastName == '' ||
      this.formGroup.value.BirthDate == '' ||
      this.formGroup.value.Sex == '' ||
      this.formGroup.value.City == '' ||
      this.formGroup.value.Address == '' ||
      this.formGroup.value.PhoneNumber == ''
    ) {
      this.alertText = 'Please fill all the fields';
      this.alertType = 'warning';
      setTimeout(() => {
        this.alertText = '';
        this.alertType = 'none';
      }, 2000);
    } else {
      this.partForm = 2;
    }
  }

  back(): void {
    this.partForm = 1;
  }

  Submit() {
    this.onSubmit.emit();
  }
}
