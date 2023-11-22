import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseModalComponent } from 'src/app/shared/modals/transactions/purchase-modal/purchase-modal.component';import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {

  compra = {
    CodigoF: '',
    Cantidad: '',
    DocumentoP: '',
    DocumentoU: '',
    IdBodega_Destino: '',
    Producto: '',
    Subtotal: ''
  };

  compras: any[] = [];

  agregarCompra() {
    this.compras.push({...this.compra});
    this.compra = { CodigoF: '', Cantidad: '', DocumentoP: '', DocumentoU: '', IdBodega_Destino: '', Producto: '', Subtotal: '' };
  }

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