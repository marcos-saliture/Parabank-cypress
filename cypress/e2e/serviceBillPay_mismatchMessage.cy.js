require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC20').userName
 
        cy.get('a:contains(Register)').click();

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC20').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC20').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC20').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC20').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC20').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC20').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC20').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC20').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC20').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC20').password, { log: false })

        cy.get('input[value="Register"]').click();
        

    })
       

    it('TC20: checking message when "Account" and "Verify Account" fields have different number values', () => {

        cy.contains('a', 'Bill Pay').click()


        cy.get('input[name="payee.name"]').type(Cypress.env('TC20').payeeName)
        cy.get('input[name="payee.address.street"]').type(Cypress.env('TC20').street)
        cy.get('input[name="payee.address.city"]').type(Cypress.env('TC20').city)
        cy.get('input[name="payee.address.state"]').type(Cypress.env('TC20').state)
        cy.get('input[name="payee.address.zipCode"]').type(Cypress.env('TC20').zipCode)
        cy.get('input[name="payee.phoneNumber"]').type(Cypress.env('TC20').phoneNumber)
        cy.get('input[name="payee.accountNumber"]').type(Cypress.env('TC20').account)
        cy.get('input[name="verifyAccount"]').type(Cypress.env('TC20').verifyAccount)
        cy.get('input[name="amount"]').type(Cypress.env('TC20').amount)


        cy.get('select.input').select(0)

        cy.get('input[value="Send Payment"]').click()
        
        cy.contains('span', 'The account numbers do not match.').should('be.visible')
        
        

    })


})

