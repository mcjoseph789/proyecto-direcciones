import { Direccion } from "./Direccion";
import { Fecha } from "./Fecha";

export class Pedido {
    constructor(
        public direccion: Direccion,
        public fecha: Fecha) { }
}