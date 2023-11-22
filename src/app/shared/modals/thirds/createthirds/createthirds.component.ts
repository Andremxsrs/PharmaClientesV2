import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-createthirds',
  templateUrl: './createthirds.component.html',
  styleUrls: ['./createthirds.component.css']
})
export class CreatethirdsComponent {
  @Input() modalClass: string = '';

  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
