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
            // Add any build steps you require, such as installing dependencies
            }
        }
        stage('Run Smoke Tests') {
            steps {
                script {
                    def smokeTestCommand = 'run wdio' // Modify this command based on your project's requirements
                    def smokeTestOutput = sh(returnStdout: true, script: smokeTestCommand).trim()
                    echo smokeTestOutput
                }
            }
        }
    }
}
