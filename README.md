# CVwithAI Chat App

![CVwithAI Chat App](https://via.placeholder.com/800x400.png?text=CVwithAI+Chat+App) <!-- Add a screenshot for better visuals -->

## 🚀 Live Demo

- Frontend: https://cvwithaichat-app.vercel.app/chat  
- Backend: https://myaiwebsite-backend.onrender.com/ask

---

## 🧠 Features

- 🤖 AI-powered chat using Hugging Face Inference API  
- ⚛️ React frontend with responsive UI  
- 🌐 Node.js backend with rate limiting and CORS setup  
- ☁️ Deployed with Vercel (frontend) & Render (backend)  
- 🔐 Environment variable-based API key management

---

## 🛠️ Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Frontend    | React, React Router DOM      |
| Backend     | Node.js, Express, Axios, CORS|
| Deployment  | Vercel (frontend), Render (backend) |
| API         | Hugging Face `google/gemma-2-9b-it` |
| Others      | Git/GitHub, .env, CSS Modules |

---

## 🛠️ Installation and Setup

### 📦 Prerequisites

- Node.js (v16 or higher)
- Hugging Face API Key ([Get one here](https://huggingface.co/settings/tokens))

---

### ⚙️ Local Setup

#### Backend Setup
```
cd myaiwebsite-backend
npm install
```
Create .env:
```
HF_API_KEY=your_huggingface_api_key
```
Run server:
```
node server.js
```
#### Frontend Setup
```
cd myaiwebsite
npm install
```
Create .env:
```
REACT_APP_BACKEND_URL=http://localhost:5000
```
Start app:
```
npm start
```
---

### 🚀 Deployment
#### Frontend (Vercel)
Domains:
```
https://cvwithaichat-app.vercel.app
```
```
https://cvwithaichat-2wi0hk4do-kim-minsungs-projects.vercel.app
```
Deployment Commands:
```
npm run build
vercel --prod
```
Environment Variables:
```
REACT_APP_BACKEND_URL=https://myaiwebsite-backend.onrender.com
```
#### Backend (Render)
```
Domain: https://myaiwebsite-backend.onrender.com
```
Build Command:
```
npm install
```
Start Command:
```
node server.js
```
Environment Variables:
```
HF_API_KEY=your_huggingface_api_key_here
```
---

## 🧠 Key Learnings and Challenges
### 1. Resolving CORS Issues
- Challenge: CORS policy violations due to domain mismatches between Vercel and Render. <br/>
- Solution: Implemented dynamic CORS handling in the backend
```
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'https://cvwithaichat-app.vercel.app',
      'https://cvwithaichat-2wi0hk4do-kim-minsungs-projects.vercel.app',
      'http://localhost:3000',
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, origin);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
}));
```
Adapted to Vercel’s dynamic domain changes by allowing multiple origins.

### 2. Handling Hugging Face API 403 Errors
- Challenge: Encountered 403 errors due to lack of access to the google/gemma-2-9b-it model. <br/>
- Solution: Requested access to the model on Hugging Face and resolved the issue. <br/>

### 3. Deployment Configuration
- Challenge: Port conflicts in Render and environment variable loading issues. <br/>
- Solution: Used process.env.PORT for dynamic port binding
```
const port = process.env.PORT;
```
Configured environment variables in both Render and Vercel dashboards.

### 4. Improving AI Response Quality
- Challenge: AI responses lacked structure and readability. <br/>
- Solution: Applied prompt engineering to enforce structured responses
```
const prompt = `
  Respond to users' questions in a clean, structured format.
  - Your answers should be concise and clear.
  - If you use lists, separate each item with a line break and number it.
  - Avoid unnecessary repetition and provide specific advice that reflects the user's context.
  ${userInput}
`;
```
Enhanced readability by post-processing responses in the frontend using the formatResponse function.

---

## 🔮 Future Improvements
- **Model Enhancement**: Transition to a more advanced language model (e.g., OpenAI, Grok) for better performance. <br/>
- **User Experience**: Add chat history storage and dark mode support. <br/>
- **Performance Optimization**: Implement response caching on the backend. <br/>
- **Fine-tuning**: Fine-tune an open-source model (e.g., Mistral or Gemma) on domain-specific data (e.g., CV writing examples) to improve contextual accuracy.

---
