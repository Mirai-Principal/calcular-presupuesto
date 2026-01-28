import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingreso as ingresoModel } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  imports: [CommonModule],
  templateUrl: './ingreso.html',
  styleUrl: './ingreso.css',
})
export class Ingreso {
  protected readonly ingresos!: Signal<ingresoModel[]>;

  constructor(private ingresoService: IngresoService) {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso: ingresoModel) {
    this.ingresoService.eliminar(ingreso);
  }

}
