#!/bin/bash

# Stop any running containers
docker-compose down

# Pull latest changes
git pull

# Build the application
./mvnw clean package -DskipTests

# Build and start containers
docker-compose up -d --build

# Show logs
docker-compose logs -f 