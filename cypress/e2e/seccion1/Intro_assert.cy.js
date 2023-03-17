/// <reference types="Cypress" /> 

describe("  ", () =>{

    it("Demo de los Asserts", () =>{
        cy.visit("https://demoqa.com/automation-practice-form") 
        //This is an assert to validate the title of the page
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //This Assert validates that an element is visible
        cy.get("#firstName").should("be.visible").type("Carlos")
        //Verificamos si el campo last name es visible
        cy.get("#lastName").should("be.visible").type("Magana")
        //Verificamos si el campo esta visible y habilitado luego escribimos en el
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("carlos.magana10@gmail.com")

    })

})//Cierre del describe