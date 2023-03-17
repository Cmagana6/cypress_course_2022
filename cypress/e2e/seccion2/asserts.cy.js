/// <reference types="Cypress" /> 

require("cypress-xpath")

describe("Asserts", () =>{

    it("Assert Contains", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(1000)

        //Asi tambien podemos encontrar un elemento hijo a partir de su padre
        cy.get("#block_top_menu").contains("Women").click()
    })
    it("Asserts find, eq", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(1000)

        //Utilizando find y luego eq pasandole el index
        cy.get(".product-container").find(".product-image-container").eq(0).click()
    })

    it("Asserts usando then", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(1000)

        //Utilizando find y luego eq pasandole el index
        cy.get(".product-container").find(".product-image-container").eq(3).click()
        cy.wait(1000)
        cy.get("#product_condition .editable").then((e)=>{
            let condition = e.text()
            if(condition == "New"){
                cy.log("El producto es nuevo")
            }
        })
        //Llegamos hacia el elemento y con la variable "e" lo guardamos para acceder a su texto
        cy.get("#our_price_display").then((e)=>{
            cy.log(e.text())
            let price = e.text()
            price = price.slice(1,6)
            cy.log("el precio es "+price)
            if(price>50){
                cy.log("El producto sale de nuestro presupuesto")
                cy.get(".breadcrumb.clearfix ").find("a").eq(1).click()
            }else{
                cy.log("El producto puede ser comprado")
                cy.get("#add_to_cart .exclusive").click()
            }
        })
    })

    it("Asserts contains.text y have.text", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("Carlos")
        cy.get("#userEmail").should("be.visible").type("cmagana@gmail.com")
      
        cy.get("#submit").click()

        //Validar el texto completo de alguna parte de la pagina
        cy.get("#name").should("have.text","Name:Carlos")

        cy.get("#email").should("contain.text","cmagana@gmail.com")
    })

    it("Asserts have.text mas then()", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("Carlos")

        cy.get("#userName").should("have.value","Carlos").then(()=>{
            cy.get("#userEmail").should("be.visible").type("cmagana@gmail.com")
            cy.get("#submit").should("be.visible").click()
        })
    })

    it("Assert have.class",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").should("have.class","mr-sm-2 form-control").then(()=>{
            cy.get("#userName").type("Carlos")
        })

    })

    it("Assert have.class y la funcion and",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1000)
        //Con la funcion and estamos obligando a que se tengan que cumplir ambas condiciones
        cy.get("#userName").should("be.visible").and("have.class","mr-sm-2 form-control").then(()=>{
            cy.get("#userName").type("Carlos")
        })
        
    })

    it("Assert not have class",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1000)
        //Con la funcion and estamos obligando a que se tengan que cumplir ambas condiciones
        //con not. y las condiciones se prueban que no tengan el parametro que le pasamos
        cy.get("#userName").should("be.visible").and("not.have.class","mr-sm-22 form-control").then(()=>{
            cy.get("#userName").type("Carlos")
        })
        
    })
    it("Assert length y css",()=>{
        cy.visit("https://demo.anhtester.com/table-pagination-demo.html")
        cy.title().should('eq',"Selenium Easy - Table with Pagination Demo")
        cy.wait(1000)
        
        //Validando el total de filas de la primera pagina
        cy.get("#myTable tr[style='display: table-row;']").should("have.length",5)
        
        //Validando el total de la tabla cantidad de filas y columnas
        cy.get("#myTable tr td").should("have.length",91)
        //Validando un estilo de css    
        cy.get("#myTable tr td").should("have.length",91).and("have.css","padding","8px")
        
    })

    it("Assert contains",()=>{
        let tiempo=1000
        cy.visit("https://demo.anhtester.com/basic-first-form-demo.html")
        cy.title().should('eq',"Selenium Easy Demo - Simple Form to Automate using Selenium")
        cy.wait(tiempo)
        
        //Eliminando ventana, forzamos el click para que cuando encuentre el elemento lo cierre
        //cy.get(".at-cm-no-button").should("be.visible").click({force:true})
        //escribiendo en el input del user message
        cy.get(".form-group > #user-message").should("be.visible").type("Demo del contenido")
        //encontrar un elemento que se puede repetir y especificamos con su valor o texto
        cy.wait(tiempo)
        cy.contains("[type=button]","Show Message").should("be.visible").click({force:true})
    })

    it("Reto Asserts",()=>{
        let tiempo=1300
        cy.visit("https://demo.anhtester.com/basic-first-form-demo.html")
        cy.title().should('eq',"Selenium Easy Demo - Simple Form to Automate using Selenium")
        cy.wait(tiempo)
        
        //Cerrando popup, forzamos el click para que cuando encuentre el elemento lo cierre
        //cy.get(".at-cm-no-button").should("be.visible").click({force:true})
        //Utilizando variables para escribir valores
        let a=5
        let b=5
        //Validando que este visible y tenga la siguiente clase
        cy.get("#sum1").should("be.visible").and("have.class","form-control").type(a)

        cy.get("#sum2").should("be.visible").and("have.class","form-control").type(b)
        //Con contain econtramos el elemento que deseamos y le damos click
        cy.contains("[type=button]","Get Total").click({force:true})
        //Si el elemento esta visible creamos una promesa y guardamos el elemento en "e"
        cy.get("#displayvalue").should("be.visible").then((e)=>{
            let r=a+b
            cy.log("El valor de r: "+r)
            cy.log(e.text())
            let res=e.text()

            if(r==res){
                cy.log("Son iguales")
            }else{
                cy.log("El resultado es incorrecto")
            }

            if(res>50){
                a=a-10
                b=b-10

                cy.get("#sum1").should("be.visible").and("have.class","form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.class","form-control").clear().type(b)
                cy.wait(tiempo)
                //Con contain econtramos el elemento que deseamos y le damos click
                cy.contains("[type=button]","Get Total").click({force:true})
                
            }else{
                a=a+5
                b=b+5

                cy.get("#sum1").should("be.visible").and("have.class","form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.class","form-control").clear().type(b)
                cy.wait(tiempo)
                //Con contain econtramos el elemento que deseamos y le damos click
                cy.contains("[type=button]","Get Total").click({force:true})
                
            }
        })
    })


    it.only("funcion invoke",()=>{
        let tiempo=1300
        cy.visit("https://demo.anhtester.com/basic-first-form-demo.html")
        cy.title().should('eq',"Selenium Easy Demo - Simple Form to Automate using Selenium")
        cy.wait(tiempo)
        
        //Cerrando popup, forzamos el click para que cuando encuentre el elemento lo cierre
        //cy.get(".at-cm-no-button").should("be.visible").click({force:true})
        //Utilizando variables para escribir valores
        let a=35
        let b=25
        //Validando que este visible y tenga la siguiente clase
        cy.get("#sum1").should("be.visible").and("have.class","form-control").type(a)

        cy.get("#sum2").should("be.visible").and("have.class","form-control").type(b)
        //Con contain econtramos el elemento que deseamos y le damos click
        cy.contains("[type=button]","Get Total").click({force:true})
        //Si el elemento esta visible creamos una promesa y guardamos el elemento en "e"
        cy.get("#displayvalue").should("be.visible").then((e)=>{
            let r=a+b
            cy.log("El valor de r: "+r)
            cy.log(e.text())
            let res=e.text()

            if(r==res){
                cy.log("Son iguales")
            }else{
                cy.log("El resultado es incorrecto")
            }

            if(res>50){
                a=a-10
                b=b-10
                //Utilizando la funcion invoke
                cy.get("#sum1").invoke("attr","placeholder").should("contain","Enter value").then(()=>{
                    cy.get("#sum1").clear().type(a)
                    //Invocar el attributo y a parte de eso agregar un atributo
                    cy.get("#sum1").invoke("attr","style","color:blue")
                })
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.class","form-control").then(()=>{
                    cy.get("#sum2").clear().type(b)
                    cy.get("#sum2").invoke("attr","style","color:blue")
                })
                cy.wait(tiempo)
                //Con contain econtramos el elemento que deseamos y le damos click
                cy.contains("[type=button]","Get Total").click({force:true})
                //Cambiando el color del label resultado
                cy.get("#displayvalue").should("be.visible").then((e)=>{
                    cy.get("#displayvalue").invoke("attr","style","color:red")
                })
            }else{
                a=a+5
                b=b+5

                cy.get("#sum1").should("be.visible").and("have.class","form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.class","form-control").clear().type(b)
                cy.wait(tiempo)
                //Con contain econtramos el elemento que deseamos y le damos click
                cy.contains("[type=button]","Get Total").click({force:true})
                
            }
        })
    })

    
})//Cierre del describe