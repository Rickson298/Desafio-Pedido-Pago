import fetch from "cross-fetch";

let baseUrl = "https://pp-api-desafio.herokuapp.com";

describe("Test Api", () => {
  it("Agents Endpoint", async () => {
    const response = await fetch(`${baseUrl}/agents`);
    expect(response.status).toEqual(200);
  });

  it("Single agent Endpoint", async () => {
    const response = await fetch(`${baseUrl}/agent/1`);
    expect(response.status).toEqual(200);
  });

  it("Roles Endpoint", async () => {
    const response = await fetch(`${baseUrl}/roles`);
    expect(response.status).toEqual(200);
  });
  it("Single Role Endpoint", async () => {
    const response = await fetch(`${baseUrl}/role/1`);
    expect(response.status).toEqual(200);
  });
});

export {};
