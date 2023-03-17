/// <reference types="Cypress" /> 

require("cypress-xpath")

describe("Bucles for y each", () =>{

    it("For uno", () =>{
        //Sintaxis del for
        for(let i=0;i<=100;i+=10){
        cy.log("Numero: "+i) 
    }
    })

    it("For dos",()=>{
        let t=(prompt("Ingresa el valor de la tabla"))
        for(let i=1;i<=10;i++){
            cy.log(t + "X " + i + "="+(t*i))
        }
    })

    it("Each uno",()=>{
        let time=1000
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.wait(time)

        //Sacando todos los nombres de los vestidos
        cy.get(".product-name").each(($el,$index,$list)=>{
            let vestido= $el.text()
            cy.log(vestido)
        })
    })
    
    it("Each dos",()=>{
        let time=1000
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.wait(time)

        //Sacando todos los nombres de los vestidos
        cy.get(".product-name").each(($el,$index,$list)=>{
            let vestido= $el.text()
            cy.log(vestido)
            if(vestido.includes("Printed Summer Dress")){
                cy.wrap($el).click()
            }
        })
    })
    
    it("Each tres",()=>{
        let time=1000
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.wait(time)

        //comentar un bloque ctrl + }
        for(let i=0;i<4;i++){
            cy.get("#center_column .product-name").eq(i).click({force:true})
            cy.wait(time)
            cy.get("#quantity_wanted").should("be.visible").clear().type("4")
            cy.wait(time)
            cy.get("#group_1").select("M").should("have.value","2")
            cy.wait(time)
            cy.get("button[type='submit'].exclusive").click({force:true})
            cy.wait(time)
            cy.xpath("//span[contains(text(),'Proceed to checkout')]").should("be.visible").click({force:true})
            cy.wait(time)
            cy.get("a.home").should("be.visible").click({force:true})
            cy.wait(time)
        }
    })
    

    it.only("Each cuatro",()=>{
        let time=1000
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.wait(time)

        
        const datos=[]

        cy.get(".product-name").each(($element,$index,$array)=>{
            datos[$index] = $element.text()
            
        }).then(()=>{
            for(let i=0;i<datos.length;i++){
                cy.get("#center_column .product-name").eq(i).click({force:true})
                cy.wait(time)
                cy.get("#quantity_wanted").should("be.visible").clear().type("4")
                cy.wait(time)
                cy.get("#group_1").select("M").should("have.value","2")
                cy.wait(time)
                cy.get("button[type='submit'].exclusive").click({force:true})
                cy.wait(time)
                cy.xpath("//span[contains(text(),'Proceed to checkout')]").should("be.visible").click({force:true})
                cy.wait(time)
                cy.get("a.home").should("be.visible").click({force:true})
                cy.wait(time)
            }   
        })
    })


})//Cierre del describe