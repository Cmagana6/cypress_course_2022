/// <reference types="Cypress" />

require('cypress-plugin-tab') 

describe("Ejemplo funcion tab ", () =>{

    it("Type con Tab ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq","ToolsQA")
        cy.wait(1000)
        
        cy.get("#firstName").type("Carlos").tab().type("Magana")
        .tab().type("carlos.magana10@gmail.com")
    })
    
})//Cierre del describe