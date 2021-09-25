import {getAge} from "./getAge";

describe("Calculador de idade", () => {
    it("Return age", () => {
        expect(getAge(new Date(2000, 6,27))).toBe(21);
    });
});