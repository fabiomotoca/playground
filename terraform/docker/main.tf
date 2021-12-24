terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.15.0"
    }
  }
}

provider "docker" {}

# Pulls the image
resource "docker_image" "nodered" {
  name = "nodered/node-red:latest"
}

# Create a container
resource "docker_container" "nodered" {
  image = docker_image.nodered.latest
  name  = "nodered"
  ports {
    internal = 1880
    external = 1880
  }
}