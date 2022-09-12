

describe("Rahulshettyacademy", () => {
    it("Validate the Radio Button Example", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("label[for='radio2'] input").click()
        cy.get('.inputs.ui-autocomplete-input').type("in")
        cy.get(".ui-menu-item-wrapper").each(function ($ele) {
            const countries = $ele.text()
            cy.log(countries)
            if (countries == "India") {
                // cy.get(".ui-menu-item-wrapper").eq(1).contains(countries).should('have.text',countries).click()
                $ele.click()
            }
        })
        cy.get("#dropdown-class-example").select('Option2')
        cy.get("#checkBoxOption3").click()
               

    })
})