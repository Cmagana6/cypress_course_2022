/// <reference types="Cypress" /> 

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe("Manejo de tablas", () =>{


    it("Elementos de una tabla", () =>{
        let time =1000
        cy.visit("https://www.techlistic.com/p/demo-selenium-practice.html") 
        cy.wait(time)

        cy.xpath('//*[@id="customers"]/tbody/tr[1]').children('th').should('contain','Company')

    })

    it("Seleccionar por medio de EQ",()=>{
        let time =1000
        cy.visit("https://www.techlistic.com/p/demo-selenium-practice.html") 
        cy.wait(time)

        cy.xpath("//th[@style='border: 1px solid rgb(221, 221, 221); box-sizing: inherit; padding: 8px; text-align: left;']")
        .eq(0).should("contain","Company")
    })
    
    it("Seleccionar por medio de filter",()=>{
        let time =1000
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.wait(time)

        let baseUrl = "https://rahulshettyacademy.com/AutomationPractice/"

        cy.xp(".btn.btn-primary").filter("body > header > div > button:nth-child(2)").should("contain","Practice")
        .click()

        cy.wait(time)

        if(cy.url().should("eq",baseUrl)){
            cy.log("The url is the same")
        }else{
            cy.log("The url is different")
        }
        
    })
    
    it("Seleccionar por medio de find",()=>{
        let time =1000
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.wait(time)

        cy.xpath("//header/div[1]").find(".btn.btn-primary").should("contain","Practice").eq(1).click()
        
    })

    it("Seleccionar por medio de first",()=>{
        let time =1000
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.wait(time)

        //Para el ultimo elemento del grupo
        cy.xpath("//header/div[1]").find(".btn.btn-primary").should("contain","Home").last().click()
        //Para el primer elemento del grupo
        cy.xpath("//header/div[1]").find(".btn.btn-primary").should("contain","Home").first().click()
    })

    it("Seleccionar todos los elementos siguientes",()=>{
        let time =1000
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.wait(time)

        cy.get(".btn.btn-primary").should("contain","Home")
        cy.wait(time)
        cy.get(".btn.btn-primary").should("contain","Home").nextAll().should("have.length",3)

    })

    it("Seleccionar elemento padre",()=>{
        let time =1000
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.wait(time)

        cy.get(".btn.btn-primary").should("contain","Home").parent()
    })

    it.only("Reto de las tablas ", ()=>{
        let time = 1500
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.title().should('eq','Practice Page')
        cy.wait(time)

        cy.get("[type='checkbox']").check({force:true})
        let datos = []

        cy.get('[name=courses]').find('tbody').children('tr').each(($el,$index,$list)=>{
            if($el.find('td').eq(2).text() == "25"){
                cy.log("Author: ",$el.find('td').eq(0).text())
                cy.log("Course: ",$el.find('td').eq(1).text())
            }
        })
    })

})//Cierre del describe