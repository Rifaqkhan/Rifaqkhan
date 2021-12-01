/// <reference types= "cypress" />

class ProductSearch {
  validatePlatformOpen() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.title().should("eq", "ERPLY Login");
    cy.url().should("eq", "https://epos.erply.com/");
  }
  enterCredentials() {
    cy.get('[data-testid="clientCode"]')
      .should("exist")
      .and("be.visible")
      .and("be.enabled")
      .type("104572");
    cy.get('[data-testid="username"]')
      .should("exist")
      .and("be.visible")
      .and("be.enabled")
      .type("testassignment");
    cy.get('[data-testid="password"]')
      .should("exist")
      .and("be.visible")
      .and("be.enabled")
      .type("PosTestAssignment123");
    cy.get('[data-testid="login-clockin-title"]')
      .should("exist")
      .and("be.visible")
      .click();
  }
  validateSignIn() {
    cy.contains("Signing in...").should("be.visible");
    cy.get('[data-testid="pos-select-container"]').within(($modal) => {
      cy.get('[data-testid="pos-item"]')
        .should("exist")
        .and("be.visible")
        .click();
    });
    cy.title().should("eq", "Location #1 - Default POS - Test User");
    cy.get("#signed-in-employee")
      .should("be.visible")
      .and("contains.text", "Test User");
  }
  searchProduct($search) {
    cy.get('[data-testid="product-search-input"] > .MuiInputBase-input').type(
      $search
    );
  }
  productSearchBarVisibility() {
    if (cy.title() == "Location #1 - Default POS - Test User") {
      cy.get('[data-testid="product-search-input"] > .MuiInputBase-input')
        .should("exist")
        .and("be.visible")
        .and("have.css", "width", "175.5px")
        .click();
      cy.get('[data-testid="product-search-input"]').should(
        "have.css",
        "width",
        "415px"
      );
    } else {
      this.enterCredentials();
      this.validateSignIn();
      cy.get('[data-testid="product-search-input"] > .MuiInputBase-input')
        .should("exist")
        .and("be.visible")
        .and("have.css", "width", "175.5px")
        .click();
      cy.get('[data-testid="product-search-input"]').should(
        "have.css",
        "width",
        "415px"
      );
    }
  }
  validateSearchByName($search) {
    cy.get(".MuiPaper-rounded > table > tbody").within(($table) => {
      cy.wait(300)
      cy.get("tr:nth-child(n) > th > p").should("contain.text", $search);
    });
  }
  validateSearchById($search) {
    cy.get(".MuiPaper-rounded > table > tbody").within(($table) => {
      cy.wait(300)
      cy.get("tr:nth-child(n) > td > p").should("contain.text", $search);
    });
  }
}

module.exports = new ProductSearch();
