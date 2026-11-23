import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Bodega } from '../../models/bodega.model';

@Component({
  selector: 'app-producto-tabla',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './producto-tabla.component.html',
  styleUrl: './producto-tabla.component.css'
})
export class ProductoTablaComponent {
  @Input({ required: true }) bodegas!: Bodega[];
}
