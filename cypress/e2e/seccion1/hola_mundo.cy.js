/// <reference types ="cypress"/>

describe('Primer test con Cypress',()=>{
    it("Esto es un Hola mundo desde Cypress", () =>{
        //Generando una salida en consola
        cy.log("Bienvenidos a Cypress")
        //Navegando hacia la pagina que contiene el formulario
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        //Escribiendo en el campo Nombre del formulario
        cy.get("#wsf-1-field-21").type("Carlos")
        //Esperando dos segundos antes de escribir el Apellido
        cy.wait(2000)
        //Escribiendo en el campo Apellido del formulario
        cy.get("#wsf-1-field-22").type("Magaña")
        //Escribiendo en el campo email
        cy.get("#wsf-1-field-23").type("carlos@gmail.com")
        //Escribiendo en el campo telefono
        cy.get("#wsf-1-field-24").type("76548791")
        //Escribiendo en el campo direccion
        cy.get("#wsf-1-field-28").type("Demo de la direccion")
        //Boton de Submit
        cy.get("#wsf-1-field-27").click()

        cy.wait(4000)
        
    })
})