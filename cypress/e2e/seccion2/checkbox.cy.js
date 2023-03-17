/// <reference types="Cypress" /> 

require('cypress-xpath')
describe("Nueva seccion Checkbox", () =>{

    it("check uno", () =>{
        cy.visit("https://demo.anhtester.com/basic-checkbox-demo.html")
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)

        //Como no se especifica a cual darle click le da click a todos los que dan match y de una vez 
        //Validar que esten seleccionados con la funcion be.checked
        cy.get("[type='checkbox']").check().should('be.checked')
        cy.wait(2000)
        //Deseleccionando y viendo que no esten checkeados 
        cy.get("[type='checkbox']").uncheck().should('not.be.checked')
    })

    it.only("Check por seleccion", () =>{
        cy.visit("https://demo.anhtester.com/basic-checkbox-demo.html")
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)
        //Seleccionando checkbox y verificando que este seleccionado
        cy.xpath("//input[@id='isAgeSelected']").check().should('be.checked')
        //Seleccionando un checkbox con su xpath y verificando que este seleccionado
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").check().should('be.checked')
    })

    
    
})//Cierre del describe