import { Artista } from "./artista";
import { Disco } from "./disco";
import { Single } from "./single";
import { Cancion } from "./cancion";

/**
 * Clase Biblioteca
 */
export class Biblioteca {
  constructor(
    private artistas: Artista[],
    private discos: Disco[],
    private singles: Single[],
    private canciones: Cancion[]
  ) {}
  /**
   * Getter artistas
   * @returns Devuelve los artistas de la biblioteca
   */
  getArtistas() {
    return this.artistas;
  }
  /**
   * Getter discos
   * @returns Devuelve los discos de la biblioteca
   */
  getDiscos() {
    return this.discos;
  }
  /**
   * Getter singles
   * @returns Devuelve los singles de la biblioteca
   */
  getSingle() {
    return this.singles;
  }
  /**
   * Getter canciones
   * @returns Devuelve las canciones de la biblioteca
   */
  getCanciones() {
    return this.canciones;
  }
  /**
   * Añadir artista a la biblioteca
   * @param artista Artista a añadir
   */
  addArtista(artista: Artista) {
    this.artistas.push(artista);
  }
  /**
   * Añadir disco a la biblioteca
   * @param disco Disco a añadir
   */
  addDisco(disco: Disco) {
    this.discos.push(disco);
  }
  /**
   * Añadir single a la biblioteca
   * @param single Single a añadir
   */
  addSingle(single: Single) {
    this.singles.push(single);
  }
  /**
   * Añadir canción a la biblioteca
   * @param cancion Cancion a añadir
   */
  addCancion(cancion: Cancion) {
    this.canciones.push(cancion);
  }
  /**
   * Muestra los artistas de la biblioteca
   * @returns Array de artistas
   */
  showArtistas() {
    console.clear();
    console.log("Artistas");
    console.table(this.artistas);
  }
  /**
   * Muestra los discos de la biblioteca
   * @returns Array de discos
   */
  showDiscos() {
    console.clear();
    console.log("Discos");
    console.table(this.discos);
  }
  /**
   * Muestra los singles de la biblioteca
   * @returns Array de singles
   */
  showSingles() {
    console.clear();
    console.log("Singles");
    console.table(this.singles);
  }
  /**
   * Muestra las canciones de la biblioteca
   * @returns Array de canciones
   */
  showCanciones() {
    console.clear();
    console.log("Canciones");
    console.table(this.canciones);
  }
  /**
   * Busca un artista en la biblioteca
   * @param nombre Nombre del artista a buscar
   * @returns Información del artista si existe, null en caso contrario
   */
  searchArtista(nombre: string) {
    const artista = this.artistas.find(
      (artista) => artista.getNombre() === nombre
    );
    if (artista !== undefined) {
      console.clear();
      console.log(artista.getNombre());
      console.table(artista);
      return artista;
    }
    return null;
  }
  /**
   * Busca un disco en la biblioteca
   * @param nombre Nombre del disco a buscar
   * @returns Información del disco si existe, null en caso contrario
   */
  searchDisco(nombre: string) {
    const disco = this.discos.find((disco) => disco.nombre === nombre);
    if (disco !== undefined) {
      console.clear();
      console.log(disco.nombre);
      console.table(disco);
      return disco;
    }
    return null;
  }
  /**
   * Busca un single en la biblioteca
   * @param nombre Nombre del single a buscar
   * @returns Información del single si existe, null en caso contrario
   */
  searchSingle(nombre: string) {
    const single = this.singles.find((single) => single.nombre === nombre);
    if (single !== undefined) {
      console.clear();
      console.log(single.nombre);
      console.table(single);
      return single;
    }
    return null;
  }
  /**
   * Busca una canción en la biblioteca
   * @param nombre Nombre de la cancion a buscar
   * @returns Información de la canción si existe, null en caso contrario
   */
  searchCancion(nombre: string) {
    const cancion = this.canciones.find(
      (cancion) => cancion.getNombre() === nombre
    );
    if (cancion !== undefined) {
      console.clear();
      console.log(cancion.getNombre());
      console.table(cancion);
      return cancion;
    }
    return null;
  }
}
