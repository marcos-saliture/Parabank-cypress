require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC21').userName
 
        cy.get('a:contains(Register)').click()

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC21').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC21').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC21').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC21').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC21').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC21').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC21').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC21').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC21').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC21').password, { log: false })

        cy.get('input[value="Register"]').click();
      

    })
       
        
    it('TC21: checking warning messages for fields that receivered value different of number', () => {

        cy.contains('a', 'Bill Pay').click()

        cy.get('input[name="payee.name"]').type(Cypress.env('TC21').payeeName)
        cy.get('input[name="payee.address.street"]').type(Cypress.env('TC21').street)
        cy.get('input[name="payee.address.city"]').type(Cypress.env('TC21').city)
        cy.get('input[name="payee.address.state"]').type(Cypress.env('TC21').state)
        cy.get('input[name="payee.address.zipCode"]').type(Cypress.env('TC21').zipCode)
        cy.get('input[name="payee.phoneNumber"]').type(Cypress.env('TC21').phoneNumber)
        cy.get('input[name="payee.accountNumber"]').type(Cypress.env('TC21').account)
        cy.get('input[name="verifyAccount"]').type(Cypress.env('TC21').verifyAccount)
        cy.get('input[name="amount"]').type(Cypress.env('TC21').amount)

        cy.get('select.input').select(0)

        cy.get('input[value="Send Payment"]').click()

        cy.get('#validationModel-account-invalid').should('contain.text', 'Please enter a valid number.')
        
        cy.get('#validationModel-verifyAccount-invalid').should('contain.text', 'Please enter a valid number.')

        cy.get('#validationModel-amount-invalid').should('contain.text', 'Please enter a valid amount.')


    })



})

