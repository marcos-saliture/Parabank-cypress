
require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC26').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC26').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC26').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC26').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC26').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC26').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC26').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC26').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC26').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC26').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC26').password, { log: false })


        cy.get('input[value="Register"]').click();

    })


            
    it('TC26: Find Transactions by Date Range', () => {

        const amount  = Cypress.env('TC26').amount
        cy.transferingFunds(amount)

        cy.contains('a', 'Find Transactions').click()


        cy.get('#formContainer > h1').should('contain.text', 'Find Transactions')

        cy.get('#accountId').select(0)

        cy.get('#fromDate').type(Cypress.env('TC26').fromDate)
        cy.get('#toDate').type(Cypress.env('TC26').toDate)


        cy.get('#findByDateRange').click()

        cy.get('#resultContainer > h1').should('contain.text', 'Transaction Results')

        cy.get('#transactionTable').should('be.visible')
        


    })


})
