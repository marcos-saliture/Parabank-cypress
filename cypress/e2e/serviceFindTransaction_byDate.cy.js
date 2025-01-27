
require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC25').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC25').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC25').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC25').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC25').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC25').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC25').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC25').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC25').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC25').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC25').password, { log: false })

        cy.get('input[value="Register"]').click();
       

    })



            
    it('TC25: Find Transactions by Date', () => {

        const amount  = Cypress.env('TC25').amount
        cy.transferingFunds(amount)

        cy.task('getDate').then((transactionDate)=> {


            cy.contains('a', 'Find Transactions').click()


            cy.get('#formContainer > h1').should('contain.text', 'Find Transactions')
    
            cy.get('#accountId').select(0)
    
            cy.get('#transactionDate').type(transactionDate)
    
    
            cy.get('#findByDate').click()
    
            cy.get('#resultContainer > h1').should('contain.text', 'Transaction Results')
            cy.get('#transactionTable').should('be.visible')

        })



    })


})
