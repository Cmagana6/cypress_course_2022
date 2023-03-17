/// <reference types="Cypress" /> 

describe("Ejemplo de Type pageUp, pageDown", () =>{

    it("Type pageUp", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.title().should('eq','Practice Page')
        cy.wait(1000)

        cy.get("#autocomplete").type('hola {pageup}')
        cy.wait(2000)
        cy.get("#autocomplete").type('{pagedown}')

    })

    //Only sirve para definir cuales tests queremos correr
    it.only("Ultimo", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.title().should('eq','Practice Page')
        cy.wait(1000)

        cy.get("#autocomplete").type('{pageup}')
        cy.wait(2000)
        cy.get("#displayed-text").type('{pagedown}')
        cy.wait(2000)
    })
    
})//Cierre del describe