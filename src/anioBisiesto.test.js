import esBisiesto from "./anioBisiesto";

describe("esBisiesto", () => {
    it("debería devolver true para años divisibles por 400", () => {
        expect(esBisiesto(2000)).toEqual(true);
      });
});
