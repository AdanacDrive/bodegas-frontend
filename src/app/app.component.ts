import { Component } from '@angular/core';
import { BodegaFormComponent } from './bodegas/bodega-form/bodega-form.component';
import { ProductoTablaComponent } from './bodegas/producto-tabla/producto-tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BodegaFormComponent, ProductoTablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
