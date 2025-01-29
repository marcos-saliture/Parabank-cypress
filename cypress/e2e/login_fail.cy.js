

describe('Login', () => {

    beforeEach('access teh bank website', () =>{
        cy.visit(Cypress.env('BASE_URL'))
        cy.title().should('be.equal', 'ParaBank | Welcome | Online Banking')

    })


    it('TC8: login with no values for username and password', () => {

        cy.get('input[value="Log In"]').click();

        cy.get('.error').should('have.text', 'Please enter a username and password.')

    })


    it('TC9: login with fail', () => {

        cy.get('input[name="username"]').type(Cypress.env('TC9').userName);
        cy.get('input[name="password"]').type(Cypress.env('TC9').password, { log: false });

        cy.get('input[value="Log In"]').click();
        
        cy.contains('.error', 'The username and password could not be verified.').should('be.visible')

    })


})

