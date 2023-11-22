import { Component,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-thirds-modal',
  templateUrl: './thirds-modal.component.html',
  styleUrls: ['./thirds-modal.component.css']
})
export class ThirdsModalComponent {
  @Input() modalClass: string = '';

  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
