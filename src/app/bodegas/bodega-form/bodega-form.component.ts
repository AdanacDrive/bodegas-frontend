import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NuevaBodega } from '../../models/bodega.model';
import { BodegaService } from '../../services/bodega.service';

@Component({
  selector: 'app-bodega-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bodega-form.component.html',
  styleUrl: './bodega-form.component.css'
})
export class BodegaFormComponent {
  private fb = inject(FormBuilder);
  private service = inject(BodegaService);

  @Output() registrada = new EventEmitter<void>();

  mensaje = signal('');
  error = signal('');

  form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required]
  });

  guardar(): void {
    this.mensaje.set('');
    this.error.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const bodega: NuevaBodega = this.form.getRawValue();
    this.service.registrar(bodega).subscribe({
      next: creada => {
        this.mensaje.set('Se registró ' + creada.nombre);
        this.form.reset();
        this.registrada.emit();
      },
      error: () => this.error.set('No se pudo registrar la bodega')
    });
  }
}
