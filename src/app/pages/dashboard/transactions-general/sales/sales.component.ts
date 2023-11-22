import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SalesModalComponent } from 'src/app/shared/modals/transactions/sales-modal/sales-modal.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {

  vender = { 
    Correo: '',
    IdBodega_Origen: '',
    Producto: '',
    Subtotal: '',
    Iva: '',
    Total: ''
  };

  ventas: any[] = [];

  agregarVenta() { 
    this.ventas.push({...this.vender});
    this.vender = { Correo: '', IdBodega_Origen: '', Producto: '', Subtotal: '', Iva: '', Total: '' };
  }

  errorMessage: string  | null = null;

  constructor(
    private modalService: NgbModal
  ) { }

  private activeModal: any;

  openModal() {
    this.activeModal = this.modalService.open(SalesModalComponent, { size: '800px' });
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
