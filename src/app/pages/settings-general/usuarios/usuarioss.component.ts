import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewusercreateComponent } from 'src/app/shared/modals/newusercreate/newusercreate.component';

@Component({
  selector: 'app-usuarioss',
  templateUrl: './usuarioss.component.html',
  styleUrls: ['./usuarioss.component.css']
})
export class UsuariossComponent {
  errorMessage: string  | null = null;

  constructor(
    private modalService: NgbModal
  ) { }

  openModal() {
    const modal  = this.modalService.open(NewusercreateComponent, { size: 'width:1250px;' });
    modal.componentInstance.modalClass = "create-user";
    this.errorMessage = null;
  }
}
