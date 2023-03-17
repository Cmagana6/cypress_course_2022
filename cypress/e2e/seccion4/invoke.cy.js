/// <reference types="Cypress" /> 

import 'cypress-file-upload'

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Manejo de invoke", () =>{

let time = 1000

    it("Invoke text", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.wait(time)
        cy.get('.page-body > :nth-child(5)').invoke('text').as('info')
        cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.')
        cy.xpath('//label[contains(text(),"First name:")]').invoke('text').as('title_name')
        cy.get('@title_name').should('contain','First name:').then(()=>{
            cy.get('#firstname').type("Carlos")
        })   

    })

    it("Invoke estilos", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.wait(time)

        cy.get("[for='firstname']").invoke('attr','style','color:Blue; font-size:50px')
    })

    it("Invoke ocultar y mostrar", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.wait(time)
        cy.get("[for='firstname']").invoke('hide')
        cy.get("#firstname").invoke('hide')
        cy.wait(time)
        cy.get("[for='firstname']").invoke('show','5')
        cy.get("#firstname").invoke('show','5')
    })

    it("reto de invoke", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.get("[for='surname']").invoke("hide")
        cy.get("#surname").invoke("hide")
        cy.wait(time)

        cy.get("#firstname").should("be.visible").type("Carlos").then(()=>{
            cy.wait(time)
            cy.get("[for='surname']").invoke("show","3s")
            cy.get("#surname").invoke("show","4s")
            cy.get("#surname").type("Magaña")
        })

    })

    it("Invoke src", () =>{
        cy.visit("https://www.globalsqa.com/demo-site/") 
        cy.title().should('eq','Testing Demo Site | Practice Website For Automation - Global SQA')
        cy.wait(time)

        cy.get('#firstname').invoke('attr','src').contains("https://globalsqa.com/wp-content/uploads/2015/10/logo1.png")
    })
 
    it.only("Invoke target blank", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.title().should('eq','Practice Page')
        cy.wait(time)

        cy.get('#opentab').invoke('removeAttr','target').click({force:true})

        cy.url().should('eq','https://www.rahulshettyacademy.com/')
    })
 
    

})//Cierre del describe