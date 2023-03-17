/// <reference types = 'Cypress'>
require ('cypress-xpath')
require('cypress-plugin-tab')
describe('Suite snippet template',()=>{
    it('First test with snippet template',()=>{
        let time = 1500
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(time)
    })
})