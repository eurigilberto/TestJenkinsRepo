pipeline {
    agent any
    stages {
        stage('test') {
            steps {
                bat 'npm --version'
                bat 'npm -i'
                bat 'npm test'
            }
        }
    }
}