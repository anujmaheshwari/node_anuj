pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building.. ${BUILD_ID}'
                sh 'wget http://google.com'
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
