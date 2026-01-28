import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IngresoService } from '../ingreso/ingreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { EgresoService } from '../egreso/egreso.service';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {


  protected readonly operacion = signal('ingresoOperacion');
  //elementos del formulario
  protected readonly descripcion = signal<string>('');
  protected readonly monto = signal<number | null>(null);

  constructor(private ingresosService: IngresoService, private egresosService: EgresoService) { }

  tipoOperacion(evento: Event) {
    this.operacion.set((evento.target as HTMLSelectElement).value);
  }

  agregarIngreso(form: NgForm) {
    if (form.invalid || this.descripcion().trim() === '' || this.monto() === null || this.monto()! <= 0) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    if (this.operacion() === 'ingresoOperacion') {
      const ingreso: Ingreso = {
        descripcion: this.descripcion().trim(),
        monto: this.monto()!,
      };
      this.ingresosService.agregar(ingreso);
    } else {
      const egreso: Egreso = {
        descripcion: this.descripcion().trim(),
        monto: this.monto()!,
      };
      this.egresosService.agregar(egreso);
    }

    form.resetForm();
  }
}

