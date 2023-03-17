/// <reference types="Cypress" />
require('cypress-plugin-tab')
describe("Demo uno de Fixtures", () => {
    //Forma tradicional por medio de una promesa
    /* before(function(){
         cy.fixture('data1').then(function(data){
             globalThis.data = data
         })
     })*/
    //Por medio de alias
    before(function () {
        cy.fixture("data1.json").as("data_json")
    })
    it("Primer Test con Fixtures", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(2000)
        cy.get('#userName').should('be.visible').type(data.name)
        cy.wait(2000)
        cy.get('#userEmail').should('be.visible').type(data.email)
        cy.wait(2000)
        cy.get('#currentAddress').should('be.visible').type(data.address1)
        cy.wait(2000)
        cy.get('#permanentAddress').should('be.visible').type(data.address2)
        cy.get("#submit").should('be.visible').click({ force: true })
    })
    //Cargando el alias y luego ejecutando la promesa
    it.only("Test fixtures con alias", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(2000)
        cy.get("@data_json").then((jsondata) => {
            jsondata.forEach(jsonelement => {
                cy.get('#userName').should('be.visible').clear().type(jsonelement.name)
                cy.wait(2000)
                cy.get('#userEmail').should('be.visible').clear().type(jsonelement.email)
                cy.wait(2000)
                cy.get('#currentAddress').should('be.visible').clear().type(jsonelement.address1)
                cy.wait(2000)
                cy.get('#permanentAddress').should('be.visible').clear().type(jsonelement.address2)
                cy.get("#submit").should('be.visible').click({ force: true })
            });
        })
    })
})