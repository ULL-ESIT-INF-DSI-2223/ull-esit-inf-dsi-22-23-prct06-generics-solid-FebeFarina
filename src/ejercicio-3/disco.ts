import { Cancion } from "./cancion";
import { DiscoMetodos } from "./discoMetodos";
import { DiscoPropiedades } from "./discoPropiedades";
/**
 * Clase Disco
 */
export class Disco implements DiscoMetodos, DiscoPropiedades {
  constructor(
    public nombre: string,
    public publicacion: string,
    private canciones: Cancion[]
  ) {}
  getCanciones() {
    return this.canciones;
  }
  getDuracion() {
    let duracion = 0;
    this.canciones.forEach((cancion) => {
      duracion += cancion.getDuracion();
    });
    return duracion;
  }
  getReproducciones() {
    let reproducciones = 0;
    this.canciones.forEach((cancion) => {
      reproducciones += cancion.getReproducciones();
    });
    return reproducciones;
  }
}
