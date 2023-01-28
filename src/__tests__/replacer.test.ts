import replacer from "../index";

describe("replacer", () => {
  it("should replace the string", () => {
    const result = replacer(
      { name: "Rayhan", age: 26 },
      "my name is #name# and my age is #age#"
    );
    expect(result).toBe("my name is Rayhan and my age is 26");
  });

  it("should replace the string with default identifier", () => {
    const result = replacer(
      { name: "Rayhan", age: 26 },
      "my name is {{name}} and my age is {{age}}"
    );
    expect(result).toBe("my name is Rayhan and my age is 26");
  });

  it("should replace the string with space in between variable identifier", () => {
    const result = replacer(
      { name: "Rayhan", age: 26 },
      "my name is {{ name }} and my age is {{ age       }}"
    );
    expect(result).toBe("my name is Rayhan and my age is 26");
  });

  it("should replace the string with custom identifier", () => {
    const result = replacer(
      { name: "Rayhan", age: 26 },
      "my name is %name% and my age is %age%",
      ["%_%"]
    );
    expect(result).toBe("my name is Rayhan and my age is 26");
  });

  it("should replace the string with multiple custom identifier", () => {
    const result = replacer(
      { name: "Rayhan", age: 26 },
      "my name is %name% and my age is %age%",
      ["%_%", "#_#"]
    );
    expect(result).toBe("my name is Rayhan and my age is 26");
  });
});
