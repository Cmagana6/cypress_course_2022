/// <reference types="Cypress" /> 

require('cypress-xpath')

describe("Manejo de los alias", () =>{

    let time = 1000
    it("Alias 1", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq','Input Validation')
        cy.wait(time)
        
        cy.get('#firstname').should('be.visible').as('name')

        cy.get('@name').type('Carlos')

        cy.get('#surname').should('be.visible').as('lastName')

        cy.get('@lastName').type('Magana Alvarado')

        cy.get('#age').should('be.visible').as('age')

        cy.get('#country').should('be.visible').as('country')

        cy.get('#notes').should('be.visible').as('notes')

        cy.get('@age').type(25)

        cy.get('@country').select('El Salvador').should('have.value','El Salvador')

        cy.get('@notes').type('notess')

        cy.xpath('//input[@type="submit"]').click({force:true})
    })


    
})//Cierre del describe