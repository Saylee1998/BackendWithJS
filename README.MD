# VideoTube Backend

VideoTube is a backend service for a video hosting platform inspired by YouTube.  
The system is designed using Node.js, Express.js, and MongoDB, focusing on secure authentication, scalable REST APIs, and efficient media handling.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication (Access & Refresh Tokens)
- bcrypt password hashing
- Cloudinary (media storage)
- REST API design

---

## 🧠 System Overview

The backend provides core functionality for a video platform, including:

- User authentication and session management
- Video upload and metadata management
- Commenting and engagement features
- Channel subscription system
- Secure media storage integration

The architecture follows modular routing and controller separation to maintain code clarity and scalability.

---

## ✨ Key Features

### 🔐 Authentication & Security
- Secure signup and login using bcrypt hashing
- JWT-based access and refresh token flow
- Protected routes for authenticated operations

### 🎥 Video Management
- Upload videos and thumbnails via Cloudinary
- CRUD operations for video resources
- Metadata handling and retrieval

### 💬 Engagement System
- Like/dislike functionality for videos and comments
- Nested comment and reply support
- Channel subscription management

### ⚙️ API Design
- RESTful endpoint structure
- Proper request/response handling
- Error handling middleware

---

## 📊 Data Modeling

MongoDB collections are structured to support:

- User relationships
- Video ownership
- Comment threading
- Subscription mapping

Entity relationships are designed to support scalable user interaction patterns.

---

## 🏗️ Project Structure

```
src/
├── controllers/
├── models/
├── routes/
├── middlewares/
└── utils/
```

The codebase follows separation of concerns to improve maintainability and extensibility.

---

## ▶️ Running Locally

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB instance
- Cloudinary account

### Setup

```bash
git clone https://github.com/Saylee1998/BackendWithJS.git
cd BackendWithJS
npm install
```

Create a `.env` file with the following environment variables:

```env
PORT=
MONGODB_URI=
JWT_SECRET=
JWT_REFRESH_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Run the server:

```bash
npm run dev
```

---

## 🔍 Future Improvements

- Add automated tests
- Implement pagination for video feeds
- Add rate limiting
- Improve observability and logging
- Introduce caching layer (Redis)

---

## 👩‍💻 Author

**Saylee Waje**  
