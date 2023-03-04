/**
 * Clase Cancion
 */
export class Cancion {
  constructor(
    private nombre: string,
    private duracion: number,
    private generos: string[],
    private single: boolean,
    private reproducciones: number
  ) {}
  /**
   * Getter de nombre
   * @returns Nombre de la canción
   */
  getNombre() {
    return this.nombre;
  }
  /**
   * Getter de duración
   * @returns Duración de la canción
   */
  getDuracion() {
    return this.duracion;
  }
  /**
   * Getter de reproducciones
   * @returns Reproducciones de la canción
   */
  getReproducciones() {
    return this.reproducciones;
  }
}
