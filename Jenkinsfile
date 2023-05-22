pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Smoke Tests') {
            steps {
                script {
                    def smokeTestCommand = 'npm run wdio' // Modify this command based on your project's requirements
                    def smokeTestOutput = sh(returnStdout: true, script: smokeTestCommand).trim()
                    echo smokeTestOutput
                }
            }
        }
    }
}
