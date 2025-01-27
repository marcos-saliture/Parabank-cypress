require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC27').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC27').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC27').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC27').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC27').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC27').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC27').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC27').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC27').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC27').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC27').password, { log: false })


        cy.get('input[value="Register"]').click();

    })

            
    it('TC27: Find Transactions by Transaction ID', () => {


        const amount  = Cypress.env('TC27').amount
        cy.transferingFunds(amount)

        cy.task('getId').then((transactionID)=> {

            cy.contains('a', 'Find Transactions').click()

            cy.get('#formContainer > h1').should('contain.text', 'Find Transactions')
    
            cy.get('#accountId').select(0)
    
            cy.get('#transactionId').type(transactionID)
    
    
            cy.get('#findById').click()
    
            cy.get('#resultContainer > h1').should('contain.text', 'Transaction Results')
            cy.get('#transactionTable').should('be.visible')

        })
        


    })


})

