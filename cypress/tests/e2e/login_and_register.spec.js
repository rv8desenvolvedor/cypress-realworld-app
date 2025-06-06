// Teste de Login com cliente cadastrado

describe("Login and Register spec", () => {
  it("Login - Success", () => {
    cy.visit("http://localhost:3000");
    cy.get("[name='username']").type("Heath93");
    cy.get("[name='password']").type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get("[data-test='nav-public-tab']");
    cy.get("[data-test='nav-contacts-tab']");
    cy.get("[data-test='nav-personal-tab']");
  });

  // Teste de Login de cliente não cadastrado

  it("Login - Fail", () => {
    cy.visit("http://localhost:3000");
    cy.get("[name='username']").type("Jojo");
    cy.get("[name='password']").type("suave");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]').contains("Username or password is invalid");
  });

  // Teste de Registro de cliente e primeiro acesso ao site

  it.skip("Register Client and First Access", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test="signup"]').click();
    cy.get('[data-test="signup-title"]');
    cy.get('[name="firstName"]').type("Ronald");
    cy.get('[name="lastName"]').type("Jackson");
    cy.get('[name="username"]').type("ronaldJack");
    cy.get('[name="password"]').type("978665");
    cy.get('[name="confirmPassword"]').type("978665");
    cy.get('[data-test="signup-submit"]').click();
    cy.get("[name='username']").type("ronaldJack");
    cy.get("[name='password']").type("978665");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="user-onboarding-dialog-title"]');
    cy.get('[data-test="user-onboarding-next"]').click();
    cy.get("#bankaccount-bankName-input").type("Banco C6 Bank");
    cy.get("#bankaccount-routingNumber-input").type("123456789");
    cy.get("#bankaccount-accountNumber-input").type("123456789");
    cy.get('[data-test="bankaccount-submit"]').click();
    cy.get('[data-test="user-onboarding-dialog-title"]');
    cy.get('[data-test="user-onboarding-next"]').click();
    cy.get("[data-test='nav-public-tab']");
    cy.get("[data-test='nav-contacts-tab']");
    cy.get("[data-test='nav-personal-tab']");
  });

  /* Teste de Registro de cliente incompleto na página de cadastro - 
  Primeiro, último nome faltando e confirme seu passaword faltando
*/

  it("Register Client - First Imcomplete", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test="signup"]').click();
    cy.get('[name="firstName"]').click();
    cy.get('[data-test="signup-title"]');
    cy.get('[data-test="signup-first-name"]');
    cy.get('[name="lastName"]').type("Jackson");
    cy.get('[name="username"]').type("ronaldJack");
    cy.get('[name="password"]').type("978665");
    cy.get('[name="confirmPassword"]').type("978665");
  });

  it("Register Client - Last Imcomplete", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test="signup"]').click();
    cy.get('[name="firstName"]').type("Ronald");
    cy.get('[name="lastName"]').click();
    cy.get('[data-test="signup-last-name"]');
    cy.get('[name="username"]').type("ronaldJack");
    cy.get('[name="password"]').type("978665");
    cy.get('[name="confirmPassword"]').type("978665");
  });

  it("Register Client - Confirm your password Imcomplete", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test="signup"]').click();
    cy.get('[name="firstName"]').type("Ronald");
    cy.get('[name="lastName"]').type("Jackson");
    cy.get('[name="username"]').type("ronaldJack");
    cy.get('[name="password"]').type("978665");
    cy.get('[name="confirmPassword"]').click();
    cy.get("#root .App-root").click();
    cy.get('[data-test="signup-confirmPassword"]').contains("Confirm your password");
  });
});
