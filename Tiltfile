docker_build('new-app-image', '.')
k8s_yaml('k8.yml')
k8s_resource('new-app', port_forwards=3000)