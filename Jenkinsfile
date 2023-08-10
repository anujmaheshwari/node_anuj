pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                ${currentBuild.currentResult}
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
