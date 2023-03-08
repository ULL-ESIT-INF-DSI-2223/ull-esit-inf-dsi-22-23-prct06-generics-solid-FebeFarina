import "mocha";
import { expect } from "chai";

import {NumericPrintableCollection} from "../src/ejercicio-PE101/numericPrintableCollection"
import {StringPrintableCollection} from "../src/ejercicio-PE101/stringPrintableCollection"

describe("Ejercicio PE101 - Printable Collection", () => {
    context("Numeric Printable Collection", () => {
        it("Se puede instanciar un objeto", () => {
            const myCollection = new NumericPrintableCollection([])
            expect(myCollection).to.be.an.instanceOf(NumericPrintableCollection)
        });
        it("Se puede añadir un objeto", () => {
            const myCollection = new NumericPrintableCollection([]);
            myCollection.addItem(1);
            expect(myCollection.collection[0]).to.be.eq(1);
        });
        it("Se puede conseguir un objeto a través de un índice", () => {
            const myCollection = new NumericPrintableCollection([1, 2, 3]);
            expect(myCollection.getItem(1)).to.be.eq(2);
            expect(myCollection.getItem(10)).to.be.eq(null);
            expect(myCollection.getItem(-1)).to.be.eq(null);
        });
        it("Se puede eliminiar un objeto a través de un índice", () => {
            const myCollection = new NumericPrintableCollection([1, 2, 3]);
            expect(myCollection.removeItem(1)).to.be.eq(2);
            expect(myCollection.removeItem(10)).to.be.eq(null);
            expect(myCollection.getItem(-1)).to.be.eq(null);
            expect(myCollection.collection[1]).to.be.eq(3);
        });
        it("Se puede recuperar el tamaño de la colección", () => {
            const myCollection = new NumericPrintableCollection([1, 2, 3]);
            expect(myCollection.getNumberOfItems()).to.be.eq(3);
        });
        it("Se puede imprimir la colección", () => {
            const myCollection = new NumericPrintableCollection([1, 2, 3]);
            expect(myCollection.print()).to.be.eq("1,2,3");
        });
    });
    context("String Printable Collection", () => {
        it("Se puede instanciar un objeto", () => {
            const myCollection = new StringPrintableCollection([])
            expect(myCollection).to.be.an.instanceOf(StringPrintableCollection)
        });
        it("Se puede añadir un objeto", () => {
            const myCollection = new StringPrintableCollection([]);
            myCollection.addItem("hola");
            expect(myCollection.collection[0]).to.be.eq("hola");
        });
        it("Se puede conseguir un objeto a través de un índice", () => {
            const myCollection = new StringPrintableCollection(["hola", "mundo", "!"]);
            expect(myCollection.getItem(1)).to.be.eq("mundo");
            expect(myCollection.getItem(10)).to.be.eq(null);
            expect(myCollection.getItem(-1)).to.be.eq(null);
        });
        it("Se puede eliminiar un objeto a través de un índice", () => {
            const myCollection = new StringPrintableCollection(["hola", "mundo", "!"]);
            expect(myCollection.removeItem(1)).to.be.eq("mundo");
            expect(myCollection.removeItem(10)).to.be.eq(null);
            expect(myCollection.getItem(-1)).to.be.eq(null);
            expect(myCollection.collection[1]).to.be.eq("!");
        });
        it("Se puede recuperar el tamaño de la colección", () => {
            const myCollection = new StringPrintableCollection(["hola", "mundo", "!"]);
            expect(myCollection.getNumberOfItems()).to.be.eq(3);
        });
        it("Se puede imprimir la colección", () => {
            const myCollection = new StringPrintableCollection(["hola", "mundo", "!"]);
            expect(myCollection.print()).to.be.eq("hola,mundo,!");
        });
    });
});