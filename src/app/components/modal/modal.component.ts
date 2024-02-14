import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() modalTitle: string = 'Modal Title';
@Input() bodyText: string = 'Body Text';
@Input() btnSaveText: string = 'Save changes';
@Input() btnCloseText: string = 'Close';
@Input() hideSave: boolean = false;
@Input() hideCancel: boolean = false;
@Output() SaveChangesEvent: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  saveChanges(){
    this.SaveChangesEvent.emit();
  }


}
