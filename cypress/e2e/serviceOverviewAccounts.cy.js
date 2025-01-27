require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC30').userName
 
        cy.get('a:contains(Register)').click()

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC30').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC30').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC30').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC30').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC30').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC30').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC30').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC30').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC30').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC30').password, { log: false })

        cy.get('input[value="Register"]').click();
        

    })



    it('TC30: Accounts overview', () => {


        cy.contains('a', 'Accounts Overview').click()

        cy.get('h1.title').should('contain.text', 'Accounts Overview')

        cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()

        cy.get('h1.title').should('contain.text', 'Account Details')

        cy.url().then(url => {
            const account = url.split('=')[1];

            cy.get('#accountId').should('contain.text', account)
            cy.get('#accountType').should('contain.text', 'CHECKING')

            cy.get('#noTransactions').should('contain.text', 'No transactions found.')

        })


    })

})



