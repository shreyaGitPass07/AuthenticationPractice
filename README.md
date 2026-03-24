# 🔐 Authentication Practice Project

This is a full-stack **Authentication Practice Project** built to understand and implement basic user authentication workflows.

The project includes both:

* 🖥️ Frontend (HTML, CSS, JavaScript)
* ⚙️ Backend (Node.js, Express, MongoDB)

---

## 🚀 Features

* ✅ User **Sign Up**
* ✅ User **Sign In (Login)**
* ❌ No additional features (this project is focused only on authentication basics)

---

## 🧠 Purpose

This project was created for **learning and practice purposes**, specifically to:

* Understand how authentication works
* Learn how frontend and backend communicate
* Practice API integration
* Handle user data securely using a database

---

## 🏗️ Project Structure

```
AuthenticationPractice/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── validators/
│   ├── index.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── signin.html
│   ├── script.js
│   ├── signin.js
│   └── styles.css
│
└── .gitignore
```

---

## ⚙️ Tech Stack

### Frontend:

* HTML
* CSS
* JavaScript (Vanilla JS)

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB (MongoDB Atlas)

---

## 🔗 How It Works

1. User enters details in **Sign Up**
2. Data is sent to backend API
3. Backend validates and stores user in database
4. User can then **Sign In**
5. Backend verifies credentials and allows access

---

## 🌍 API Endpoints

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| POST   | /api/register | Register a new user |
| POST   | /api/login    | Login existing user |

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd AuthenticationPractice
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_mongodb_connection_string
```

Start backend:

```bash
node index.js
```

---

### 3. Run Frontend

Simply open:

```bash
frontend/index.html
```

Or use Live Server in VS Code.

---

## ⚠️ Notes

* This project is for **practice only**
* No advanced authentication features like JWT, sessions, or password hashing (if not implemented)
* Not production-ready

---

## 📌 Future Improvements

* Add JWT Authentication
* Password hashing (bcrypt)
* Protected routes
* UI improvements
* Form validation enhancements

---

## 👩‍💻 Author

**Shreya Tiwari**

---

## ⭐ Acknowledgment

This project is part of my learning journey in **Full Stack Web Development**.
