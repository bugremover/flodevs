# Synapz Backend API Documentation

## Authentication Endpoints

### Register User
- **POST** `/api/auth/register`
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: JWT token and user details
- **Security**: Password encryption, email validation, username uniqueness

### Login User
- **POST** `/api/auth/login`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**: JWT token and user details
- **Security**: Rate limiting, password hashing

## MindMap Endpoints

### Get Public MindMaps
- **GET** `/api/mindmap`
- **Response**: List of public mindmaps
- **Security**: Public access

### Get User's MindMaps
- **GET** `/api/mindmap/my-mindmaps`
- **Response**: List of user's mindmaps
- **Security**: JWT authentication required

### Get Single MindMap
- **GET** `/api/mindmap/{id}`
- **Response**: MindMap details
- **Security**: JWT authentication for private mindmaps

### Create MindMap
- **POST** `/api/mindmap`
- **Request Body**: MindMap object
- **Response**: Created MindMap
- **Security**: JWT authentication, input validation

### Update MindMap
- **PUT** `/api/mindmap/{id}`
- **Request Body**: Updated MindMap
- **Response**: Updated MindMap
- **Security**: JWT authentication, ownership verification

### Delete MindMap
- **DELETE** `/api/mindmap/{id}`
- **Response**: Success message
- **Security**: JWT authentication, ownership verification

## SkillTree Endpoints

### Get Public SkillTrees
- **GET** `/api/skilltree`
- **Response**: List of public skilltrees
- **Security**: Public access

### Get User's SkillTrees
- **GET** `/api/skilltree/my-skilltrees`
- **Response**: List of user's skilltrees
- **Security**: JWT authentication required

### Get Single SkillTree
- **GET** `/api/skilltree/{id}`
- **Response**: SkillTree details
- **Security**: JWT authentication for private skilltrees

### Create SkillTree
- **POST** `/api/skilltree`
- **Request Body**: SkillTree object
- **Response**: Created SkillTree
- **Security**: JWT authentication, input validation

### Update SkillTree
- **PUT** `/api/skilltree/{id}`
- **Request Body**: Updated SkillTree
- **Response**: Updated SkillTree
- **Security**: JWT authentication, ownership verification

### Delete SkillTree
- **DELETE** `/api/skilltree/{id}`
- **Response**: Success message
- **Security**: JWT authentication, ownership verification

## Feed Endpoints

### Get Feed
- **GET** `/api/feed`
- **Response**: Combined feed of public mindmaps and skilltrees
- **Security**: Public access

## Security Features

1. **JWT Authentication**
   - Token-based authentication
   - Token expiration
   - Refresh token mechanism

2. **Password Security**
   - BCrypt password hashing
   - Password strength validation
   - Password reset functionality

3. **Rate Limiting**
   - API request rate limiting
   - Login attempt limiting

4. **Input Validation**
   - Request body validation
   - SQL injection prevention
   - XSS protection

5. **CORS Configuration**
   - Strict origin validation
   - Method restriction
   - Header restriction

6. **Audit Logging**
   - User actions logging
   - Security event logging
   - Error logging

7. **Data Protection**
   - MongoDB field-level encryption
   - Sensitive data masking
   - Data access control

8. **Session Management**
   - Secure session handling
   - Session timeout
   - Concurrent session control

## Error Handling

All endpoints return appropriate HTTP status codes and error messages:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Database Schema

### User Collection
```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "profile": {
    "bio": "string",
    "avatar": "string"
  },
  "workspaceSettings": {
    "theme": "string",
    "layout": "string",
    "shortcuts": ["string"]
  },
  "createdAt": "date",
  "updatedAt": "date",
  "lastLogin": "date"
}
```

### MindMap Collection
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "nodes": [{
    "id": "string",
    "content": "string",
    "position": {
      "x": "number",
      "y": "number"
    },
    "color": "string",
    "shape": "string",
    "level": "number"
  }],
  "connections": [{
    "source": "string",
    "target": "string",
    "label": "string",
    "type": "string"
  }],
  "isPublic": "boolean",
  "tags": ["string"],
  "author": "ObjectId",
  "createdAt": "date",
  "updatedAt": "date"
}
```

### SkillTree Collection
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "category": "string",
  "skills": [{
    "id": "string",
    "name": "string",
    "description": "string",
    "level": "number",
    "prerequisites": ["string"],
    "position": {
      "x": "number",
      "y": "number"
    }
  }],
  "connections": [{
    "source": "string",
    "target": "string",
    "type": "string"
  }],
  "isPublic": "boolean",
  "author": "ObjectId",
  "createdAt": "date",
  "updatedAt": "date"
}
``` 