// Teste de Envio de Dinheiro para uma amigo

describe("Send money spec", () => {
  it("Sufficient Balance", () => {
    cy.visit("http://localhost:3000");
    cy.get("[name='username']").type("Heath93");
    cy.get("[name='password']").type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get("[data-test='nav-public-tab']");
    cy.get("[data-test='nav-contacts-tab']");
    cy.get("[data-test='nav-personal-tab']");
    cy.get('[data-test="nav-top-new-transaction"]').click();
    cy.get('[data-test="user-list-search-input"]').click().type("Lia Rosenbaum");
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"]').click();
    cy.get("#amount");
    cy.get("#amount").click();
    cy.get("#amount").type("100");
    cy.get("#transaction-create-description-input");
    cy.get("#transaction-create-description-input").click();
    cy.get("#transaction-create-description-input").type("New car payment");
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="main"]').contains("Paid $100.00 for New car payment");
    cy.get('[data-test="new-transaction-return-to-transactions"]').click();
    cy.get("[data-test='nav-public-tab']");
    cy.get("[data-test='nav-contacts-tab']");
    cy.get("[data-test='nav-personal-tab']");
  });

  it("Sufficient Balance in samsung-s10", () => {
    cy.viewport("samsung-s10", "landscape");
    cy.visit("http://localhost:3000");
    cy.get("[name='username']").type("Heath93");
    cy.get("[name='password']").type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get("[data-test='nav-public-tab']").should("exist");
    cy.get('[data-test="nav-top-new-transaction"]').click();
    cy.get('[data-test="user-list-search-input"]').click().type("Lia Rosenbaum");
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"]').click();
    cy.get("#amount").click().type("100");
    cy.get("#transaction-create-description-input").click().type("New car payment");
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="main"]').contains("Paid $100.00 for New car payment");
    cy.get('[data-test="alert-bar-success"]');
    cy.get('[data-test="new-transaction-return-to-transactions"]').click();
    cy.get("[data-test='nav-public-tab']");
    cy.get("[data-test='nav-contacts-tab']");
    cy.get("[data-test='nav-personal-tab']");
  });
});
