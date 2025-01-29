require('cypress-xpath');

describe('Customer Lookup form', () => {

    beforeEach('create a previous account', () => {

        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC7').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC7').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC7').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC7').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC7').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC7').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC7').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC7').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC7').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC7').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC7').password, { log: false })


        cy.get('input[value="Register"]').click();

        cy.intercept('POST', '*/parabank/register.htm', (req) => {
            req.reply({ status:200})
        }).then( () => {


            cy.contains('a', 'Log Out').click()
        })
    })

    it('TC7: Customer Lookup with succes', () => {
     
        cy.contains('a', 'Forgot login info?').click()

        cy.contains('h1', 'Customer Lookup').should('be.visible')

        cy.contains('p', 'Please fill out the following information in order to validate your account.').should('be.visible')

        cy.get('input[name="firstName"]').type(Cypress.env('TC7').firstName)
        cy.get('input[name="lastName"]').type(Cypress.env('TC7').lastName)
        cy.get('input[name="address.street"]').type(Cypress.env('TC7').street)
        cy.get('input[name="address.city"]').type(Cypress.env('TC7').city)
        cy.get('input[name="address.state"]').type(Cypress.env('TC7').state)
        cy.get('input[name="address.zipCode"]').type(Cypress.env('TC7').zipCode)
        cy.get('input[name="ssn"]').type(Cypress.env('TC7').SSN)
    
        cy.contains('input', 'Find My Login Info').click()
    
        cy.intercept('POST', '*/parabank/lookup.htm', (req) => {
            req.reply({ status:200})
        }).then( () => {

            cy.contains('p', 'Your login information was located successfully. You are now logged in.').should('be.visible')

        })
    

 
    })


})

