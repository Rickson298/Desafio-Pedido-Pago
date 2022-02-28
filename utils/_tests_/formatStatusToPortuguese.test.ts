import { formatStatusToPortuguese } from "../formatStatusToPortuguese";

describe("FormatCpf", () => {
  it("Should return a translate string", () => {
    const result = formatStatusToPortuguese("active");
    expect(result).toBe("Ativo");
  });
});

export {};
