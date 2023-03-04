import "mocha";
import { expect } from "chai";

import { Film } from "../src/ejercicio-1/film";
import { FilmCollection } from "../src/ejercicio-1/filmCollection";
import { Series } from "../src/ejercicio-1/series";
import { SeriesCollection } from "../src/ejercicio-1/seriesCollection";
import { Documentary } from "../src/ejercicio-1/documentaries";
import { DocumentaryCollection } from "../src/ejercicio-1/documentaryCollection";

describe("Ejercicio 1 - DSIflix", () => {
  it("Se puede crear una instancia de FilmCollection", () => {
    const films = [
      new Film("El Padrino", 1972, "Drama", 9.2, 175),
      new Film("El Padrino: Parte II", 1974, "Drama", 9.0, 202),
      new Film("El Padrino: Parte III", 1990, "Drama", 7.6, 161),
    ];
    const filmCollection = new FilmCollection(films);
    expect(filmCollection).to.be.an.instanceOf(FilmCollection);
    expect(filmCollection.collection).to.equal(films);
  });

  it("Se puede crear una instancia de SeriesCollection", () => {
    const series = [
      new Series("Breaking Bad", 2008, "Drama", 9.5, 5),
      new Series("The Walking Dead", 2010, "Drama", 8.2, 10),
      new Series("Game of Thrones", 2011, "Drama", 9.3, 8),
    ];
    const seriesCollection = new SeriesCollection(series);
    expect(seriesCollection).to.be.an.instanceOf(SeriesCollection);
    expect(seriesCollection.collection).to.equal(series);
  });

  it("Se puede crear una instancia de DocumentaryCollection", () => {
    const documentaries = [
      new Documentary("The Last Dance", 2020, "Documentary", 9.5),
      new Documentary("The Social Dilemma", 2020, "Documentary", 8.7),
      new Documentary("The Game Changers", 2019, "Documentary", 8.1),
    ];
    const documentaryCollection = new DocumentaryCollection(documentaries);
    expect(documentaryCollection).to.be.an.instanceOf(DocumentaryCollection);
    expect(documentaryCollection.collection).to.equal(documentaries);
  });

  it("Se puede buscar por nombre", () => {
    const films = [
      new Film("El Padrino", 1972, "Drama", 9.2, 175),
      new Film("El Padrino: Parte II", 1974, "Drama", 9.0, 202),
      new Film("El Padrino: Parte III", 1990, "Drama", 7.6, 161),
    ];
    const filmCollection = new FilmCollection(films);
    expect(filmCollection.searchByName("El Padrino")).to.deep.equal([
      new Film("El Padrino", 1972, "Drama", 9.2, 175),
      new Film("El Padrino: Parte II", 1974, "Drama", 9.0, 202),
      new Film("El Padrino: Parte III", 1990, "Drama", 7.6, 161),
    ]);
    expect(filmCollection.searchByName("Bladerunner")).to.equal([]);
  });
});
