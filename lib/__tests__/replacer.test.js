"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe("replacer", () => {
    it("should replace the string", () => {
        const result = (0, index_1.default)({ name: "Rayhan", age: 26 }, "my name is #name# and my age is #age#");
        expect(result).toBe("my name is Rayhan and my age is 26");
    });
    it("should replace the string with default identifier", () => {
        const result = (0, index_1.default)({ name: "Rayhan", age: 26 }, "my name is {{name}} and my age is {{age}}");
        expect(result).toBe("my name is Rayhan and my age is 26");
    });
    it("should replace the string with space in between variable identifier", () => {
        const result = (0, index_1.default)({ name: "Rayhan", age: 26 }, "my name is {{ name }} and my age is {{ age       }}");
        expect(result).toBe("my name is Rayhan and my age is 26");
    });
    it("should replace the string with custom identifier", () => {
        const result = (0, index_1.default)({ name: "Rayhan", age: 26 }, "my name is %name% and my age is %age%", ["%_%"]);
        expect(result).toBe("my name is Rayhan and my age is 26");
    });
    it("should replace the string with multiple custom identifier", () => {
        const result = (0, index_1.default)({ name: "Rayhan", age: 26 }, "my name is %name% and my age is %age%", ["%_%", "#_#"]);
        expect(result).toBe("my name is Rayhan and my age is 26");
    });
});
