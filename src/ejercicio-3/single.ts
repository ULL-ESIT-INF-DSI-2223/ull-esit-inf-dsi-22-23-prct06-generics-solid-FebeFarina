import { Cancion } from "./cancion";
import { DiscoMetodos } from "./discoMetodos";
import { DiscoPropiedades } from "./discoPropiedades";

export class Single implements DiscoMetodos, DiscoPropiedades {
  constructor(
    public nombre: string,
    public publicacion: string,
    private cancion: Cancion
  ) {}
  getDuracion() {
    return this.cancion.getDuracion();
  }
  getReproducciones() {
    return this.cancion.getReproducciones();
  }
}
