/// <reference types="Cypress" /> 

//Descripcion de la prueba
describe("Opciones de click", () =>{

    //Definiendo un caso de prueba
    it("Click sencillo", () =>{
        //Navegando hacia la pagina de orange hrm
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
        //Validando el titulo con un assert para que sea igual a OrangeHRM
        cy.title().should('eq','OrangeHRM')
        //Esperando un segundo
        cy.wait(1000)

        //Obteniendo el label de username validando que este visible y activo
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input")
        .should('be.visible').should("be.enabled").type("Admin")
        //Obteniendo el label de password validando que este visible y activo
        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input")
        .should("be.visible").should("be.enabled").type("admin123")
        //Haciendo click en un elemento
        cy.get(".oxd-button").should("be.visible").should("be.enabled").click()

        cy.get(":nth-child(1) > .oxd-main-menu-item").should("be.visible").click()
        
    })

    //Cuando se desea hacer click en alguna opcion se fuerza
    it("Click Force true ",()=>{
        //Navegando hacia la pagina de orange hrm
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
        //Validando el titulo con un assert para que sea igual a OrangeHRM
        cy.title().should('eq','OrangeHRM')
        //Esperando un segundo
        cy.wait(1000)

         //Obteniendo el label de username validando que este visible y activo
         cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input")
         .should('be.visible').should("be.enabled").type("Admin")
         //Obteniendo el label de password validando que este visible y activo
         cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input")
         .should("be.visible").should("be.enabled").type("admin123")
         //Haciendo click en un elemento
         cy.get(".oxd-button").should("be.visible").should("be.enabled").click()
        //Con las llaves {force:true} forzamos a hacer un click
         cy.get(":nth-child(1) > .oxd-main-menu-item").should("be.visible").click({force:true})
        
    })

    //Haciendo click por coordenadas
    it.only("Click por coordenadas (x,y)",()=>{
        //Navegando hacia la pagina de orange hrm
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
        //Validando el titulo con un assert para que sea igual a OrangeHRM
        cy.title().should('eq','OrangeHRM')
        //Esperando un segundo
        cy.wait(1000)

         //Obteniendo el label de username validando que este visible y activo
         cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input")
         .should('be.visible').should("be.enabled").type("Admin")
         //Obteniendo el label de password validando que este visible y activo
         cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input")
         .should("be.visible").should("be.enabled").type("admin123")
         //Haciendo click en un elemento
         cy.get(".oxd-button").should("be.visible").should("be.enabled").click()

        cy.get(1500)
        //Las coordenadas son x,y y x de izquierda a derecha y Y de arriba iniciando en 1
        //y hacia abajo va incrementando
         cy.get(".oxd-topbar-header-title").should("be.visible").click(50,40)
    })

})//Cierre del describe