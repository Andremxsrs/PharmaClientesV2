import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewusercreateComponent } from 'src/app/shared/modals/newusercreate/newusercreate.component';


@Component({
  selector: 'app-thirds',
  templateUrl: './thirds.component.html',
  styleUrls: ['./thirds.component.css']
})

export class ThirdsComponent {
  errorMessage: string  | null = null;

  constructor(
    private modalService: NgbModal
  ) { }

  openModal() {
    const modal  = this.modalService.open(NewusercreateComponent, { size: '800px' });
    modal.componentInstance.modalClass = "create-user";
    this.errorMessage = null;
  }
}
