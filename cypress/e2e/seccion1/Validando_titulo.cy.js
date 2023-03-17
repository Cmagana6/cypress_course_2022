/// <reference types="Cypress"/> 
//Para que autocomplete el file

describe("Seccion 1 Validando el titulo",()=>{
    it("Test validar el titulo ",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')

        cy.log("La funcion title funciono bien")
    })

})//Cierre del describe