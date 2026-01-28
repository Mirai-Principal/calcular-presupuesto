import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from "./cabecera/cabecera";
import { Formulario } from "./formulario/formulario";
import { Ingreso } from "./ingreso/ingreso";
import { Egreso } from "./egreso/egreso";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera, Formulario, Ingreso, Egreso],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-presupuesto');
}
