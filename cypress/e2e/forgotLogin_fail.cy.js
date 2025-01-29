require('cypress-xpath');

describe('Customer Lookup form', () => {

    beforeEach('forgot login info form', () => {

        cy.visit(Cypress.env('BASE_URL'))

        cy.contains('a', 'Forgot login info?').click()

        cy.contains('h1', 'Customer Lookup').should('be.visible')

        cy.contains('p', 'Please fill out the following information in order to validate your account.').should('be.visible')
    })

    
    it('TC5: check inputs that are required', () => {
 
        cy.contains('input', 'Find My Login Info').click()
    
        cy.contains('span', 'First name is required.').should('be.visible')
        cy.contains('span', 'Last name is required.').should('be.visible')
        cy.contains('span', 'Address is required.').should('be.visible')
        cy.contains('span', 'City is required.').should('be.visible')
        cy.contains('span', 'State is required.').should('be.visible')
        cy.contains('span', 'Zip Code is required.').should('be.visible')
        cy.contains('span', 'Social Security Number is required.').should('be.visible')
 
    })


    it('TC6: Customer Lookup with fail', () => {

        cy.get('#firstName').type(Cypress.env('TC6').firstName)
        cy.get('#lastName').type(Cypress.env('TC6').lastName)
        cy.get('input[name="address.street"]').type(Cypress.env('TC6').street)
        cy.get('input[name="address.city"]').type(Cypress.env('TC6').city)
        cy.get('input[name="address.state"]').type(Cypress.env('TC6').state)
        cy.get('input[name="address.zipCode"]').type(Cypress.env('TC6').zipCode)
        cy.get('#ssn').type(Cypress.env('TC6').SSN)

 
        cy.contains('input', 'Find My Login Info').click()


        cy.contains('p', 'The customer information provided could not be found.').should('be.visible')
 
    })
    
    /*
    it('TC7: Customer Lookup with succes', () => {
     
        cy.createAccount('TC7').then( () => {

            cy.contains('a', 'Forgot login info?').click()

            cy.get('input[name="firstName"]').type(Cypress.env('TC7').firstName)
            cy.get('input[name="lastName"]').type(Cypress.env('TC7').lastName)
            cy.get('input[name="address.street"]').type(Cypress.env('TC7').street)
            cy.get('input[name="address.city"]').type(Cypress.env('TC7').city)
            cy.get('input[name="address.state"]').type(Cypress.env('TC7').state)
            cy.get('input[name="address.zipCode"]').type(Cypress.env('TC7').zipCode)
            cy.get('input[name="ssn"]').type(Cypress.env('TC7').SSN)
    
     
            cy.contains('input', 'Find My Login Info').click()
    
            cy.intercept('POST', '"*"/parabank/lookup.htm', (req) => {
                req.reply({ status:200})
            }).as('upload_success')
    
            
            cy.contains('p', 'Your login information was located successfully. You are now logged in.').should('be.visible')

        })
 
 
    })
  */

})

