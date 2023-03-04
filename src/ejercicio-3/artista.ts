import { Discografia } from "./discografia";
import { Disco } from "./disco";
import { Single } from "./single";
/**
 * Clase Artista
 */
export class Artista {
  constructor(
    protected nombre: string,
    private oyentes: number,
    private discografia: Discografia<Disco | Single | (Disco & Single)>
  ) {}
  /**
   * Getter nombre
   * @returns Nombre del artista
   */
  getNombre() {
    return this.nombre;
  }
}
