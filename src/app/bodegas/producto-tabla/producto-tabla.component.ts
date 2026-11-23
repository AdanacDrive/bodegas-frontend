import { Component, OnInit, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Bodega } from '../../models/bodega.model';
import { BodegaService } from '../../services/bodega.service';

@Component({
  selector: 'app-producto-tabla',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './producto-tabla.component.html',
  styleUrl: './producto-tabla.component.css'
})
export class ProductoTablaComponent implements OnInit {
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
