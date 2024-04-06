import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha } from 'src/app/classes/Fecha';

@Component({
  selector: 'app-delivery-date-component',
  templateUrl: './delivery-date-component.component.html',
  styleUrls: ['./delivery-date-component.component.css']
})
export class DeliveryDateComponentComponent {
  formularioFecha: FormGroup;
  fecha?: Fecha;

  constructor(private formBuilder: FormBuilder) {
    this.formularioFecha = this.formBuilder.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log("ngOnInit de DeliveryDateComponent");
  }
  
  ngOnDestroy() {
    console.log("limpiando DeliveryComponent");
  }

  onSubmit() {
    this.fecha = new Fecha(
      this.formularioFecha.value.fecha,
      this.formularioFecha.value.hora
    );
    console.log(this.fecha);
  }

}
