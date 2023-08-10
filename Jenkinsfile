currentBuild.displayName = "node_anuj"+currentBuild.number
pipeline {
    agent any
    stages {
        stage('Get Checkout') {
            steps {
                echo "GET CHECKOUT SCM.."
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
