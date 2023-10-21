import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newusercreate',
  templateUrl: './newusercreate.component.html',
  styleUrls: ['./newusercreate.component.css']
})
export class NewusercreateComponent {
  @Input() modalClass: string = '';

  constructor(
    public activeModal: NgbActiveModal
  ) { }


}
