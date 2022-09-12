/// <reference types="Cypress" />

describe("Verify The GitHub", () => {
    before(function () {
        cy.fixture('commonCode').then(function (data) {
            globalThis.data = data;
        })
    })
    it("Verify the repoUser name", () => {
        cy.visit(data.gitHub.gitHub_site)
        cy.get(data.gitHub.select_Explore).contains("Explore").click({ force: true })
        cy.get(data.gitHub.explore.select_topics).contains("Topics").click({ force: true })
        cy.wait(500)
        cy.get(data.gitHub.explore.select_Second_Browser).eq(1).click()
        cy.wait(1500)
        cy.get(data.gitHub.explore.select_first_repositories).first(0).click()
        cy.url().then(url => {
            const getUrl = url
            cy.log('Current URL is :' + getUrl)

            cy.get(data.gitHub.explore.userName).then((User) => {
                const UserName = User.text()
                cy.log(User.text())
                const NewUrl = getUrl.replace(data.gitHub.explore.replace_Url, '')
                cy.log(NewUrl)
                cy.get(data.gitHub.explore.select_allresults).click()
                cy.get(data.gitHub.explore.type_newUrl).type(NewUrl + '{enter}')
                cy.get(data.gitHub.explore.verify_select_allRepositories).contains("all results on GitHub").click()
                cy.get(data.gitHub.select_first_repositories_option).first().click()
                cy.wait(1500)
                cy.get(data.gitHub.verify_userNaeme).find('.user-mention').should('have.text', UserName)

            })
        })
    })
})

