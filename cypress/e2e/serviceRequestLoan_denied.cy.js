require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC32').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC32').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC32').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC32').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC32').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC32').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC32').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC32').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC32').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC32').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC32').password, { log: false })

        cy.get('input[value="Register"]').click();
       

    })


            
    it('TC32:Request Loan service - denied', () => {

        cy.contains('a', 'Request Loan').click()


        cy.get('h1.title').should('contain.text', 'Apply for a Loan')

        cy.get('#amount').type(Cypress.env('TC32').loanAmount)
        cy.get('#downPayment').type(Cypress.env('TC32').downPayment)

        cy.get('#fromAccountId.input').select(0)

        cy.get('input[value="Apply Now"]').click()

        cy.get('h1.title').should('contain.text', 'Loan Request Processed')

        cy.get('#loanStatus').should('contain.text', 'Denied')

        const message = 'We cannot grant a loan in that amount with your available funds.' 

        cy.contains('p', message).should('be.visible')

    })


})


