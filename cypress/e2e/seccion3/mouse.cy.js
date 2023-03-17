/// <reference types="Cypress" /> 

//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload'
import 'cypress-real-events'
require("@4tw/cypress-drag-drop")
require("cypress-xpath")

describe("Cypress eventos Mouse", () => {

    it("Drag and Drop", () => {
        let tiempo = 1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should('eq', 'The Internet')
        cy.wait(tiempo)

        //Arrastrando de un elemento a otro se puede mover a diferentes coordenadas etc
        cy.get("#column-a").drag("#column-b", { force: true })
    })

    it("Drag and Drop demo 2", () => {
        let tiempo = 1500
        cy.visit("https://demo.anhtester.com/drag-and-drop-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Drag and Drop Demo')
        cy.wait(tiempo)

        //Arrastrando de un elemento a otro se puede mover a diferentes coordenadas etc
        cy.xpath("//span[contains(text(),'Draggable 1')]").drag("#mydropzone", { force: true })
        cy.wait(tiempo)
        cy.xpath("//span[contains(text(),'Draggable 2')]").drag("#mydropzone", { force: true })
        cy.wait(tiempo)
        cy.xpath("//span[contains(text(),'Draggable 3')]").drag("#mydropzone", { force: true })
        cy.wait(tiempo)
        cy.xpath("//span[contains(text(),'Draggable 4')]").drag("#mydropzone", { force: true })
    })

    it("Mouse hover", () => {
        let tiempo = 1500
        cy.visit("https://the-internet.herokuapp.com/hovers")
        cy.title().should('eq', 'The Internet')
        cy.wait(tiempo)

        //Haciendo Hover sobre un elemento
        cy.get("img[alt]").eq(1).realHover('mouse')
        cy.wait(tiempo)
        cy.xpath("//h5[contains(text(),'name: user1')]").should("be.visible")
        cy.wait(tiempo)
        cy.get("img[alt]").eq(2).realHover('mouse')
        cy.wait(tiempo)
        cy.xpath("//h5[contains(text(),'name: user2')]").should("be.visible")
        cy.wait(tiempo)
        //Removiendo un atributo de una etiqueta en ese caso para que no abra otra pestaña
        //cy.contains("Selenium Video Tutorials").invoke("removeAttr","target").click()
    })

    it.only("Sliders",()=>{
        let tiempo=1500
        cy.visit("https://demo.anhtester.com/drag-drop-range-sliders-demo.html")
        cy.title().should('eq','Selenium Easy - Drag and Drop Range Sliders')
        cy.wait(tiempo)

        cy.xpath("(//input[@type='range'])[1]").invoke("attr","value",0)
        cy.wait(tiempo)
        cy.xpath("(//input[@type='range'])[2]").invoke("attr","value",10)
        cy.wait(tiempo)
        cy.xpath("(//input[@type='range'])[3]").invoke("attr","value",20)
        cy.wait(tiempo)
        cy.xpath("(//input[@type='range'])[4]").invoke("attr","value",30)
        cy.wait(tiempo)
        cy.xpath("(//input[@type='range'])[5]").invoke("attr","value",40)
        cy.wait(tiempo)
        cy.xpath("(//input[@type='range'])[6]").invoke("attr","value",50)
    })

})//Cierre del describe