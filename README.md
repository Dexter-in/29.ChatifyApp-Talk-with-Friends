<h1 align="center">✨ Full-Stack Chat App with Auth & Emails ✨</h1>



Highlights:

🔐 Custom Auth: Secure JWT implementation without external providers.
⚡ Live Chat: Seamless real-time messaging powered by Socket.io.
🟢 Presence: Instant online/offline status tracking.
🔔 UX Details: Notification sounds and typing indicators with user controls.
📨 Email Integration: Automatic welcome emails via Resend.
🗂️ Cloud Media: Effortless image handling with Cloudinary.
🧰 Robust Backend: Node.js, Express, and MongoDB architecture.
🚦 Security: Built-in API rate-limiting using Arcjet.
🎨 Modern UI: Styled with React, Tailwind CSS, and DaisyUI.
🧠 State Logic: Clean, global state management using Zustand.
🧑‍💻 Dev Ops: Professional Git workflow and Sevalla deployment. 

---

## 🧪 .env Setup

### Backend (`/backend`)

```bash
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
