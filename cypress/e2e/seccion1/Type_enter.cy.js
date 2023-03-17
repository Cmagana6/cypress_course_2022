/// <reference types="Cypress" /> 

describe("Funciones para Type", () =>{

    it("Type ENTER ", () =>{
        cy.visit("https://www.google.com/")
        cy.title().should('eq',"Google")
        cy.wait(1500)

        cy.get("[name='q']").type("Cypress io {enter}")
        //para dar enter entre llaves mandamos enter con la cadena

        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click()

    })

})//Cierre del describe