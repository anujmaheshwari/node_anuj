pipeline {
    agent any
    stages {
        stage('Get Checkout') {
            steps {
                git checkourt https://github.com/anujmaheshwari/node_anuj
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
