describe('Login', () => {

    beforeEach('create a previous account', () =>{
        cy.visit(Cypress.env('BASE_URL'))
        cy.title().should('be.equal', 'ParaBank | Welcome | Online Banking')

        const userName = Cypress.env('TC10').userName
 
        cy.get('a:contains(Register)').click()
        
        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC10').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC10').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC10').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC10').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC10').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC10').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC10').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC10').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC10').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC10').password, { log: false })


        cy.get('input[value="Register"]').click();

        cy.intercept('POST', '*/parabank/register.htm', (req) => {
            req.reply({ status:200})
        }).then( () => {


            cy.contains('a', 'Log Out').click()
        })


    })


    it('TC10: login with success', () =>{


        cy.get('input[name="username"]').type(Cypress.env('TC10').userName);
        cy.get('input[name="password"]').type(Cypress.env('TC10').password, { log: false })


        cy.get('input[value="Log In"]').click();
        

        const greeting = 'Welcome ' +  Cypress.env('TC10').name 
        cy.get('p.smallText').should('contain.text', greeting)

        cy.contains('h1.title', 'Accounts Overview').should('be.visible')
        cy.contains('h2', 'Account Services').should('be.visible')
        
    
    })

})

