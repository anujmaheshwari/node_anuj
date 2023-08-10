pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building.. ${BUILD_ID}'
                wget1 'http://google.com1'
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
