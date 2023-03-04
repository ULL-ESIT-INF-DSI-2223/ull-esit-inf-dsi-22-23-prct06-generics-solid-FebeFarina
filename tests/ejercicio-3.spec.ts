import "mocha";
import { expect } from "chai";

import { Artista } from "../src/ejercicio-3/artista";
import { Disco } from "../src/ejercicio-3/disco";
import { Cancion } from "../src/ejercicio-3/cancion";
import { Biblioteca } from "../src/ejercicio-3/biblioteca";
import { Discografia } from "../src/ejercicio-3/discografia";
import { Single } from "../src/ejercicio-3/single";

describe("Ejercicio 3 - Ampliando la biblioteca musical", () => {
  context("Clase Artista", () => {
    it("Debería poder crear un artista", () => {
      const artista = new Artista("Artista 1", 10000, new Discografia([]));
      expect(artista).to.be.an.instanceOf(Artista);
    });
    it("Debería poder obtener el nombre del artista", () => {
      const artista = new Artista("Artista 1", 10000, new Discografia([]));
      expect(artista.getNombre()).to.be.equal("Artista 1");
    });
  });
  context("Clase Disco", () => {
    it("Debería poder crear un disco", () => {
      const disco = new Disco("Disco 1", "2020", []);
      expect(disco).to.be.an.instanceOf(Disco);
    });
    it("Debería poder obtener las canciones del disco", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const cancion2 = new Cancion(
        "Canción 2",
        300,
        ["Rock", "Pop"],
        true,
        1000
      );
      const disco = new Disco("Disco 1", "2020", [cancion1, cancion2]);
      expect(disco.getCanciones()).to.be.deep.equal([cancion1, cancion2]);
    });
    it("Debería poder obtener la duración del disco", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const cancion2 = new Cancion(
        "Canción 2",
        300,
        ["Rock", "Pop"],
        true,
        1000
      );
      const disco = new Disco("Disco 1", "2020", [cancion1, cancion2]);
      expect(disco.getDuracion()).to.be.equal(500);
    });
    it("Debería poder obtener las reproducciones del disco", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const cancion2 = new Cancion(
        "Canción 2",
        300,
        ["Rock", "Pop"],
        true,
        1000
      );
      const disco = new Disco("Disco 1", "2020", [cancion1, cancion2]);
      expect(disco.getReproducciones()).to.be.equal(2000);
    });
  });
  context("Clase Single", () => {
    it("Debería poder crear un single", () => {
      const cancion = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const single = new Single("Single 1", "2020", cancion);
      expect(single).to.be.an.instanceOf(Single);
    });
    it("Debería poder obtener la duracion del single", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const single = new Single("Single 1", "2020", cancion1);
      expect(single.getDuracion()).to.be.equal(200);
    });
    it("Debería poder obtener las reproducciones del single", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const single = new Single("Single 1", "2020", cancion1);
      expect(single.getReproducciones()).to.be.equal(1000);
    });
  });
  context("Clase Discografia", () => {
    it("Debería poder crear una discografia", () => {
      const discografia = new Discografia([]);
      expect(discografia).to.be.an.instanceOf(Discografia);
    });
    it("Debería poder obtener los discos de la discografia", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const cancion2 = new Cancion(
        "Canción 2",
        300,
        ["Rock", "Pop"],
        true,
        1000
      );
      const disco = new Disco("Disco 1", "2020", [cancion1, cancion2]);
      const discografia = new Discografia([disco]);
      expect(discografia.getDiscos()).to.be.deep.equal([disco]);
    });
    it("Debería poder añadir un disco a la discografia", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const cancion2 = new Cancion(
        "Canción 2",
        300,
        ["Rock", "Pop"],
        true,
        1000
      );
      const disco = new Disco("Disco 1", "2020", [cancion1, cancion2]);
      const discografia = new Discografia<Disco>([]);
      discografia.addDisco(disco);
      expect(discografia.getDiscos()).to.be.deep.equal([disco]);
    });
    it("Debería poder añadir un single a la discografia", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const single = new Single("Single 1", "2020", cancion1);
      const discografia = new Discografia<Single>([]);
      discografia.addDisco(single);
      expect(discografia.getDiscos()).to.be.deep.equal([single]);
    });
    it("Debería poder añadir discos y singles a la discografia", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const cancion2 = new Cancion(
        "Canción 2",
        300,
        ["Rock", "Pop"],
        true,
        1000
      );
      const disco = new Disco("Disco 1", "2020", [cancion1, cancion2]);
      const single = new Single("Single 1", "2020", cancion1);
      const discografia = new Discografia<Disco | Single>([]);
      discografia.addDisco(disco);
      discografia.addDisco(single);
      expect(discografia.getDiscos()).to.be.deep.equal([disco, single]);
    });
  });
  context("Clase biblioteca", () => {
    it("Debería poder crear una biblioteca", () => {
      const biblioteca = new Biblioteca([], [], [], []);
      expect(biblioteca).to.be.an.instanceOf(Biblioteca);
    });
    it("Debería poder añadir un artista a la biblioteca", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const single = new Single("Single 1", "2020", cancion1);
      const artista = new Artista("Artista 1", 2020, new Discografia([single]));
      const biblioteca = new Biblioteca([], [], [], []);
      biblioteca.addArtista(artista);
      expect(biblioteca.getArtistas()).to.be.deep.equal([artista]);
    });
    it("Debería poder añadir un disco a la biblioteca", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const cancion2 = new Cancion(
        "Canción 2",
        300,
        ["Rock", "Pop"],
        true,
        1000
      );
      const disco = new Disco("Disco 1", "2020", [cancion1, cancion2]);
      const biblioteca = new Biblioteca([], [], [], []);
      biblioteca.addDisco(disco);
      expect(biblioteca.getDiscos()).to.be.deep.equal([disco]);
    });
    it("Debería poder añadir un single a la biblioteca", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const single = new Single("Single 1", "2020", cancion1);
      const biblioteca = new Biblioteca([], [], [], []);
      biblioteca.addSingle(single);
      expect(biblioteca.getSingle()).to.be.deep.equal([single]);
    });
    it("Debería poder añadir una canción a la biblioteca", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const biblioteca = new Biblioteca([], [], [], []);
      biblioteca.addCancion(cancion1);
      expect(biblioteca.getCanciones()).to.be.deep.equal([cancion1]);
    });
    it("Debería poder buscar un artista por nombre", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const single = new Single("Single 1", "2020", cancion1);
      const artista = new Artista("Artista 1", 2020, new Discografia([single]));
      const biblioteca = new Biblioteca([], [], [], []);
      biblioteca.addArtista(artista);
      expect(biblioteca.searchArtista("Artista 1")).to.be.deep.equal(artista);
      expect(biblioteca.searchArtista("Artista 2")).to.be.deep.equal(null);
    });
    it("Debería poder buscar un disco por nombre", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const cancion2 = new Cancion(
        "Canción 2",
        300,
        ["Rock", "Pop"],
        true,
        1000
      );
      const disco = new Disco("Disco 1", "2020", [cancion1, cancion2]);
      const biblioteca = new Biblioteca([], [], [], []);
      biblioteca.addDisco(disco);
      expect(biblioteca.searchDisco("Disco 1")).to.be.deep.equal(disco);
      expect(biblioteca.searchDisco("Disco 2")).to.be.deep.equal(null);
    });
    it("Debería poder buscar un single por nombre", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const single = new Single("Single 1", "2020", cancion1);
      const biblioteca = new Biblioteca([], [], [], []);
      biblioteca.addSingle(single);
      expect(biblioteca.searchSingle("Single 1")).to.be.deep.equal(single);
      expect(biblioteca.searchSingle("Single 2")).to.be.deep.equal(null);
    });
    it("Debería poder buscar una canción por nombre", () => {
      const cancion1 = new Cancion(
        "Canción 1",
        200,
        ["Rock", "Pop"],
        true,
        1000
      );
      const biblioteca = new Biblioteca([], [], [], []);
      biblioteca.addCancion(cancion1);
      expect(biblioteca.searchCancion("Canción 1")).to.be.deep.equal(cancion1);
      expect(biblioteca.searchCancion("Canción 2")).to.be.deep.equal(null);
    });
  });
});
