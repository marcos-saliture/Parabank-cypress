require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC28').userName
 
        cy.get('a:contains(Register)').click()

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC28').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC28').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC28').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC28').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC28').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC28').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC28').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC28').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC28').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC28').password, { log: false })


        cy.get('input[value="Register"]').click();
        

    })


    it('TC28: Open new "Checking" account', () =>{ // PASSOU

        cy.contains('a', 'Open New Account').click()

        cy.get('#type').select(0);

        cy.get('#fromAccountId').select(0);

        
        cy.get('input[value="Open New Account"]').click()

        cy.get('h1.title').should('contain.text', 'Account Opened!')
  
        cy.get('#newAccountId').click();

        cy.url().then(url => {

            const account = url.split('=')[1];

            cy.get('h1.title').should('contain.text', 'Account Details')

            cy.get('#accountId').should('contain.text', account)
            cy.get('#accountType').should('contain.text', "CHECKING")
        })
    
    })
  

})

