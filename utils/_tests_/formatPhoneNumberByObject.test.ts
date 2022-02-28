import fetch from "cross-fetch";
import { formatPhoneNumberByObject } from "../formatPhoneNumberByObject";

describe("Format phone numbet", () => {
  it("Should return a formatted phone number", () => {
    const result = formatPhoneNumberByObject("55", "19", "988457846");
    expect(result).toBe("+55 19 98845 7846");
  });
});

export {};
