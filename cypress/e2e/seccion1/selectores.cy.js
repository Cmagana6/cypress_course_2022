/// <reference types="Cypress" /> 

require('cypress-xpath')

describe("Selectores en Cypress  ", () =>{

    it.only("Selector id # ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Obteniendo un elemento por su id
        cy.get("#userName").should('be.visible',{setTimeout:2000}).type("Carlos")

        cy.get("#userEmail").should("be.visible").type("cmagana@gmail.com")

    })

    it("Selector por Atributos ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Obteniendo un elemento por su atributo en este caso placeholder
        cy.get("[placeholder='Full Name']").should('be.visible').type("Carlos")
        //Obteniendo un elemento por su atributo en este caso placeholder
        cy.get("[placeholder='name@example.com']").should("be.visible").type("cmagana@gmail.com")

    })

    it("Selector por Xpath ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Seleccionando un elemento por su xpath
        cy.xpath("//input[@id='userName']").should('be.visible').type("Carlos")
        
        cy.xpath("//textarea[@id='currentAddress']").should("be.visible").type("Demo de la dirección")
    })

    it("Selector por Contains ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Seleccionando un elemento por contains
        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()
        
    })

    //Manera rapida de obtener un selector
    it("Selector por copySelector ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Seleccionando un elemento por copySelector
        cy.xpath('//*[@id="genterWrapper"]/div[2]/div[2]/label').contains("Female").click()
        cy.wait(1000)
    })

})//Cierre del describe