// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import './commands'
import 'cypress-real-events/support'

Cypress.Commands.add('Visible_Text', (selector, text,time) => { 
    cy.get(selector).should('be.visible').type(text)
    cy.wait(time)
 })


Cypress.Commands.add('Visible_Text_Xpath', (xpath, text,time) => { 
    cy.xpath(xpath).should('be.visible').type(text)
    cy.wait(time)
})

Cypress.Commands.add('Click_force_xpath', (xpath,time) => { 
    cy.xpath(xpath).should('be.visible').click({force:true})
    cy.wait(time)
})

Cypress.Commands.add('Block_ToolsQA_TextBox', (name,email,address1,address2,time) => { 
    cy.get('#userName').should('be.visible').clear().type(name)
    cy.wait(time)
    cy.get('#userEmail').should('be.visible').clear().type(email)
    cy.wait(time)
    cy.get('#currentAddress').should('be.visible').clear().type(address1)
    cy.wait(time)
    cy.get('#permanentAddress').should('be.visible').clear().type(address2)
    cy.wait(time)
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(time)
})

Cypress.Commands.add('Validate_field_text',(selector,expectedText,fieldName,time)=>{
    cy.get(selector).should('be.visible').then((val)=>{
        let data = val.text()
        let message = expectedText
        cy.log(data)
        expect(data).to.equal(message)
        if(data != message){
            cy.log("The "+fieldName+" is invalid")
            cy.wait(time)
        }
    })
})