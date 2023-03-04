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
      new Film("El Padrino", 1972, ["Drama", "Crimen"], 9.2, 175),
      new Film("El Padrino: Parte II", 1974, ["Drama", "Crimen"], 9.0, 202),
      new Film("El Padrino: Parte III", 1990, ["Drama", "Crimen"], 7.6, 161),
    ];
    const filmCollection = new FilmCollection(films);
    expect(filmCollection).to.be.an.instanceOf(FilmCollection);
    expect(filmCollection.collection).to.equal(films);
  });

  it("Se puede crear una instancia de SeriesCollection", () => {
    const series = [
      new Series("Breaking Bad", 2008, ["Drama", "Suspenso"], 9.5, 5),
      new Series("The Walking Dead", 2010, ["Horror", "Zombies"], 8.2, 11),
      new Series("Game of Thrones", 2011, ["Fantasía", "Drama"], 9.3, 8),
    ];
    const seriesCollection = new SeriesCollection(series);
    expect(seriesCollection).to.be.an.instanceOf(SeriesCollection);
    expect(seriesCollection.collection).to.equal(series);
  });

  it("Se puede crear una instancia de DocumentaryCollection", () => {
    const documentaries = [
      new Documentary("The Last Dance", 2020, ["Documentary", "Sports"], 9.5),
      new Documentary(
        "The Social Dilemma",
        2020,
        ["Documentary", "Drama"],
        8.7
      ),
      new Documentary("The Game Changers", 2019, ["Documentary", "Sport"], 8.1),
    ];
    const documentaryCollection = new DocumentaryCollection(documentaries);
    expect(documentaryCollection).to.be.an.instanceOf(DocumentaryCollection);
    expect(documentaryCollection.collection).to.equal(documentaries);
  });

  it("Se puede buscar por nombre", () => {
    const films = [
      new Film("El Padrino", 1972, ["Drama", "Crimen"], 9.2, 175),
      new Film("El Padrino: Parte II", 1974, ["Drama", "Crimen"], 9.0, 202),
      new Film("El Padrino: Parte III", 1990, ["Drama", "Crimen"], 7.6, 161),
    ];
    const filmCollection = new FilmCollection(films);
    expect(filmCollection.searchByName("El Padrino")).to.deep.equal([
      new Film("El Padrino", 1972, ["Drama", "Crimen"], 9.2, 175),
      new Film("El Padrino: Parte II", 1974, ["Drama", "Crimen"], 9.0, 202),
      new Film("El Padrino: Parte III", 1990, ["Drama", "Crimen"], 7.6, 161),
    ]);
    expect(filmCollection.searchByName("Bladerunner")).to.deep.equal([]);
  });
  it("Se puede buscar por género", () => {
    const series = [
      new Series("Breaking Bad", 2008, ["Drama", "Crimen"], 9.5, 5),
      new Series("The Walking Dead", 2010, ["Horror", "Zombies"], 8.2, 10),
      new Series("Game of Thrones", 2011, ["Drama", "Fantasía"], 9.3, 8),
    ];
    const seriesCollection = new SeriesCollection(series);
    expect(seriesCollection.searchByGenre("Drama")).to.deep.equal([
      new Series("Breaking Bad", 2008, ["Drama", "Crimen"], 9.5, 5),
      new Series("Game of Thrones", 2011, ["Drama", "Fantasía"], 9.3, 8),
    ]);
    expect(seriesCollection.searchByGenre("Love")).to.deep.equal([]);
  });
  it("Se puede buscar por año", () => {
    const documentaries = [
      new Documentary("The Last Dance", 2020, ["Documentary", "Sports"], 9.5),
      new Documentary(
        "The Social Dilemma",
        2020,
        ["Documentary", "Drama"],
        8.7
      ),
      new Documentary(
        "The Game Changers",
        2019,
        ["Documentary", "Sports"],
        8.1
      ),
    ];
    const documentaryCollection = new DocumentaryCollection(documentaries);
    expect(documentaryCollection.searchByYear(2020)).to.deep.equal([
      new Documentary("The Last Dance", 2020, ["Documentary", "Sports"], 9.5),
      new Documentary(
        "The Social Dilemma",
        2020,
        ["Documentary", "Drama"],
        8.7
      ),
    ]);
    expect(documentaryCollection.searchByYear(2023)).to.deep.equal([]);
  });
  it("Se puede buscar por calificación", () => {
    const films = [
      new Film("El Padrino", 1972, ["Drama", "Crimen"], 9.2, 175),
      new Film("El Padrino: Parte II", 1974, ["Drama", "Crimen"], 9.0, 202),
      new Film("El Padrino: Parte III", 1990, ["Drama", "Crimen"], 7.6, 161),
    ];
    const filmCollection = new FilmCollection(films);
    expect(filmCollection.searchByRating(9.2)).to.deep.equal([
      new Film("El Padrino", 1972, ["Drama", "Crimen"], 9.2, 175),
    ]);
    expect(filmCollection.searchByRating(8.2)).to.deep.equal([]);
  });
});
