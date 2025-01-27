
require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{

        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC24').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC24').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC24').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC24').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC24').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC24').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC24').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC24').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC24').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC24').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC24').password, { log: false })

        cy.get('input[value="Register"]').click();
        
    })


            
    it('TC24: Find Transactions by Amount', () => {

        const amount  = Cypress.env('TC24').amount
        cy.transferingFunds(amount)


        cy.contains('a', 'Find Transactions').click()


        cy.get('#accountId').select(0)

        cy.get('#amount').type(amount)


        cy.get('#findByAmount').click()

        cy.get('h1.title').should('contain.text', 'Transaction Results')

        cy.get('#transactionTable').should('be.visible')


    })


})

