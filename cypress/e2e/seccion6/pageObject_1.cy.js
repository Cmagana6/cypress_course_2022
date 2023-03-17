/// <reference types = 'Cypress'>
require ('cypress-xpath')
require('cypress-plugin-tab')
import Proyecto1_PO from '../../support/pageObjects/proyecto1_PO/proyectoUno_PO.cy.js'
describe('Page Object Model',()=>{
    const pageObject1 = new Proyecto1_PO()
    
    pageObject1.visitHome()
    it('Click Radio buttons with POM',()=>{
        pageObject1.clickRadios()
    })
})