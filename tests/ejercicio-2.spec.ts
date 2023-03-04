import "mocha";
import { expect } from "chai";

import { myList } from "../src/ejercicio-2/myList";

describe("Ejercicio 2 - Implementacion de una lista y sus operaciones", () => {
  context("Se puede crear una instancia de myList", () => {
    it("Lista de numeros", () => {
      const list = new myList([1, 2, 3]);
      expect(list).to.be.an.instanceOf(myList);
    });
    it("Lista de strings", () => {
      const list = new myList(["1", "2", "3"]);
      expect(list).to.be.an.instanceOf(myList);
    });
    it("Lista vacia", () => {
      const list = new myList([]);
      expect(list).to.be.an.instanceOf(myList);
    });
  });

  context("Se puede añadir al final de una lista los elementos de otra", () => {
    it("Lista de numeros", () => {
      const list = new myList([1, 2, 3]);
      const list2 = new myList([4, 5, 6]);
      list.append(list2);
      expect(list).to.deep.equal(new myList([1, 2, 3, 4, 5, 6]));
    });
    it("Lista de strings", () => {
      const list = new myList(["1", "2", "3"]);
      const list2 = new myList(["4", "5", "6"]);
      list.append(list2);
      expect(list).to.deep.equal(new myList(["1", "2", "3", "4", "5", "6"]));
    });
    it("Lista vacia", () => {
      const list = new myList([]);
      list.append(list);
      expect(list).to.deep.equal(new myList([]));
    });
  });

  context("Se puede concatenar una lista a otras", () => {
    it("Lista de numeros", () => {
      const list = new myList([1, 2, 3]);
      const lists = [new myList([4, 5]), new myList([6])];
      list.concatenate(lists);
      expect(list).to.deep.equal(new myList([1, 2, 3, 4, 5, 6]));
    });
    it("Lista de strings", () => {
      const list = new myList(["1", "2", "3"]);
      const lists = [new myList(["4", "5"]), new myList(["6"])];
      list.concatenate(lists);
      expect(list).to.deep.equal(new myList(["1", "2", "3", "4", "5", "6"]));
    });
    it("Lista vacia", () => {
      const list = new myList([]);
      const lists = [new myList([]), new myList([])];
      list.concatenate(lists);
      expect(list).to.deep.equal(new myList([]));
    });
  });

  context("Se puede filtrar una lista", () => {
    it("Lista de numeros", () => {
      const list = new myList([1, 2, 3, 4, 5, 6]);
      const filteredList = list.filter((element) => element % 2 === 0);
      expect(filteredList).to.deep.equal(new myList([2, 4, 6]));
    });
    it("Lista de strings", () => {
      const list = new myList(["1", "2", "3", "4", "5", "6"]);
      const filteredList = list.filter((element) => element === "2");
      expect(filteredList).to.deep.equal(new myList(["2"]));
    });
    it("Lista vacia", () => {
      const list = new myList([]);
      const filteredList = list.filter((element) => element === "2");
      expect(filteredList).to.deep.equal(new myList([]));
    });
  });

  context("Se puede obtener la longitud de una lista", () => {
    it("Lista de numeros", () => {
      const list = new myList([1, 2, 3, 4, 5, 6]);
      expect(list.length()).to.equal(6);
    });
    it("Lista de strings", () => {
      const list = new myList(["1", "2", "3", "4", "5", "6"]);
      expect(list.length()).to.equal(6);
    });
    it("Lista vacia", () => {
      const list = new myList([]);
      expect(list.length()).to.equal(0);
    });
  });

  context("Se puede mapear una lista", () => {
    it("Lista de numeros", () => {
      const list = new myList([1, 2, 3, 4, 5, 6]);
      const mappedList = list.map((element) => element * 2);
      expect(mappedList).to.deep.equal(new myList([2, 4, 6, 8, 10, 12]));
    });
    it("Lista de strings", () => {
      const list = new myList(["1", "2", "3", "4", "5", "6"]);
      const mappedList = list.map((element) => element + "0");
      expect(mappedList).to.deep.equal(
        new myList(["10", "20", "30", "40", "50", "60"])
      );
    });
    it("Lista vacia", () => {
      const list = new myList([]);
      const mappedList = list.map((element) => element);
      expect(mappedList).to.deep.equal(new myList([]));
    });
  });

  context("Se puede reducir una lista", () => {
    it("Lista de numeros", () => {
      const list = new myList([1, 2, 3, 4, 5, 6]);
      const reducedList = list.reduce(
        (accumulator, element) => element + accumulator
      );
      expect(reducedList).to.deep.equal(21);
    });
    it("Lista de strings", () => {
      const list = new myList(["1", "2", "3", "4", "5", "6"]);
      const reducedList = list.reduce(
        (accumulator, element) => element + accumulator
      );
      expect(reducedList).to.deep.equal("654321");
    });
    it("Lista vacia", () => {
      const list = new myList([]);
      const reducedList = list.reduce(
        (accumulator, element) => element
      );
      expect(reducedList).to.deep.equal(undefined);
    });
  });

  context("Se puede invertir una lista", () => {
    it("Lista de numeros", () => {
      const list = new myList([1, 2, 3, 4, 5, 6]);
      const reversedList = list.reverse();
      expect(reversedList).to.deep.equal(new myList([6, 5, 4, 3, 2, 1]));
    });
    it("Lista de strings", () => {
      const list = new myList(["1", "2", "3", "4", "5", "6"]);
      const reversedList = list.reverse();
      expect(reversedList).to.deep.equal(
        new myList(["6", "5", "4", "3", "2", "1"])
      );
    });
    it("Lista vacia", () => {
      const list = new myList([]);
      const reversedList = list.reverse();
      expect(reversedList).to.deep.equal(new myList([]));
    });
  });
  context("Se puede iterar una lista", () => {
    it("Lista de numeros", () => {
      const list = new myList([1, 2, 3, 4, 5, 6]);
      let result = "";
      list.forEach((element) => (result += element));
      expect(result).to.equal("123456");
    });
    it("Lista de strings", () => {
      const list = new myList(["1", "2", "3", "4", "5", "6"]);
      let result = "";
      list.forEach((element) => (result += element));
      expect(result).to.equal("123456");
    });
    it("Lista vacia", () => {
      const list = new myList([]);
      let result = "";
      list.forEach((element) => (result += element));
      expect(result).to.equal("");
    });
  });
});
