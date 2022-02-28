import { inactiveStatus } from ".././inactiveStatus";

describe("Inactive status", () => {
  it("Should return a formatted string", () => {
    const result = inactiveStatus("inactive");
    expect(result).toBe(true);
  });
});

export {};
