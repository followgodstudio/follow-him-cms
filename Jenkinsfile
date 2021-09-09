node('docker') {
    properties([
        parameters(
            [booleanParam(name: 'SONAR_FAIL_OVERRIDE', defaultValue: false),
             booleanParam(name: 'XRAY_FAIL_OVERRIDE', defaultValue: false)]
        )
    ])
    cleanWs()
    checkout scm
    withEnv(['APP_NAME=web',
             'APP_PROJ=rec',
             "BUILD_NODE=${env.NODE_NAME}",
             "BUILD_WORKSPACE=${env.WORKSPACE}"]) {
        script {
            sh "docker pull ${JENKINS_SCRIPTS_IMAGE}"
            sh "docker run --rm -e PUID=\$(id -u) -e PGID=\$(id -g) -v ${WORKSPACE}/jenkins-scripts:/jenkins-scripts ${JENKINS_SCRIPTS_IMAGE}"
            load 'jenkins-scripts/Jenkinsfile.build'
        }
    }
    cleanWs()
}