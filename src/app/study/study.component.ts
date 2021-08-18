import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent {

  isOpenedModal: boolean = false
  isOpenEditWindow: boolean = false;

  showModalWindow() { 
    console.log("Сработал метод открытия!");
    this.isOpenedModal = !this.isOpenedModal;
  }
  closeModalWindow() {
    console.log("Сработал метод закрытия!");
    this.isOpenEditWindow = false;
  }

  openModal() {
    console.log("Сработал метод у ребенка")
    this.isOpenEditWindow = true;
  }

  @Input() data = "";
  @Input() name: any;
  @Input() members: any;
  @Input() progress: any;
}
