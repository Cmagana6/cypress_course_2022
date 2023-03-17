/// <reference types="Cypress" /> 

require('cypress-plugin-tab') 

describe("Primer Reto de Cypress", () =>{

    it("Llenado de formulario y edicion de registro", () =>{
        cy.visit("https://demoqa.com/webtables") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        //Seleccionando SearchBox
        cy.get("#searchBox").should('be.visible').type("Cierra")
        cy.wait(1000)
        cy.get("#searchBox").should('be.visible').clear()
        //Agregando un valor a la tabla
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000)
        //LLenando los campos de name lastname y email
        cy.get("#firstName").should("be.visible").type("Carlos").tab()
        .type("Magana").tab().type("carlos.magana10@gmail.com").tab().type("25")
        .tab().type("30000").tab().type("Operaciones")
        //Creando el nuevo registro en la tabla
        cy.get("#submit").should("be.visible").click()
        cy.wait(1000)
        //Buscando el registro recien creado
        cy.get("#searchBox").should('be.visible').type("Carlos")
        cy.wait(1000)
        cy.get("#searchBox").should('be.visible').clear()
        //Editanto un campo
        cy.wait(1000)
        cy.get("#edit-record-2").should("be.visible").click()
        cy.wait(1000)
        cy.get("#age").should("be.visible").clear().type("50")
        cy.wait(1500)
        cy.get("#salary").should("be.visible").clear().type("50000")
        cy.wait(1500)
        cy.get("#submit").should('be.visible').click()

        //Borrando el campo
        cy.wait(2000)
        cy.get("#delete-record-2").should("be.visible").click()

    })
    
})//Cierre del describe