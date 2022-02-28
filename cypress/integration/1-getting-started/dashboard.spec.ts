/// <reference types="cypress" />

describe("Test Dashboard", () => {
  it("Should visit page", () => {
    cy.visit("http://localhost:3000/");
  });
  it("Should change page number", () => {
    cy.get("[data-cy=button-pagination]").click();
    cy.get("[data-cy=current-page]").should("have.text", "2 de 2");
  });
  it("Should change dashboard data", () => {
    cy.get("[data-cy=button-cargos]").click();
    cy.get("[data-cy=button-pagination]").click();
    cy.get("[data-cy=current-page]").should("have.text", "2 de 2");
  });
  it("Should change back to initial dashboard data", () => {
    cy.get("[data-cy=button-colaboradores]").click();
    cy.get("[data-cy=button-pagination]").click();
    cy.get("[data-cy=current-page]").should("have.text", "2 de 2");
  });
  it("Should change page to single employer", () => {
    cy.visit("http://localhost:3000/colaboradores/1");
  });
  it("Should change page to role permissions", () => {
    cy.visit("http://localhost:3000/cargos/1");
  });
});

export {};
