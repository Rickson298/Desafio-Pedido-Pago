import fetch from "cross-fetch";
import { formatCpf } from "../formatCpf";

describe("Format Cpf", () => {
  it("Should return a formatted cpf", () => {
    const result = formatCpf("12345678910");
    expect(result).toBe("123 456 789 10");
  });
});

export {};
