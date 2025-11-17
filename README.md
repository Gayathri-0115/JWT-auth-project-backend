
```md
# Backend - JWT Authentication (Node.js + Express)

This is the backend for the JWT Authentication project. It handles user registration, login, JWT token generation, and protected routes.

---

## 🚀 Features

- User Registration (with password encryption)
- User Login
- JWT Token generation using `jsonwebtoken`
- Protected routes via middleware
- MongoDB database connection
- Secure password hashing using `bcrypt`
- Middleware authentication

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **bcrypt**
- **jsonwebtoken**
- **dotenv**

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-backend-repo-url>
cd backend
 Install dependencies
npm install

3️⃣ Create a .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=your_client_url
JWT_EXPIRES_IN=15m

4️⃣ Start the server
npm start


🔌 API Routes
1. Register User
POST /auth/register
Body Example:
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}


2. Login User
POST /auth/login
Body Example:
{
  "email": "john@gmail.com",
  "password": "123456"
}

Response:
{
  "message": "Login successful",
  "token": "<jwt-token>"
}


3. Protected Route
GET /auth/profile
Requires token:
{
  "Authorization": "Bearer <your-token>"
}


🔐 Auth Middleware
Middleware/auth.js verifies JWT tokens and protects routes.

📄 Scripts
npm start          # Start server
npm run dev        # Run with nodemon

---



