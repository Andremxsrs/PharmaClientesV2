import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseModalComponent } from 'src/app/shared/modals/transactions/purchase-modal/purchase-modal.component';
 



@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  errorMessage: string  | null = null;

  constructor(
    private modalService: NgbModal
  ) { }

  private activeModal: any;

  openModal() {
    this.activeModal = this.modalService.open(PurchaseModalComponent, { size: '800px' });
    this.activeModal.componentInstance.modalClass = "edit-product";
    this.errorMessage = null;
  }

  closeModal() {
    if (this.activeModal) {
      this.activeModal.close();
      this.activeModal = null;
    }
  }
}
