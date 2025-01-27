require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC34').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC34').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC34').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC34').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC34').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC34').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC34').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC34').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC34').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC34').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC34').password, { log: false })

        cy.get('input[value="Register"]').click();

    })

        
    it('TC34:Update contact info required fields', () => {

        cy.get('a:contains(Update Contact Info)').click()

        cy.intercept('GET', '*/parabank/services_proxy/bank/customers/*', (req) => {
            req.reply({ status:200})
        }).as('upload_success')

        cy.get('h1.title').should('be.visible').and('contain.text', 'Update Profile')


        cy.get('input[name="customer.firstName"]').should('be.visible').and('have.length.gt', 0).clear()
        cy.get('input[name="customer.lastName"]').should('be.visible').and('have.length.gt', 0).clear()
        cy.get('input[name="customer.address.street"]').should('be.visible').and('have.length.gt', 0).clear()
        cy.get('input[name="customer.address.city"]').should('be.visible').and('have.length.gt', 0).clear()
        cy.get('input[name="customer.address.state"]').should('be.visible').and('have.length.gt', 0).clear()
        cy.get('input[name="customer.address.zipCode"]').should('be.visible').and('have.length.gt', 0).clear()
        cy.get('input[name="customer.phoneNumber"]').should('be.visible').and('have.length.gt', 0).clear()
    
        cy.get('input[value="Update Profile"]').click()
    
        cy.get('h1.title').should('contain.text', 'Update Profile')
    
        cy.get('#firstName-error').should('contain.text', 'First name is required.')
        cy.get('#lastName-error').should('contain.text', 'Last name is required.')
        cy.get('#street-error').should('contain.text', 'Address is required.')
        cy.get('#city-error').should('contain.text', 'City is required.')
        cy.get('#state-error').should('contain.text', 'State is required.')
        cy.get('#zipCode-error').should('contain.text', 'Zip Code is required.')


    })

})

