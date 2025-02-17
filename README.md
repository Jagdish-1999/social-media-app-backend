# 🌐 Social Media Backend API

Welcome to the **Social Media Backend API**, built using **Node.js** and **Express.js**.
This API allows users to interact with a social media platform, manage posts, likes, comments, friendships, and authentication.

---

## 🚀 Features

### 👉 You can see Detailed API Documentation [_`here`_]("http://localhost:3000/api-docs")

### 🧑‍💼 Users

- ✅ **Signup** (`POST /api/users/signup`)
- ✅ **Signin** (`POST /api/users/signin`)
- ✅ **Logout** (`POST /api/users/logout`)
- ✅ **Logout From All Devices** (`POST /api/users/logout-add-devices`)
- ✅ **Get Logged In User's Details** (`GET /api/users/get-details`)
- ✅ **Get All Users Details** (`GET /api/users/get-all-details`)
- ✅ **Update User Details** (`PUT /api/users/update-details`)
- ✅ **Delete User** (`DELETE /api/users/:userId`)

### 📝 Posts

- 🆕 **Create Post** (`POST /api/posts`)
- ✏ **Update Post** (`PUT /api/posts/:postId`)
- ❌ **Delete Post** (`DELETE /api/posts/:postId`)
- 📌 **Get Post By ID** (`GET /api/posts/:postId`)
- 🏷 **Get Specific User's Posts** (`GET /api/posts/user/:userId`)
- 📃 **Get All Posts** (`GET /api/users/all`)

### ❤️ Likes

- 👍 **Toggle Like on Post** (`POST /api/likes/toggle/:postId`)
- 📊 **Get Likes for a Post** (`GET /api/likes/:postId`)

### 💬 Comments

- 💭 **Add a Comment to a Post** (`POST /api/comments/:postId`)
- ✏ **Update a Comment** (`PUT /api/comments/:commentId`)
- ❌ **Delete a Comment** (`DELETE /api/comments/:commentId`)
- 📃 **Get Comments for a Post** (`GET /api/comments/:postId`)

### 🔐 OTP (One-Time Password)

- 📩 **Send OTP** (`POST /api/otp/send`)
- ✅ **Verify OTP** (`POST /api/otp/verify`)
- 🔄 **Reset Password** (`POST /api/otp/reset-password`)

### 👫 Friendships

- 🤝 **Toggle Friendship** (`POST /api/friends/toggle-friendship/:friendUserId`)
- 🔄 **Get Pending Friend Requests** (`GET /api/friends/get-pending-requests/`)
- ✔ **Accept/Reject Friend Request** (`POST /api/friends/response-to-request/`)
- 📃 **Get Friend List** (`GET /api/friends/get-friends/`)

---

## 🏗 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcrypt for password hashing
- **Email Services:** Nodemailer for email verification
- **Middleware:** Express Middleware, Helmet, CORS

---

## ⚡ API Documentation

### 🔹 **User Routes**

| Method   | Endpoint                        | Description                     |
| -------- | ------------------------------- | ------------------------------- |
| `POST`   | `/api/users/signup`             | Register a new user             |
| `POST`   | `/api/users/signin`             | Login a user                    |
| `POST`   | `/api/users/logout`             | Logout from the current session |
| `POST`   | `/api/users/logout-add-devices` | Logout from all devices         |
| `GET`    | `/api/users/get-details`        | Get details of logged-in user   |
| `GET`    | `/api/users/get-all-details`    | Fetch details of all users      |
| `PUT`    | `/api/users/update-details`     | Update user details             |
| `DELETE` | `/api/users/:userId`            | Delete a user                   |

---

### 🔹 **Post Routes**

| Method   | Endpoint                  | Description                      |
| -------- | ------------------------- | -------------------------------- |
| `POST`   | `/api/posts`              | Create a new post                |
| `PUT`    | `/api/posts/:postId`      | Update a post                    |
| `DELETE` | `/api/posts/:postId`      | Delete a post                    |
| `GET`    | `/api/posts/:postId`      | Fetch a post by ID               |
| `GET`    | `/api/posts/user/:userId` | Fetch posts from a specific user |
| `GET`    | `/api/users/all`          | Fetch all posts                  |

---

### 🔹 **Like Routes**

| Method | Endpoint                    | Description                   |
| ------ | --------------------------- | ----------------------------- |
| `POST` | `/api/likes/toggle/:postId` | Toggle like/unlike for a post |
| `GET`  | `/api/likes/:postId`        | Get all likes for a post      |

---

### 🔹 **Comment Routes**

| Method   | Endpoint                   | Description               |
| -------- | -------------------------- | ------------------------- |
| `POST`   | `/api/comments/:postId`    | Add a comment to a post   |
| `PUT`    | `/api/comments/:commentId` | Update a comment          |
| `DELETE` | `/api/comments/:commentId` | Delete a comment          |
| `GET`    | `/api/comments/:postId`    | Fetch comments for a post |

---

### 🔹 **Friendship Routes**

| Method | Endpoint                                       | Description                       |
| ------ | ---------------------------------------------- | --------------------------------- |
| `POST` | `/api/friends/toggle-friendship/:friendUserId` | Send or remove a friend request   |
| `GET`  | `/api/friends/get-pending-requests/`           | Get pending friend requests       |
| `POST` | `/api/friends/response-to-request/`            | Accept or reject a friend request |
| `GET`  | `/api/friends/get-friends/`                    | Get a list of friends             |

---

### 🔹 **OTP Routes**

| Method | Endpoint                  | Description                  |
| ------ | ------------------------- | ---------------------------- |
| `POST` | `/api/otp/send`           | Send OTP to registered email |
| `POST` | `/api/otp/verify`         | Verify the OTP               |
| `POST` | `/api/otp/reset-password` | Reset password using OTP     |

---

## 🔥 Setup & Installation

### 📌 **1. Clone the Repository**

```sh
git clone https://github.com/your-repo/social-media-backend.git
cd social-media-backend
```
