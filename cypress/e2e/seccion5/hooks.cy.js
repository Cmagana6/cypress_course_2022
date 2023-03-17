/// <reference types = 'Cypress'>
require ('cypress-xpath')
require('cypress-plugin-tab')
describe('Hooks',()=>{

    before(()=>{
        cy.log("This is the first of all just one time")
    })

    beforeEach(()=>{
        cy.log("This is executed before each test")
    })

    afterEach(()=>{
        cy.log("This is executed after each test")
    })

    after(()=>{
        cy.log("This is the last of all just one time")
    })
    it('test one',()=>{
        cy.log("test one")
    })

    it('test two',()=>{
        cy.log("test two")
    })
})