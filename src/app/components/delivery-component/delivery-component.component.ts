import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Direccion } from 'src/app/classes/Direccion';
import { CitiesServiceService } from 'src/app/services/cities-service.service';

@Component({
  selector: 'app-delivery-component',
  templateUrl: './delivery-component.component.html',
  styleUrls: ['./delivery-component.component.css']
})
export class DeliveryComponentComponent {
  formularioDireccion: FormGroup;
  direccion?: Direccion;
  calles = ["Calle", "Carrera", "Avenida", "Transversal", "Circular", "Diagonal"]

  constructor(private formBuilder: FormBuilder, private dataService: CitiesServiceService) {
    this.formularioDireccion = this.formBuilder.group({
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      casa: ['', Validators.required],
      detalle: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      console.log(data); // Manejar los datos recibidos
    });
    console.log("ngOnInit de DeliveryComponent");
  }

  ngOnDestroy() {
    console.log("limpiando DeliveryComponent");
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
