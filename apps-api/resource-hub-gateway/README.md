# Nginx API Gateway

build docker image
` docker build -t resource-hub-gateway .  `

docker tag resource-hub-gateway:latest 221943630936.dkr.ecr.eu-west-1.amazonaws.com/molitio-resource-hub:latest

docker push 221943630936.dkr.ecr.eu-west-1.amazonaws.com/molitio-resource-hub:latest