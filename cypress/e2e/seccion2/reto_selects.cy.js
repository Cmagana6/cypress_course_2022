/// <reference types="Cypress" /> 

require('cypress-xpath')


describe("Reto de la funcion Select", () =>{

    it("Agregando un par de elementos luego todos y al final remover todos", () =>{
        cy.visit("https://demo.anhtester.com/jquery-dual-list-box-demo.html")
        cy.title().should('eq','Selenium Easy - JQuery Dual List Box Demo')
        cy.wait(1000)
        
        cy.xpath("//select[@class='form-control pickListSelect pickData']").should("be.visible")
        .select(["Isis","Sophia","Alice"]).then(()=>{
            cy.get(".pAdd").click().then(()=>{
                cy.log("Se pudieron agregar los elementos seleccionados")
                cy.wait(1000)
                cy.get(".pAddAll").click().then(()=>{
                    cy.log("Se pudieron agregar todos los elementos")
                    cy.wait(1000)
                    cy.get(".pRemoveAll").click().then(()=>{
                        cy.log("se pudieron remover todos los elementos seleccionados")
                    })
                })
            })
        })
    })

})//Cierre del describe