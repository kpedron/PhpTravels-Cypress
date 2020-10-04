/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://phptravels.com/demo";

Given("I visit phptravels", () => {
    cy.visit(url)
    //cy.wait(6000)
});

When("I click on Login button", () => {
    cy.get('#mega-nav-navigation > div > ul:nth-child(2) > li > a').invoke('removeAttr', 'target').click()
});

Then("The login page is loaded", () => {
    cy.get('[name=username').type('ketlin')
});