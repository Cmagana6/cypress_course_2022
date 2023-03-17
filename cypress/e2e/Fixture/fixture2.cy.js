/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Demo uno de Fixtures",()=>{
    //Cargando varios usuarios desde un mismo json
    it("Fixture con MOCK_DATA",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(2000)
        cy.fixture("Excel_JSON").then(testdata =>{
            testdata.forEach(item => {
               const dataEmail = item.email
               const dataName = item.name
               const dataAddrs1 = item.address1
               const dataAddrs2 = item.address2               
               cy.get('#userName').should('be.visible').clear().type(dataName)
               cy.wait(2000)
               cy.get('#userEmail').should('be.visible').clear().type(dataEmail)
               cy.wait(2000)
               cy.get('#currentAddress').should('be.visible').clear().type(dataAddrs1)
               cy.wait(2000)
               cy.get('#permanentAddress').should('be.visible').clear().type(dataAddrs2)
               cy.get("#submit").should('be.visible').click({force:true})
            });
        })

    })
})