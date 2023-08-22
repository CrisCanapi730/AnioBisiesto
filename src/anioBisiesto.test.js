import esBisiesto from "./anioBisiesto";

describe("esBisiesto", () => {
    it("debería devolver true para años divisibles por 400", () => {
        expect(esBisiesto(2000)).toEqual(true);
      });
    it("debería devolver false para años divisibles por 100 pero no por 400", () => {
        expect(esBisiesto(1900)).toEqual(false);
      });
    it("debería devolver true para años divisibles por 4 pero no por 100", () => {
        expect(esBisiesto(2012)).toEqual(true);
      });
});
