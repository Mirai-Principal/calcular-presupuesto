import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [CommonModule],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css',
})
export class Cabecera {
  @Input() ingresoTotal!: number;
  @Input() egresoTotal!: number;
  @Input() presupuestoTotal!: number;
  @Input() porcentajeEgresoTotal!: number;


}
