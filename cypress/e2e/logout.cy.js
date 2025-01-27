require('cypress-xpath');


describe('Log Out funcion', () => {

    before('Register new Account', () =>{

        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC11').userName
 
        cy.get('a:contains(Register)').click();

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC11').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC11').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC11').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC11').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC11').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC11').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC11').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC11').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC11').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC11').password, { log: false })

        cy.get('input[value="Register"]').click();


    })

    it('TC11: Log Out', () => {

        cy.contains('a', 'Log Out').click()

        cy.contains('h2', 'Customer Login').should('be.visible')

        cy.get('input[value="Log In"]').should('be.visible')

    })


})
