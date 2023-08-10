pipeline {
    agent any

    stages {
        stage('Build1') {
            steps {
                echo 'Building..'
                "${currentBuild.currentResult}"
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
