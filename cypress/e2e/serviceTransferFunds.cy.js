require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Account', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC33').userName
 
        cy.get('a:contains(Register)').click()

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC33').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC33').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC33').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC33').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC33').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC33').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC33').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC33').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC33').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC33').password, { log: false })

        cy.get('input[value="Register"]').click();
        

    })


    it('TC33:Transfer funds Service', () => {


        cy.contains('a', 'Transfer Funds').click()

        
        cy.get('#amount').type(Cypress.env('TC33').amount)

        cy.get('#fromAccountId').select(0)
        cy.get('#toAccountId').select(0).then(element => {

            const amount = '$' +Cypress.env('TC33').amount
            const account = element[0].innerText

            cy.get('#transferForm > div:nth-child(4) > input').click();

            cy.get('#showResult > h1').should('contain.text', 'Transfer Complete!')

            cy.get('#amountResult').contains(amount)

            cy.get('#fromAccountIdResult').contains(account)
            cy.get('#toAccountIdResult').contains(account)
    
        })        

    })    
  

})

