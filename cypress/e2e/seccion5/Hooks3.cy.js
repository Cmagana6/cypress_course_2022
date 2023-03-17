/// <reference types = 'Cypress'>
require ('cypress-xpath')
require('cypress-plugin-tab')
describe('suite name',()=>{

    let time = 1500
    before(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(time)

        cy.get('[name=username]').should('be.visible').clear().type('Admin')
        cy.get('[name=password]').should('be.visible').clear().type('admin123')

        cy.get('button').should('be.visible').click({force:true})
    })
    it('test uno',()=>{
        cy.get(':nth-child(2) > .oxd-main-menu-item').click({force:true})
        cy.wait(time)
    })

    
    it('test dos',()=>{
        cy.get(':nth-child(3) > .oxd-main-menu-item').click({force:true})
        cy.wait(time)
    })

    
    it('test tres',()=>{
        cy.get(':nth-child(4) > .oxd-main-menu-item').click({force:true})
        cy.wait(time)
    })


})