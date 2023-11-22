import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sales-modal',
  templateUrl: './sales-modal.component.html',
  styleUrls: ['./sales-modal.component.css']
})
export class SalesModalComponent {
  @Input() modalClass: string = '';

  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
