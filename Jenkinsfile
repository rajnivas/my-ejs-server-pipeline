pipeline {
    agent any
    environment {
        PROJECT_ID = 'ninja-gcp-277418'
        CLUSTER_NAME = 'kubecluster'
        LOCATION = 'europe-west4-a'
        CREDENTIALS_ID = 'gke'
    }
    stages {
        stage("Checkout code") {
            steps {
                checkout scm
            }
        }
        stage("Build image") {
            steps {
                script {
                    myapp = docker.build("rajni03/helloworld")
                }
            }
        }
        stage("Push image") {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                            myapp.push("latest")

                    }
                }
            }
        }
        stage('Deploy to GKE') {
            steps{
                sh("kubectl run gke_ninja-gcp-277418_europe-west4-a_kubecluster --image=rajni03/helloworld --port=3000")
            }
        }
    }
}
