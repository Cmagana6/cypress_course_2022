/// <reference types = 'Cypress'>
require ('cypress-xpath')
require('cypress-plugin-tab')
describe('Comandos Personalizados',()=>{
    let time = 1500
        before(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(time)
})

Cypress.on('uncaught:exception',(err,runnable)=>{
    return false
})
    it('Demo uno',()=>{
        cy.Visible_Text('#userName','Carlos',time)
        cy.Visible_Text('#userEmail','carlos.magana10@gmail.com',time)
        cy.Visible_Text_Xpath('//textarea[@id="currentAddress"]','Urb Cima III pje 19 casa 164',time)
        cy.Visible_Text_Xpath('//textarea[@id="permanentAddress"]','San Salvador',time)

        cy.Click_force_xpath('//button[@id="submit"]',time)
    })

    //Basically we can create an entire custom block for a form or any component of the webpage
    //and then put different data sets to do different tests like *invalid username* *invalid email* etc
    it('Demo dos',()=>{
        cy.Block_ToolsQA_TextBox('Carlos Roberto Magaña','carlos.magana10@gmail.com','Urb Cima III pje 19 casa 164',
        'San Salvador',time)
    })
})