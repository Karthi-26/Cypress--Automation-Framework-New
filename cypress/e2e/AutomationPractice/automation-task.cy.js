/// <reference types="Cypress" />

describe(" Visit rahulshettyacademy", () => {
    it("Validate the capsicum", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.get("div .product-name").contains("Capsicum").then(Capsicum => {
            cy.log(Capsicum.text())
            const capsicumNew = Capsicum.text()

            cy.get("p.product-price").contains("60").then(Price => {
                cy.log(Price.text())
                const priceAmount = Price.text()

                cy.wait(500)
                cy.get(':nth-child(3) > .stepper-input > .increment').click()
                cy.get(".quantity").eq(2).should('have.value', '2').invoke('attr' , 'value').then(Quantity => {
                    cy.log(Quantity)
                    

                    cy.get(':nth-child(3) > .product-action > button').click()
                    cy.get(".cart-info strong").contains("120").then(Price => {
                        cy.log(Price.text())
                        const itemsPrice = Price.text()

                        cy.get('.cart-icon > img').click()
                        cy.get('.active .action-block button').contains("PROCEED TO CHECKOUT").click()
                        cy.wait(500)
                        cy.get('.quantity').contains("2")

                        cy.get('.cartTable').find('.quantity').should('have.length', 1).and('have.class', 'quantity')
                        cy.get('.cartTable').find('.product-name').first().should('have.text', capsicumNew)
                        cy.get('.cartTable').find('.quantity').should('have.text', Quantity)
                        cy.get('.cartTable').find('.amount').first().should('have.text', priceAmount)
                        cy.get('.cartTable').find('.amount').last().should('have.text', itemsPrice)
                    })
                })
            })
        })
        cy.get(':nth-child(14)').click()
        cy.get("div select ").select('India').should('have.value', 'India')
        cy.wait(500)
        // cy.get('option[value="India"]').contains("India")
        cy.get('button').click()
        cy.get('.errorAlert').should('have.text', 'Please accept Terms & Conditions - Required')
        cy.get('.chkAgree').click()
        cy.get('button').click()
        cy.get("div[class='wrapperTwo']").should('contain', "Thank you, your order has been placed successfully")



    })

})
