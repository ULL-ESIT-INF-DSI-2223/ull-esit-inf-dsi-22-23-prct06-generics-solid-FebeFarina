import { Disco } from "./disco";
import { Single } from "./single";

export class Discografia<T extends Disco | Single> {
  constructor(private discos: T[]) {}
  getDiscos() {
    return this.discos;
  }
  addDisco(disco: T) {
    this.discos.push(disco);
  }
}
