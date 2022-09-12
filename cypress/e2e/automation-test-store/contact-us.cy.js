/// <reference types="Cypress" />

describe("Test Contact Us from via Automation Test Store", () => {
    before(function () {
        cy.viewport(550, 750)
        cy.fixture("userdetails").as("user")
    })

it("Should be able to sumbit a successful submission via contact us from", () => {
    cy.visit("https://www.automationteststore.com/")
    cy.get("a[href$='contact'").click().then(function (linkText) {
        cy.log("Clicked on link using text: " + linkText.text())
    })
    cy.get("@user").then((user) => {
        cy.get('#ContactUsFrm_first_name').type(user.frist_name);
        cy.get('#ContactUsFrm_email').type(user.email);
    })
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
    cy.get('#ContactUsFrm_enquiry').type("Do You provide additional discount on bulk orders?")
    cy.get('.col-md-6 > .btn').click();
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    cy.log("Test has completed!");
})
})
