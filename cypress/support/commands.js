

Cypress.Commands.add('transferingFunds', (amount) => {
    
    cy.get('a:contains(Transfer Funds)').click()
    cy.get('#amount').type(amount)
    cy.get('#fromAccountId').select(0)
    cy.get('#toAccountId').select(0).then( element => {

        const account = element[0].innerText
        cy.task('setAccountNumber', account)
    })

    cy.get('input[value="Transfer"]').click()


    cy.contains('a', 'Accounts Overview').click()
     

    cy.task('getAccountNumber').then( (accountNumber) => {
        cy.contains('a', accountNumber).click()
    })

    
    cy.get('a:contains(Funds Transfer Sent)').click().then( () => {
        cy.get('#rightPanel > table > tbody > tr:nth-child(1) > td:nth-child(2)').then(element => {
            const transferId = element[0].innerText
            cy.task('setId', transferId)
        })
        cy.get('#rightPanel > table > tbody > tr:nth-child(2) > td:nth-child(2)').then(element => {
            const dateTransfer = element[0].innerText
            cy.task('setDate', dateTransfer)
        })
    })

})


Cypress.Commands.add('createAccount', (testCase) => {


    const firstName = (testCase == 'TC7') ? Cypress.env('TC7').firstName : Cypress.env('TC10').firstName
    const lastName = (testCase == 'TC7') ? Cypress.env('TC7').lastName : Cypress.env('TC10').lastName
    const street = (testCase == 'TC7') ? Cypress.env('TC7').street : Cypress.env('TC10').street
    const city = (testCase == 'TC7') ? Cypress.env('TC7').city : Cypress.env('TC10').city
    const state = (testCase == 'TC7') ? Cypress.env('TC7').state : Cypress.env('TC10').state
    const zipCode = (testCase == 'TC7') ? Cypress.env('TC7').zipCode : Cypress.env('TC10').zipCode
    const phoneNumber = (testCase == 'TC7') ? Cypress.env('TC7').phoneNumber : Cypress.env('TC10').phoneNumber
    const ssn = (testCase == 'TC7') ? Cypress.env('TC7').SSN : Cypress.env('TC10').SSN
    const userName = (testCase == 'TC7') ? Cypress.env('TC7').userName : Cypress.env('TC10').userName
    const password = (testCase == 'TC7') ? Cypress.env('TC7').password : Cypress.env('TC10').password
    const repeatedPassword = (testCase == 'TC7') ? Cypress.env('TC7').password : Cypress.env('TC10').password
 
    cy.get('a:contains(Register)').click()

    cy.get('input[name="customer.firstName"]').type(firstName)
    cy.get('input[name="customer.lastName"]').type(lastName)
    cy.get('input[name="customer.address.street"]').type(street)
    cy.get('input[name="customer.address.city"]').type(city)
    cy.get('input[name="customer.address.state"]').type(state)
    cy.get('input[name="customer.address.zipCode"]').type(zipCode)
    cy.get('input[name="customer.phoneNumber"]').type(phoneNumber)
    cy.get('input[name="customer.ssn"]').type(ssn)
    cy.get('input[name="customer.username"]').type(userName)
    cy.get('input[name="customer.password"]').type(password, { log: false })
    cy.get('input[name="repeatedPassword"]').type(repeatedPassword, { log: false })

    cy.get('input[value="Register"]').click();

    cy.intercept('GET', '*/parabank/register.htm', (req) => {
        req.reply({ status:200})
    }).as('successAccount')


    cy.contains('a', 'Log Out').click()

})