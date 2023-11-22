import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {

  transferir = {
    producto: '',
    bodega: '',
    BodegaD: '',
    CantidadT: ''
  }

  transferencias: any[] = [];

  agregarTransferencia() {
    this.transferencias.push({ ...this.transferir });
    this.transferir = { producto: '', bodega: '', BodegaD: '', CantidadT: '' };
  }
}

/* Ejemplos de Variables

{{ transferir.producto }}
{{ transferir.bodega }}
{{ transferir.BodegaD }}
{{ transferir.CantidadT }}

*/