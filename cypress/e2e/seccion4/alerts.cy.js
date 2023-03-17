/// <reference types="Cypress" /> 

describe("Alertas en cypress", () =>{

    let time = 1000

    it("Alerta uno", () =>{
        cy.visit("https://demoqa.com/alerts") 
        cy.title().should('eq','ToolsQA')
        cy.wait(time)

        cy.get('#alertButton').should('be.visible').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal("You clicked a button")
            return true
        })
    })

    it("Confirm an alert",()=>{
        cy.visit("https://demoqa.com/alerts") 
        cy.title().should('eq','ToolsQA')
        cy.wait(time)

        cy.get('#confirmButton').should('be.visible').click()

        cy.on('window:confirm',(str) =>{
            expect(str).equal('Do you confirm action?')
        })
    })

    it("Cancel an alert",()=>{
        cy.visit("https://demoqa.com/alerts") 
        cy.title().should('eq','ToolsQA')
        cy.wait(time)

        cy.get('#confirmButton').should('be.visible').click()

        cy.on('window:confirm',(str) =>{
            expect(str).equal('Do you confirm action?')
            return false
        })
    })

    it.only("Prompt Alert",()=>{
        cy.visit("https://demoqa.com/alerts") 
        cy.title().should('eq','ToolsQA')
        cy.wait(time)

        cy.window().then(function($win){
            cy.stub($win, 'prompt').returns('Carlos')
            cy.get('#promtButton').should('be.visible').click()
        })
    })
    
})//Cierre del describe