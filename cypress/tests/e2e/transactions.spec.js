describe("Transactions spec", () => {
  it("Transaction History", () => {
    cy.visit("http://localhost:3000");
    cy.get("[name='username']").type("Heath93");
    cy.get("[name='password']").type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get("[data-test='nav-public-tab']").should("exist");
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.get('[data-test="transaction-list"]');
    cy.get('[data-test="transaction-item-bmMxZMrlE_a"]').click();
    cy.get('[data-test="transaction-comment-input-bmMxZMrlE_a"]');
    cy.get('[data-test="transaction-comment-input-bmMxZMrlE_a"]').click().type("Payment made");
    cy.get('[data-test="sidenav-home"]').click();
    cy.get("[data-test='nav-public-tab']").should("exist");
    cy.get('[data-test="nav-personal-tab"]').click();
  });

  it("Register Client and No Transaction", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test="signup"]').click();
    cy.get('[data-test="signup-title"]');
    cy.get('[name="firstName"]').type("Ednilson");
    cy.get('[name="lastName"]').type("Lago");
    cy.get('[name="username"]').type("ednilsonlago");
    cy.get('[name="password"]').type("123456");
    cy.get('[name="confirmPassword"]').type("123456");
    cy.get('[data-test="signup-submit"]').click();
    cy.get("[name='username']").type("ednilsonlago");
    cy.get("[name='password']").type("123456");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="user-onboarding-dialog-title"]');
    cy.get('[data-test="user-onboarding-next"]').click();
    cy.get("#bankaccount-bankName-input").type("Banco of Titan");
    cy.get("#bankaccount-routingNumber-input").type("123456789");
    cy.get("#bankaccount-accountNumber-input").type("123456789");
    cy.get('[data-test="bankaccount-submit"]').click();
    cy.get('[data-test="user-onboarding-dialog-title"]');
    cy.get('[data-test="user-onboarding-next"]').click();
    cy.get("[data-test='nav-public-tab']").should("exist");
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.get(".TransactionList-paper").contains("No Transactions");
  });
});
