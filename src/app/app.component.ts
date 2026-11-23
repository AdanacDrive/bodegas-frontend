import { Component, OnInit, inject, signal } from '@angular/core';
import { Bodega } from './models/bodega.model';
import { BodegaService } from './services/bodega.service';
import { BodegaFormComponent } from './bodegas/bodega-form/bodega-form.component';
import { ProductoTablaComponent } from './bodegas/producto-tabla/producto-tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BodegaFormComponent, ProductoTablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private service = inject(BodegaService);

  bodegas = signal<Bodega[]>([]);
  error = signal('');

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.service.listar().subscribe({
      next: data => {
        this.bodegas.set(data);
        this.error.set('');
      },
      error: () => this.error.set('No se pudieron cargar los productos')
    });
  }
}
