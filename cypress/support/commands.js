

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

