class Proyecto1_PO{

    visitHome(){
        let time = 1000
        before(()=>{
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.title().should('eq','Practice Page')
            cy.wait(time)
        })
    }

    clickRadios(){
        cy.log("cliking radio1")
        cy.get("#radio-btn-example > fieldset > label:nth-child(2) > input").should('be.visible').click({force:true})
        cy.screenshot("Click on first radio button")
        cy.log("cliking radio2")
        cy.get("#radio-btn-example > fieldset > label:nth-child(3) > input").should('be.visible').click({force:true})
        cy.log("cliking radio3")
        cy.get("#radio-btn-example > fieldset > label:nth-child(4) > input").should('be.visible').click({force:true})
    }
}//end of class

export default Proyecto1_PO;