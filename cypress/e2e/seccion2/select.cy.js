/// <reference types="Cypress" /> 

require('cypress-xpath')

describe("Trabajando con selects", () =>{

    it("Selects", () =>{
        cy.visit("https://demo.anhtester.com/basic-select-dropdown-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)
        //Seleccionando un valor de select y validando que tenga el valor correcto
        cy.get("#select-demo").should('be.visible').select("Friday").should('have.value','Friday')
        cy.wait(1000)
        cy.get("#select-demo").should("be.visible").select("Saturday").should('have.value','Saturday')

    })


    it("Segundo test con autocomplete", () =>{
        cy.visit("https://google.com.sv")
        cy.title().should('eq','Google')
        cy.wait(1000)
        
        //Select autocomplete con la tecla enter
        cy.xpath("//input[@name='q']").should('be.visible').type('Ferrari {enter}')
        cy.wait(1000)
        cy.xpath("//a[contains(text(),'Imágenes')]").should('be.visible').click()
    
    })
    it.only("Tercer test Selects", () =>{
        cy.visit("https://demo.anhtester.com/basic-select-dropdown-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)
        
        //Seleccionando opciones de un multiselect luego con la funcion then podemos utilizar una
        //funcion de flecha una vez lo haga debe hacer lo siguiente
        cy.get("#multi-select").should('be.visible').select(["California","Ohio","Washington"])
        .then(()=>{
            cy.wait(1000)
            cy.xpath("//button[@id='printMe']").should('be.visible').click()
        })
    })


    
})//Cierre del describe