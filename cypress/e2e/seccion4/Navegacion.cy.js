/// <reference types = 'Cypress'>
require ('cypress-xpath')
require('cypress-plugin-tab')
describe('Navegacion entre las paginas',()=>{
    let time = 1500

    it('Back, forward',()=>{ 
               cy.visit('https://demoqa.com')
        cy.title().should('eq','ToolsQA')
        cy.wait(time)

        cy.get('.category-cards > :nth-child(1)').should('be.visible').click({force:true})
        cy.wait(time)
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(time)

        cy.go('back')
        cy.go('back')

        cy.go('forward')
        cy.go('forward')
    })

    it.only('Refresh',()=>{
        cy.visit('https://demoqa.com')
        cy.title().should('eq','ToolsQA')
        cy.wait(time)

        cy.get('.category-cards > :nth-child(1)').should('be.visible').click({force:true})
        cy.wait(time)
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(time)

        cy.get('#userName').should('be.visible').type('Carlos')
        cy.wait(time)
        cy.get('#userEmail').should('be.visible').type('cmagana@gmail.com')
        cy.wait(time)

        cy.reload()

        cy.wait(time)

        cy.go('back')

    })
})