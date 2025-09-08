# Mingle 💬
A real-time chat application built with the **MERN stack** (MongoDB, Express.js, React, Node.js) featuring modern UI with **TailwindCSS** and **DaisyUI**, and state management with **Redux Toolkit**.

---

## 🚀 Features
- 🔐 **User Authentication** – Signup & Login forms with validation  
- 🎨 **Modern UI** – Styled using TailwindCSS and DaisyUI  
- ⚡ **Real-Time Messaging** – Instant chat between users (WebSockets planned)  
- 🗂️ **State Management** – Powered by Redux Toolkit  
- 🛠️ **Scalable Structure** – Clean and modular code for both client & server  

---

## 🖥️ Tech Stack
**Frontend:**  
- React  
- Redux Toolkit  
- TailwindCSS + DaisyUI  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  

**Others (Planned):**  
- Socket.IO for real-time communication  
- JWT for authentication  

---


project structure 


Mingle/
│── client/ # Frontend (React + TailwindCSS + Redux Toolkit)
│── server/ # Backend (Express + MongoDB)
│── package.json
│── README.md




---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/mingle.git
cd mingle

# 2. Install dependencies
cd client
npm install
cd ../server
npm install

# 3. Setup environment variables
# Create a .env file inside server/ and add:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# PORT=5000

# 4. Run the app
# Start client
cd client
npm run dev

# Start server
cd ../server
npm start


## 📂 Project Structure
