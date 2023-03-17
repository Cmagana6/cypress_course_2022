/// <reference types = 'Cypress'>
require ('cypress-xpath')
require('cypress-plugin-tab')
describe('Hooks ejemplos',()=>{
    let time = 1500
    before(()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.title().should('eq','Practice Page')
    cy.wait(time)
    })
    it('test uno',()=>{
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.wait(time)
    })

    it('test dos',()=>{
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.wait(time)
    })
})