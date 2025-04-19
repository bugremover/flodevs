# Synapz Backend Deployment Guide

## Prerequisites
- Java 17 or higher
- Docker and Docker Compose (for containerized deployment)
- MongoDB (for traditional deployment)
- Git

## Deployment Options

### 1. Docker Deployment (Recommended)

1. Build and run using Docker Compose:
```bash
docker-compose up -d --build
```

2. View logs:
```bash
docker-compose logs -f
```

3. Stop the application:
```bash
docker-compose down
```

### 2. Traditional Server Deployment

1. Install Java and MongoDB:
```bash
sudo apt update
sudo apt install openjdk-17-jdk mongodb
```

2. Create application directory:
```bash
sudo mkdir -p /opt/synapz
sudo chown $USER:$USER /opt/synapz
```

3. Copy the JAR file:
```bash
cp target/*.jar /opt/synapz/synapz-backend.jar
```

4. Set up systemd service:
```bash
sudo cp synapz.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable synapz
sudo systemctl start synapz
```

5. View logs:
```bash
sudo journalctl -u synapz -f
```

## Environment Variables

Required environment variables:
- `SPRING_DATA_MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `SPRING_PROFILES_ACTIVE`: Set to 'prod' for production

## Monitoring

1. Check application status:
```bash
# Docker
docker-compose ps

# Traditional
sudo systemctl status synapz
```

2. View logs:
```bash
# Docker
docker-compose logs -f

# Traditional
sudo journalctl -u synapz -f
```

## Backup and Maintenance

1. Backup MongoDB data:
```bash
# Docker
docker-compose exec mongodb mongodump --out /data/backup

# Traditional
mongodump --out /path/to/backup
```

2. Restore from backup:
```bash
# Docker
docker-compose exec mongodb mongorestore /data/backup

# Traditional
mongorestore /path/to/backup
```

## Troubleshooting

1. Check application logs
2. Verify MongoDB connection
3. Check network connectivity
4. Verify environment variables
5. Check disk space and memory usage

## Security Considerations

1. Use HTTPS in production
2. Set strong JWT secret
3. Configure proper firewall rules
4. Regular security updates
5. Monitor application logs 