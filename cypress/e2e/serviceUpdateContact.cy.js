require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC35').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC35').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC35').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC35').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC35').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC35').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC35').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC35').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC35').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC35').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC35').password, { log: false })

        cy.get('input[value="Register"]').click();
        
    })

            
    it('TC35: Update contact info service with success', () => {
        
        cy.get('a:contains(Update Contact Info)').click()

        cy.intercept('GET', '*/parabank/services_proxy/bank/customers/*', (req) => {
            req.reply({ status:200})
        }).as('upload_success')


        cy.get('h1.title').should('be.visible').and('contain.text', 'Update Profile')


        cy.get('input[id="customer.firstName"]').should('be.visible').clear().type(Cypress.env('newInfo').firstName)
        cy.get('input[id="customer.lastName"]').should('be.visible').clear().type(Cypress.env('newInfo').lastName)
        cy.get('input[id="customer.address.street"]').should('be.visible').clear().type(Cypress.env('newInfo').street)
        cy.get('input[id="customer.address.city"]').should('be.visible').clear().type(Cypress.env('newInfo').city)
        cy.get('input[id="customer.address.state"]').should('be.visible').clear().type(Cypress.env('newInfo').state)
        cy.get('input[id="customer.address.zipCode"]').should('be.visible').clear().type(Cypress.env('newInfo').zipCode)
        cy.get('input[id="customer.phoneNumber"]').should('be.visible').clear().type(Cypress.env('newInfo').phoneNumber)


        cy.get('input[value="Update Profile"]').click()

        cy.get('h1.title').should('contain.text', 'Profile Updated')


    })

})

