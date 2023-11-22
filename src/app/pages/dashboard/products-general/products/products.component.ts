import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModalComponent } from 'src/app/shared/modals/products/products-modal/products-modal.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  current = 0;
  inputStep1: string = '';
  inputStep2: string = '';
  inputStep3: string = '';

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  done(): void {
    console.log('done');
  }

  errorMessage: string  | null = null;
  
  constructor(
    private modalService: NgbModal
  ) { } 

  private activeModal: any;

  openModal() {
    this.activeModal = this.modalService.open(ProductsModalComponent, { size: '800px' });
    this.activeModal.componentInstance.modalClass = "edit-sales";
    this.errorMessage = null;
  }

  closeModal() {
    if (this.activeModal) {
      this.activeModal.close();
      this.activeModal = null;
    }
  }
}
