require('cypress-xpath');


describe('Custom Care Page service', () => {

    beforeEach('access the bank website', () =>{
        cy.visit(Cypress.env('BASE_URL'))
        cy.title().should('be.equal', 'ParaBank | Welcome | Online Banking')

    })

    
    it('TC3: check inputs that are required', () =>{

        cy.get('a:contains(contact)').click();


        cy.get('h1.title').should('contain.text', 'Customer Care')

        cy.contains('p', 'Email support is available by filling out the following form.').should('be.visible')


        cy.get('input[value="Send to Customer Care"]').click()


        cy.contains('span', 'Name is required.').should('be.visible')
        cy.contains('span', 'Email is required.').should('be.visible')
        cy.contains('span', 'Phone is required.').should('be.visible')
        cy.contains('span', 'Message is required.').should('be.visible')

    })
    
    it('TC4: send message with success in Custon Care page', () =>{

        cy.get('a:contains(Contact Us)').click();


        cy.get('#name').type(Cypress.env('TC4').name)
        cy.get('#email').type(Cypress.env('TC4').email)
        cy.get('#phone').type(Cypress.env('TC4').phone)
        cy.get('#message').type(Cypress.env('TC4').message)

        
        cy.get('input[value="Send to Customer Care"]').click()


        const greet = "Thank you " + Cypress.env('TC4').name

        cy.contains('p', greet).should('be.visible')


        cy.contains('p', 'A Customer Care Representative will be contacting you.').should('be.visible')

    })

})