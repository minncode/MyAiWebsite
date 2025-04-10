# CVwithAI Chat App

![Image](https://github.com/user-attachments/assets/9871f9ff-ad01-4187-80ed-64d33f11c812)
![Image](https://github.com/user-attachments/assets/58f050d0-0fee-4543-9b2a-587bcc3ad5d0)
![Image](https://github.com/user-attachments/assets/43d21f4a-3c2e-401d-a832-e9357dde89d6)
![Image](https://github.com/user-attachments/assets/2774980b-65bc-4bf6-993b-53067db3409d)
![Image](https://github.com/user-attachments/assets/117e8d15-9d2b-4ddc-a901-5977406cb363)


## 🚀 Live Demo

- Frontend: https://cvwithaichat-app.vercel.app/
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
You are a helpful AI assistant. Answer the user's question below clearly and concisely.

Guidelines:
1. Keep responses brief and to the point.
2. Use numbered lists with line breaks for multiple points.
3. Avoid repetition.
4. Make responses context-aware and practical.

User: ${userInput}
Assistant:
`;
```
Enhanced readability by post-processing responses in the frontend using the formatResponse function.

---

## 🔮 Future Improvements
- **Model Enhancement**: Transition to a more advanced language model (e.g., OpenAI, Grok) for better performance. <br/>
- **User Experience**: Add chat history storage and dark mode support. <br/>
- **Performance Optimization**: Implement response caching on the backend. <br/>
- **Fine-tuning**: Fine-tune an open-source model (e.g., Mistral or Gemma) on domain-specific data (e.g., CV writing examples) to improve contextual accuracy.
- **Server Stability**: Address limitations of free-tier hosting, which may cause the server to go offline or become unresponsive during periods of inactivity.
---
