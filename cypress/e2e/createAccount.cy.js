
describe('Signing up', () => {

    beforeEach('access the bank website', () =>{
        cy.visit(Cypress.env('BASE_URL'))
        cy.title().should('be.equal', 'ParaBank | Welcome | Online Banking')

    })

    
    it('TC1: Check inputs that are required', () => {

        cy.get('a:contains(Register)').click();

        cy.get('input[value="Register"]').click()

        cy.contains('span', 'First name is required.').should('be.visible')
        cy.contains('span', 'Last name is required.').should('be.visible')
        cy.contains('span', 'Address is required.').should('be.visible')
        cy.contains('span', 'City is required.').should('be.visible')
        cy.contains('span', 'State is required.').should('be.visible')
        cy.contains('span', 'Zip Code is required.').should('be.visible')
        cy.contains('span', 'Social Security Number is required.').should('be.visible')
        cy.contains('span', 'Username is required.').should('be.visible')
        cy.contains('span', 'Password is required.').should('be.visible')
        cy.contains('span', 'Password confirmation is required.').should('be.visible')
          

    })


    it('TC2: Sign up customer with success', () => {

        const userName = Cypress.env('TC2').userName
 
        cy.get('a:contains(Register)').click()

        cy.get('input[name="customer.firstName"]').type(Cypress.env('TC2').firstName)
        cy.get('input[name="customer.lastName"]').type(Cypress.env('TC2').lastName)
        cy.get('input[name="customer.address.street"]').type(Cypress.env('TC2').street)
        cy.get('input[name="customer.address.city"]').type(Cypress.env('TC2').city)
        cy.get('input[name="customer.address.state"]').type(Cypress.env('TC2').state)
        cy.get('input[name="customer.address.zipCode"]').type(Cypress.env('TC2').zipCode)
        cy.get('input[name="customer.phoneNumber"]').type(Cypress.env('TC2').phoneNumber)
        cy.get('input[name="customer.ssn"]').type(Cypress.env('TC2').SSN)
        cy.get('input[name="customer.username"]').type(userName)
        cy.get('input[name="customer.password"]').type(Cypress.env('TC2').password, { log: false })
        cy.get('input[name="repeatedPassword"]').type(Cypress.env('TC2').password, { log: false })


        cy.get('input[value="Register"]').click()        


        const successMessage = "Your account was created successfully. You are now logged in."

        const welcomeMessage = "Welcome " + userName;

        cy.get('h1[class="title"]').should('contain.text', welcomeMessage)

        cy.contains('p', successMessage).should('be.visible')

    })

})

