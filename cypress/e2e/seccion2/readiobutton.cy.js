/// <reference types="Cypress" /> 

require('cypress-xpath')
describe("Interactuando con Radio Buttons", () =>{

    it("Radio Buttons", () =>{
        cy.visit("https://demo.anhtester.com/basic-radiobutton-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Radio buttons demo for Automation')
        cy.wait(1000)
        //Seleccionando un radio button y luego verificando que este seleccionado
        cy.xpath("(//input[@value='Female'])[1]").check().should('be.checked')
        cy.wait(1000)
        cy.xpath("(//input[@value='Male'])[1]").check().should('be.checked')

    })


    
})//Cierre del describe