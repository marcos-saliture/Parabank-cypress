require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC29').userName
 
        cy.get('a:contains(Register)').click()

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC29').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC29').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC29').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC29').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC29').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC29').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC29').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC29').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC29').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC29').password, { log: false })

        cy.get('input[value="Register"]').click();
        

    })


    it('TC29: Open new "Savings" account', () =>{

        cy.contains('a', 'Open New Account').click()

        cy.get('#type').select(1);

        cy.get('#fromAccountId').select(0);

        cy.get('input[value="Open New Account"]').click()
        

        cy.get('h1.title').should('contain.text', 'Account Opened!')

        cy.get('#newAccountId').click();

        cy.url().then(url => {
            const account = url.split('=')[1];


            cy.get('h1.title').should('contain.text', 'Account Details')

            cy.get('#accountId').should('contain.text', account)
            cy.get('#accountType').should('contain.text', "SAVINGS")
        })
  
    })


})

