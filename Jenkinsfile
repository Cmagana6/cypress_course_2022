pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/Cmagana6/cypress_course_2022.git'
                        bat 'npm install --force'                       
                        bat 'npx cypress run cypress run --record --key 2cf28ba6-9490-471f-90b6-67b50c3169e6  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/Cmagana6/cypress_course_2022.git'
                        bat 'npm install --force'                      
                        bat 'npx cypress run cypress run --record --key 2cf28ba6-9490-471f-90b6-67b50c3169e6  --parallel'
                    
                    }
                }

            }

             
        }

    }
            
}