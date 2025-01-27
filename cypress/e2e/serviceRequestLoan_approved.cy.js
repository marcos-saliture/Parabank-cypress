require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC31').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC31').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC31').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC31').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC31').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC31').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC31').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC31').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC31').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC31').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC31').password, { log: false })

        cy.get('input[value="Register"]').click();
        

    })
            
    it('TC31: Request Loan service - approved', () => {

        cy.contains('a', 'Request Loan').click()


        cy.get('h1.title').should('contain.text', 'Apply for a Loan')

        cy.get('#amount').type(Cypress.env('TC31').loanAmount)
        cy.get('#downPayment').type(Cypress.env('TC31').downPayment)

        cy.get('#fromAccountId.input').select(0)

        cy.get('input[value="Apply Now"]').click()

        cy.get('h1.title').should('contain.text', 'Loan Request Processed')

        cy.get('#loanStatus').should('contain.text', 'Approved')

        cy.contains('p', 'Congratulations, your loan has been approved.').should('be.visible')

        cy.get('#newAccountId').then(element => {
            const accountNumber = element[0].innerText

            cy.get('#newAccountId').should('have.text', accountNumber)
        })



    })


})
