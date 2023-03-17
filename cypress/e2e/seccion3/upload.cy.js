/// <reference types="Cypress" /> 

require("cypress-xpath")
import 'cypress-file-upload'

describe("Upload Files", () =>{

    it("Cargando imagenes", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        
        //Con esa ruta vale para hacer referencia a la imagen una vez que esta en la carpeta fixture
        const ruta="globos.jpg"

        //Con esta funcion attachfile deberiamos poder cargar un archivo
        cy.get("[type='file']").attachFile(ruta)
        cy.wait(1000)
    })


    
})//Cierre del describe