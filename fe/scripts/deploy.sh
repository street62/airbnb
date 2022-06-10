#!/bin/bash

cd /home/ec2-user/airbnb/FE

CONTAINER_NAME="airbnb-fe"
IMAGE_NAME="ghcr.io/bugpigg/airbnb-fe:latest"

# remove prev image
sudo docker stop $CONTAINER_NAME
sudo docker rm $CONTAINER_NAME
sudo docker image rm $IMAGE_NAME

# pull latest image
sudo docker pull $IMAGE_NAME

# start container
sudo docker run --env-file ./env -p 3000:3000  -d -it --name $CONTAINER_NAME $IMAGE_NAME
