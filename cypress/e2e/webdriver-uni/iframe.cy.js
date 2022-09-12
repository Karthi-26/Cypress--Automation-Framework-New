/// <reference types="Cypress" />

describe("Handling Iframe & Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents.find('body')
            cy.wrap(body).as('$iframe')
        })
    })
});
