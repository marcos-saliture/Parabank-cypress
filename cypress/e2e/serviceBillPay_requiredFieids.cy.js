require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))


        const userName = Cypress.env('TC22').userName
 
        cy.get('a:contains(Register)').click()

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC22').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC22').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC22').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC22').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC22').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC22').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC22').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC22').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC22').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC22').password, { log: false })

        cy.get('input[value="Register"]').click();
        
    })
       
    
    it('TC22: checking required fields', () => {

        cy.contains('a', 'Bill Pay').click()

        cy.get('input[value="Send Payment"]').click()

        cy.get('#validationModel-name').should('have.text', 'Payee name is required.')
        cy.get('#validationModel-address').should('have.text', 'Address is required.')
        cy.get('#validationModel-city').should('have.text', 'City is required.')
        cy.get('#validationModel-state').should('have.text', 'State is required.')
        cy.get('#validationModel-zipCode').should('have.text', 'Zip Code is required.')
        cy.get('#validationModel-phoneNumber').should('have.text', 'Phone number is required.')

        cy.get('#validationModel-account-empty').should('have.text', 'Account number is required.')
        
        cy.get('#validationModel-verifyAccount-empty').should('have.text', 'Account number is required.')
        
        cy.get('#validationModel-amount-empty').should('contain.text', 'The amount cannot be empty.')
       

    })


})

