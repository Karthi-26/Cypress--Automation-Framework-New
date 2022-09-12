/// <reference types="Cypress" />

describe("Iterate over elements ", () => {
    it("Log information of all hair care producs", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    });
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index:" + index + " : " + $el.text())

        });
    });
    it("Add specific product to basket ", () => {
        cy.selectProduct('Curls to straight shampoo');
    });
    it("Add specific product to basket ", () => {
        cy.selectProduct('Seaweed Conditioner');
    })
    it("Add specific product to basket 2", () => {
        cy.selectProduc('Eau Parfume au The vert Shampoo');
});



