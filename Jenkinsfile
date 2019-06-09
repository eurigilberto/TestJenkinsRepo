pipeline {
    agent any
    stages {
        stage('test') {
            steps {
                bat 'npm --version'
                bat 'npm install'
                bat 'npm test'
            }
        }
    }
}