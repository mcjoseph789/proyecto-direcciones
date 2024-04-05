import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Direccion } from 'src/app/classes/Direccion';

@Component({
  selector: 'app-delivery-component',
  templateUrl: './delivery-component.component.html',
  styleUrls: ['./delivery-component.component.css']
})
export class DeliveryComponentComponent {
  formularioDireccion: FormGroup;
  direccion?: Direccion;
  calles = ["Calle", "Carrera", "Avenida", "Transversal", "Circular", "Diagonal"]

  constructor(private formBuilder: FormBuilder) {
    this.formularioDireccion = this.formBuilder.group({
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      casa: ['', Validators.required],
      detalle: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log("ngOnInit de DeliveryComponent");
  }

  onSubmit() {
    this.direccion = new Direccion(
      this.formularioDireccion.value.calle,
      this.formularioDireccion.value.numero,
      this.formularioDireccion.value.casa,
      this.formularioDireccion.value.detalle
    );
    console.log(this.direccion);
  }

}
