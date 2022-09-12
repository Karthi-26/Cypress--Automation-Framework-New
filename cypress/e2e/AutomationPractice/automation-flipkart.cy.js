/// <reference types="Cypress" />

describe("Verify Flipakart and Select the Product", () => {
    before(function () {
        cy.fixture('commonCode').then(function (data) {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        cy.visit(data.flipkart.flipkart_site)
        cy.get(data.flipkart.login_button).last().click()
        cy.get(data.flipkart.close_login_button).first().click()
    })

    it("Verify the GIONEE", () => {

        cy.get(data.flipkart.select_mobile).contains("Mobiles").click()
        cy.get(data.flipkart.search_mobile_brand).click()
        cy.get(data.flipkart.select_gionee).contains("GIONEE").click()
        cy.get(data.flipkart.click_apply_filters).click()
        cy.wait(500)
        cy.get(data.flipkart.verify_first_mobile_name).first().then(($mobile) => {
            const fstMobileName = $mobile.text()
            cy.log($mobile.text())
            cy.get(data.flipkart.verify_first_mobile_price).first().then(($price) => {
                const amount = $price.text()
                cy.log($price.text())
                cy.get(data.flipkart.type_first_moblie_name).type(fstMobileName +'{enter}')
                cy.wait(500)
                cy.get(data.flipkart.analysis_first_mobile_name).first().should('have.text', fstMobileName)
                cy.get(data.flipkart.analysis_first_mobile_price).first().should('have.text', amount)
            })

        })
    })
    it("Verify the Laptops in Flipkart", () => {

        cy.get(data.flipkart.searchbox).type("Laptops").type('{enter}')

    })
})