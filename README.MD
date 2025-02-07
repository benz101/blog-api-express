# Blog API - Setup and Usage Guide

## Getting Started
Follow these steps to set up and run the API:

### 1. Install Dependencies
Navigate to the project directory and install dependencies:
```sh
npm install
```

### 2. Create Database
Create a MySQL database named `blog_db`.

### 3. Configure Database Connection
Open the `database.ts` file located in `src/config` and update the following fields with your MySQL credentials:
```ts
username: "your_username",
password: "your_password"
```

### 4. Run the API
Start the API server with:
```sh
npm run dev
```

### 5. Run Unit Tests (Optional)
To execute unit tests, run:
```sh
npm test
```

## API Endpoints
Use Postman or any API testing tool to interact with the API.

### **1. Get Article List**
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/article/list`

### **2. Create an Article**
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/article/create`
- **Request Body (JSON):**
```json
{
  "title": "Title Sample",
  "content": "Content Sample"
}
```

### **3. Update an Article**
- **Method:** `PUT`
- **URL:** `http://localhost:5000/api/article/update/{article_id}`
- **Request Body (JSON):**
```json
{
  "title": "Title Sample is updated",
  "content": "Content Sample is updated"
}
```

### **4. Delete an Article**
- **Method:** `DELETE`
- **URL:** `http://localhost:5000/api/article/delete/{article_id}`