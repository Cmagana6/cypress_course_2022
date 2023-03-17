/// <reference types="Cypress" /> 

describe("Referencias a ventanas", () =>{

    //Validar las ventanas 
    it("Windows propiedad: charset", () =>{
        let time= 1000
        cy.visit("https://testsheepnz.github.io/random-number.html") 
        cy.title().should('eq','The Number Game')
        cy.wait(time)

        //Assert para validar el charset de la pagina utf-8 es para acentos o ñ texto en español
        //con document, should le preguntamos si tiene la propiedad y luego el valor de esta
        cy.document().should("have.property","charset").and('eq','UTF-8')


    })

    it.only("Windows validar la url", () =>{
        let time= 1000
        cy.visit("https://testsheepnz.github.io/random-number.html") 
        cy.title().should('eq','The Number Game')
        cy.wait(time)

        //Redimensionar la pantalla
        //cy.viewport(width,height)
        let baseUrl = "https://testsheepnz.github.io/random-number.html"

        //Validando una parte de la url
        cy.url().should("include","/random-number.html")

        cy.url().should("eq",baseUrl)
    })
    
})//Cierre del describe