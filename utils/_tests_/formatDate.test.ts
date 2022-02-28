import fetch from "cross-fetch";
import { formatDate } from "../formatDate";

describe("Format Date", () => {
  it("Should return a formatted date", () => {
    const result = formatDate(`${new Date()}`);
    expect(result).toBe("27/02/2022");
  });
});

export {};
