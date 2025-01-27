require('cypress-xpath');


describe('Testing services of the Bank', () => {

    before('Register new Acount', () =>{

        cy.visit(Cypress.env('BASE_URL'))

        const userName = Cypress.env('TC23').userName
 
        cy.get('a:contains(Register)').click()

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC23').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC23').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC23').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC23').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC23').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC23').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC23').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC23').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC23').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC23').password, { log: false })

        cy.get('input[value="Register"]').click();
        

    })

    
    it('TC23: Bill payment service', () => {

        cy.contains('a', 'Bill Pay').click()
                
        cy.get('input[name="payee.name"]').type(Cypress.env('TC23').payeeName)
        cy.get('input[name="payee.address.street"]').type(Cypress.env('TC23').street)
        cy.get('input[name="payee.address.city"]').type(Cypress.env('TC23').city)
        cy.get('input[name="payee.address.state"]').type(Cypress.env('TC23').state)
        cy.get('input[name="payee.address.zipCode"]').type(Cypress.env('TC23').zipCode)
        cy.get('input[name="payee.phoneNumber"]').type(Cypress.env('TC23').phoneNumber)
        cy.get('input[name="payee.accountNumber"]').type(Cypress.env('TC23').account)
        cy.get('input[name="verifyAccount"]').type(Cypress.env('TC23').verifyAccount)
        cy.get('input[name="amount"]').type(Cypress.env('TC23').amount)
        

        cy.get('select.input').select(0).then( element => {

            const account = element[0].innerText
            cy.task('setAccountNumber', account)
        })

        cy.get('input[value="Send Payment"]').click()

        cy.task('getAccountNumber').then((accountNumber) => {

            const name = Cypress.env('TC23').payeeName
            const amount = '$' +Cypress.env('TC23').amount
        
            cy.get('h1.title').should('contain.text', 'Bill Payment Complete')
    
            cy.contains('span', name).should('be.visible')
            cy.contains('span', amount).should('be.visible')
            cy.contains('span', accountNumber).should('be.visible')
    
        })


    })

})


