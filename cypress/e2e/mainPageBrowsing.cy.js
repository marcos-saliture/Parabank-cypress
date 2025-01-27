


describe('Testing some links and icons in main Page', () => {

    beforeEach('access the bank website', () =>{
        cy.visit(Cypress.env('BASE_URL'))
        cy.title().should('be.equal', 'ParaBank | Welcome | Online Banking')

    })


    it('TC12: going to "About Us" section by link in Header Panel', () =>{

        const starttInfo = "ParaBank is a demo site used for demonstration of Parasoft software solutions."

        cy.contains('a', 'About Us').click()

        cy.get('h1.title').should('have.text', 'ParaSoft Demo Website')

        cy.contains('p', starttInfo ).should('be.visible')
    
    })

    it('TC13: going to "About Us" section by the icon ', () =>{


        const starttInfo = "ParaBank is a demo site used for demonstration of Parasoft software solutions."

        cy.contains('a', 'about').click();

        cy.get('h1.title').should('have.text', 'ParaSoft Demo Website')

        cy.contains('p', starttInfo ).should('be.visible')
    
    })


    it('TC14: going to "Services" list by link in Header Panel', () => {

        cy.contains('a', 'Services').click()

        cy.contains('span.heading', 'Available Bookstore SOAP services:').should('be.visible')
        cy.contains('span.heading', 'Bookstore services:').should('be.visible')
        cy.contains('span.heading', 'Available ParaBank SOAP services:').should('be.visible')
        cy.contains('span.heading', 'ParaBank services:').should('be.visible')
        cy.contains('span.heading', 'Available RESTful services:').should('be.visible')

    })

    it('TC15: going to "Admin Page" by link in Header Panel', () => {

        cy.contains('a', 'Admin Page').click();

        cy.get('h1.title').should('contain.text', 'Administration')

        cy.contains('h3', 'Database').should('be.visible')
        cy.contains('h3', 'JMS Service').should('be.visible')


    })

    
    it('TC16: going to "Site Map" by link in Footer Panel', () =>{

        cy.contains('a', 'Site Map').click()

        cy.contains('a', 'Bill Pay').should('be.visible')
        cy.contains('a', 'Request Loan').should('be.visible')
        cy.contains('a', 'Transfer Funds').should('be.visible')

    })

    it('TC17: returning to "Home page" by Parabank icon', () => {

        cy.get('a[href="news.htm"]').click()

        cy.location('href').should('include', '/news.htm')

        cy.get('img[title="ParaBank"]').click()

        cy.url().should('include', '/index.htm')

    })

    it('TC18: returning to "Home page" icon ', () => {

        cy.get('a[href="news.htm"]').click()

        cy.location('href').should('include', '/news.htm')

        cy.contains('a', 'home').click()

        cy.url().should('include', '/index.htm')

    })
    it('TC19: returning to "Home page" link in Footer Panel', () => {

        cy.get('a[href="news.htm"]').click()

        cy.location('href').should('include', '/news.htm')

        cy.contains('a', 'Home').click()

        cy.url().should('include', '/index.htm')

    })


})
