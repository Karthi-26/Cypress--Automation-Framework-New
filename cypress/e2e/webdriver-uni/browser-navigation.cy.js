/// <reference types="Cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confim links redirect to the correct pages", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        //cy.get('#contact-us').invoke('removeAttr,'target').click({force:true})
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.reload()
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
        // cy.reload(true) reload without using cache
        cy.go('forward')
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({ force: true })
        
    });

});
