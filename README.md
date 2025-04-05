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

## Tech Stack

- **Frontend**:
  - React (`react`, `react-router-dom`)
  - CSS Modules (`*.module.css`)
  - Vercel (deployment)
- **Backend**:
  - Node.js (`express`, `axios`, `cors`, `express-rate-limit`)
  - Render (deployment)
- **API**:
  - Hugging Face Inference API (`google/gemma-2-9b-it`)
- **Others**:
  - Git/GitHub (version control)
  - Environment Variables (configuration management)

---

## Project Structure
cvwithaichat/
├── cvwithaichat-app/          # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Projects.js
│   │   │   ├── Chat.js
│   │   │   ├── Contact.js
│   │   ├── css/
│   │   │   ├── Header.module.css
│   │   │   ├── Home.module.css
│   │   │   ├── About.module.css
│   │   │   ├── Projects.module.css
│   │   │   ├── Chat.module.css
│   │   │   ├── Contact.module.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   ├── public/
│   │   ├── manifest.json
│   ├── .env
│   ├── package.json
│   ├── .gitignore
├── myaiwebsite-backend/       # Backend (Node.js)
│   ├── server.js
│   ├── .env
│   ├── package.json
│   ├── .gitignore
├── README.md

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm
- Hugging Face API Key ([Obtain here](https://huggingface.co/settings/tokens))

### Local Setup

#### Backend
1. Navigate to the backend directory:
   ```bash
   cd myaiwebsite-backend
Install dependencies:
bash

접기

자동 줄바꿈

복사
npm install
Create a .env file and set environment variables:
text

접기

자동 줄바꿈

복사
HF_API_KEY=your_huggingface_api_key_here
Start the server:
bash

접기

자동 줄바꿈

복사
node server.js
Frontend
Navigate to the frontend directory:
bash

접기

자동 줄바꿈

복사
cd cvwithaichat-app
Install dependencies:
bash

접기

자동 줄바꿈

복사
npm install
Create a .env file and set environment variables:
text

접기

자동 줄바꿈

복사
REACT_APP_BACKEND_URL=http://localhost:5000
Run the application:
bash

접기

자동 줄바꿈

복사
npm start
Open http://localhost:3000/chat in your browser.
Deployment
Frontend (Vercel)
Domains:
https://cvwithaichat-app.vercel.app
https://cvwithaichat-2wi0hk4do-kim-minsungs-projects.vercel.app
Deployment Commands:
bash

접기

자동 줄바꿈

복사
npm run build
vercel --prod
Environment Variables:
text

접기

자동 줄바꿈

복사
REACT_APP_BACKEND_URL=https://myaiwebsite-backend.onrender.com
Backend (Render)
Domain: https://myaiwebsite-backend.onrender.com
Deployment Configuration:
Build Command: npm install
Start Command: node server.js
Environment Variables:
text

접기

자동 줄바꿈

복사
HF_API_KEY=your_huggingface_api_key_here
Key Learnings and Challenges
1. Resolving CORS Issues
Challenge: CORS policy violations due to domain mismatches between Vercel and Render.
Solution:
Implemented dynamic CORS handling in the backend:
javascript

접기

자동 줄바꿈

복사
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
Adapted to Vercel’s dynamic domain changes by allowing multiple origins.
2. Handling Hugging Face API 403 Errors
Challenge: Encountered 403 errors due to lack of access to the google/gemma-2-9b-it model.
Solution:
Requested access to the model on Hugging Face and resolved the issue.
Secured the API key using environment variables for safety.
3. Deployment Configuration
Challenge: Port conflicts in Render and environment variable loading issues.
Solution:
Used process.env.PORT for dynamic port binding:
javascript

접기

자동 줄바꿈

복사
const port = process.env.PORT;
Configured environment variables in both Render and Vercel dashboards.
4. Improving AI Response Quality
Challenge: AI responses lacked structure and readability.
Solution:
Applied prompt engineering to enforce structured responses:
javascript

접기

자동 줄바꿈

복사
const prompt = `
  Respond to users' questions in a clean, structured format.
  - Your answers should be concise and clear.
  - If you use lists, separate each item with a line break and number it.
  - Avoid unnecessary repetition and provide specific advice that reflects the user's context.
  ${userInput}
`;
Enhanced readability by post-processing responses in the frontend using the formatResponse function.
Future Improvements
Model Enhancement: Transition to a more advanced language model (e.g., OpenAI GPT-3.5) for better performance.
User Experience: Add chat history storage and dark mode support.
Performance Optimization: Implement response caching on the backend.
Multilingual Support: Add Vietnamese and Japanese language support for broader accessibility.
Why Naver Japan?
I developed this project as part of my application for an internship at Naver Japan’s Vietnam office. Naver Japan is renowned for its innovative AI technologies and user-centric services, such as LINE and advanced search capabilities. Through this project, I honed my skills in frontend and backend development, API integration, and cloud deployment, while also improving my problem-solving abilities by addressing challenges like CORS issues and AI response quality. I am particularly interested in contributing to Naver Japan’s Vietnam office by leveraging my experience to develop multilingual features, especially for Vietnamese and Japanese users, aligning with Naver’s global outreach goals.

Demo
Live Demo: https://cvwithaichat-app.vercel.app/chat
Backend API: https://myaiwebsite-backend.onrender.com/ask
Contact
Name: Kim Minsung
Email: your-email@example.com
GitHub: github.com/your-username
LinkedIn: linkedin.com/in/your-profile
text

접기

자동 줄바꿈

복사

---

### Changes Made
1. **Project Name**:
   - Changed from `DeepSeek Chat App` to `CVwithAI Chat App` to reflect your actual project name.
2. **Model Information**:
   - Removed references to DeepSeek and `xai/grok`.
   - Specified that only `google/gemma-2-9b-it` was used.
3. **Directory Names**:
   - Updated `deepseek-app` to `cvwithaichat-app`.
   - Updated `deepseek-backend` to `myaiwebsite-backend`.
4. **Focus on Naver Japan**:
   - Highlighted your interest in multilingual support (Vietnamese and Japanese) to align with Naver Japan’s Vietnam office goals.

---

### Additional Tips
- **Add Screenshots**:
  - Include a screenshot of the chat interface in the `cvwithaichat-app/screenshots/` folder and reference it in the `README.md`:
    ```markdown
    ![Chat Interface](screenshots/chat-interface.png)
Highlight Technical Depth:
The "Key Learnings and Challenges" section includes code snippets to demonstrate your problem-solving skills.
Ensure Demo Works:
Verify that the demo links are functional, as Naver Japan reviewers may test them (beware of Render’s free tier sleep mode).
Professional Tone:
Used a formal yet approachable tone suitable for an internship application.
