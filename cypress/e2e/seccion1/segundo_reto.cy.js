/// <reference types="Cypress" /> 

require('cypress-xpath')
require('cypress-plugin-tab') 

describe("Segundo Reto", () =>{

    it("Probando la aplicacion", () =>{
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1500)
        
        //Buscando un elemento
        cy.xpath("//input[@id='searchbox']").should('be.visible').type("ACE")
        //Haciendo una pausa
        cy.wait(1000)
        cy.get("#searchsubmit").should('be.visible').click()
        cy.wait(1000)
        //Agregando una nueva
        cy.xpath("//a[@id='add']").should('be.visible').click()
        //LLenando los datos del formulario
        cy.xpath("//input[@id='name']").should('be.visible').type('cypress')
        .tab().type('2022-09-16').tab().type('2022-09-20')
        //Utilizando el select y validando su valor
        cy.get("#company").should('be.visible').select('Nokia').should('have.value','16')
        cy.wait(1000)
        //Creando la nueva computadora
        cy.get("input[value='Create this computer']").should('be.visible').click()

        cy.wait(1000)
        //Buscando la computadora recien creada
        cy.xpath("//input[@id='searchbox']").should('be.visible').type("cypress")
        cy.get("#searchsubmit").should('be.visible').click()

    })


    
})//Cierre del describe