# 📝 iNotebook - Your Personal Cloud Notes App

iNotebook is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to securely create, read, update, and delete (CRUD) personal notes in the cloud. It includes user authentication with JWT tokens and supports login and signup functionality.

---

## 🚀 Features

- ✨ Secure user authentication (JWT-based)
- 📝 Add, edit, delete and view personal notes
- ☁️ All notes stored securely in MongoDB
- 🔒 Notes are private to each user
- ⚛️ React frontend with Bootstrap styling
- 🔃 Persistent login using localStorage token
- ⚙️ Backend API built with Node.js & Express

---

## 🔧 Tech Stack

- **Frontend:** React, React Router DOM, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose ODM)
- **Authentication:** JSON Web Tokens (JWT)
- **Others:** bcryptjs (password hashing), express-validator (validation), cors (CORS handling)

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running (or use MongoDB Atlas)

---

###  🛠️ Installation

1. Create a React App
```bash
npx create-react-app inotebook
cd iNotebook

```

2. Clone the repository
```bash
git clone https://github.com/yourusername/iNotebook.git
cd iNotebook

```

3.Run the App
```bash
npm run both

```

### 🧪 API ENDPOINTS (Backend)
| Method | Route                      | Description        |
| ------ | -------------------------- | ------------------ |
| POST   | /api/auth/createuser       | Register new user  |
| POST   | /api/auth/login            | Login user         |
| POST   | /api/auth/getuser          | Get user details   |
| GET    | /api/notes/fetchallnotes   | Get all user notes |
| POST   | /api/notes/addnote         | Add new note       |
| PUT    | /api/notes/updatenote/\:id | Update note        |
| DELETE | /api/notes/deletenote/\:id | Delete note        |


### 🌐 Deployment
You can deploy the backend on platforms like Render, Railway, or Vercel (Serverless), and frontend using GitHub Pages, Netlify, or Vercel.


###  Author
Mahesh Kumar Banoth

GitHub:https://github.com/mahesh001-sys

### ⭐️ Support

If you found this project useful, consider starring ⭐ it on GitHub!






