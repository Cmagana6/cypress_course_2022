/// <reference types="Cypress" /> 

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require("cypress-plugin-tab")

describe("Campos de tipo fecha", () =>{

    it("Fecha uno", () =>{
        let tiempo =1000
        cy.visit("https://demo.anhtester.com/bootstrap-date-picker-demo.html")
        cy.title().should('eq',"Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(tiempo)

        cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type("30/06/1997").then(()=>{
            cy.get("#sandbox-container1 > .input-group > .form-control").type('{esc}')
        })
        

    })

    it.only("Rango de fechas", () =>{
        let tiempo =1000
        cy.visit("https://demo.anhtester.com/bootstrap-date-picker-demo.html")
        cy.title().should('eq',"Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(tiempo)

        //LLenando el rango de fechas con tab
        cy.get("[placeholder='Start date']").should("be.visible").type("30/06/1997 {esc}")
        .tab().type("30/06/2022 {esc}")
        
    })

    
})//Cierre del describe