/// <reference types= "cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductSearch from "../PageObjects/ProductSearch";

Given("The platform is opened", () => {
  cy.visit("https://epos.erply.com/");
  ProductSearch.validatePlatformOpen();
});
When("the correct credentials are provided", () => {
  ProductSearch.enterCredentials();
});
Then("the login is successful", () => {
  ProductSearch.validateSignIn();
});

Given("the product search is visible", () => {
  ProductSearch.productSearchBarVisibility();
});
When("some alphabets are entered in the product search bar", () => {
  ProductSearch.searchProduct("Example");
});
Then("the products having the same alphabets in the name are visible", () => {
  ProductSearch.validateSearchByName("Example");
});
When("some Code is entered in the product search bar", () => {
  ProductSearch.searchProduct("001");
});
Then("the products having the same alphabets in the CodeID are visible", () => {
  ProductSearch.validateSearchById("001");
});
