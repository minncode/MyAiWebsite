# CVwithAI Chat App

![CVwithAI Chat App](https://via.placeholder.com/800x400.png?text=CVwithAI+Chat+App) <!-- 스크린샷 추가 권장 -->

## 프로젝트 개요

**CVwithAI Chat App**은 AI와 실시간 대화를 나눌 수 있는 웹 애플리케이션으로, 네이버 재팬의 베트남 지사 인턴 지원을 위해 개발한 포트폴리오 프로젝트입니다. 이 애플리케이션은 프론트엔드(React)와 백엔드(Node.js)로 구성되어 있으며, Hugging Face의 `google/gemma-2-9b-it` 모델을 활용해 자연어 처리 기능을 구현했습니다. Vercel(프론트엔드)과 Render(백엔드)를 사용해 배포했습니다.

이 프로젝트를 통해 프론트엔드-백엔드 통신, API 통합, CORS 문제 해결, 클라우드 배포, 그리고 AI 응답 품질 개선에 대한 경험을 쌓았습니다.

---

## 주요 기능

- **AI와의 대화**: 사용자가 입력한 메시지에 대해 `google/gemma-2-9b-it` 모델이 자연스러운 답변을 생성합니다.
- **실시간 채팅 인터페이스**: React를 사용해 반응형 UI를 구현했습니다.
- **Hugging Face API 통합**: Hugging Face Inference API를 통해 AI 응답 생성.
- **배포**: Vercel(프론트엔드)과 Render(백엔드)를 사용해 배포.

---

## 기술 스택

- **프론트엔드**:
  - React (`react`, `react-router-dom`)
  - CSS Modules (`*.module.css`)
  - Vercel (배포)
- **백엔드**:
  - Node.js (`express`, `axios`, `cors`, `express-rate-limit`)
  - Render (배포)
- **API**:
  - Hugging Face Inference API (`google/gemma-2-9b-it`)
- **기타**:
  - Git/GitHub (버전 관리)
  - Environment Variables (환경 변수 관리)

---

## 프로젝트 구조
cvwithaichat/
├── cvwithaichat-app/          # 프론트엔드 (React)
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
├── myaiwebsite-backend/       # 백엔드 (Node.js)
│   ├── server.js
│   ├── .env
│   ├── package.json
│   ├── .gitignore
├── README.md

text

접기

자동 줄바꿈

복사

---

## 설치 및 실행

### 사전 요구 사항
- Node.js (v16 이상)
- npm
- Hugging Face API 키 ([Hugging Face 토큰 페이지](https://huggingface.co/settings/tokens)에서 발급)

### 로컬 실행

#### 백엔드
1. 백엔드 디렉토리로 이동:
   ```bash
   cd myaiwebsite-backend
의존성 설치:
bash

접기

자동 줄바꿈

복사
npm install
.env 파일 생성 및 환경 변수 설정:
text

접기

자동 줄바꿈

복사
HF_API_KEY=your_huggingface_api_key_here
서버 실행:
bash

접기

자동 줄바꿈

복사
node server.js
프론트엔드
프론트엔드 디렉토리로 이동:
bash

접기

자동 줄바꿈

복사
cd cvwithaichat-app
의존성 설치:
bash

접기

자동 줄바꿈

복사
npm install
.env 파일 생성 및 환경 변수 설정:
text

접기

자동 줄바꿈

복사
REACT_APP_BACKEND_URL=http://localhost:5000
애플리케이션 실행:
bash

접기

자동 줄바꿈

복사
npm start
브라우저에서 http://localhost:3000/chat 접속.
배포
프론트엔드 (Vercel)
도메인:
https://cvwithaichat-app.vercel.app
https://cvwithaichat-2wi0hk4do-kim-minsungs-projects.vercel.app
배포 명령어:
bash

접기

자동 줄바꿈

복사
npm run build
vercel --prod
환경 변수:
text

접기

자동 줄바꿈

복사
REACT_APP_BACKEND_URL=https://myaiwebsite-backend.onrender.com
백엔드 (Render)
도메인: https://myaiwebsite-backend.onrender.com
배포 설정:
Build Command: npm install
Start Command: node server.js
환경 변수:
text

접기

자동 줄바꿈

복사
HF_API_KEY=your_huggingface_api_key_here
주요 학습 경험 및 문제 해결
1. CORS 문제 해결
문제: Vercel과 Render 간 도메인 차이로 CORS 정책 위반 발생.
해결:
백엔드에서 동적 CORS 설정 구현:
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
Vercel 배포 시 도메인 변경에 대응하기 위해 여러 도메인 허용.
2. Hugging Face API 403 에러
문제: google/gemma-2-9b-it 모델에 접근 권한 부족으로 403 에러 발생.
해결:
Hugging Face에서 모델 접근 권한 요청 후 해결.
API 키를 환경 변수로 안전하게 관리.
3. 배포 환경 설정
문제: Render에서 포트 충돌 및 환경 변수 로드 실패.
해결:
process.env.PORT를 사용해 동적 포트 바인딩:
javascript

접기

자동 줄바꿈

복사
const port = process.env.PORT;
Render와 Vercel 대시보드에서 환경 변수 설정.
4. AI 응답 품질 개선
문제: AI 응답이 구조화되지 않고 가독성이 떨어짐.
해결:
프롬프트 엔지니어링으로 응답 형식 지정:
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
프론트엔드에서 formatResponse 함수로 응답 후처리.
향후 개선 계획
모델 성능 개선: 더 강력한 언어 모델(예: OpenAI GPT-3.5)로 전환.
사용자 경험 강화: 채팅 기록 저장 및 다크 모드 지원 추가.
성능 최적화: 백엔드 응답 캐싱 구현.
다국어 지원: 베트남어와 일본어를 포함한 다국어 대화 기능 추가.
네이버 재팬 인턴 지원 동기
이 프로젝트는 네이버 재팬의 베트남 지사에서 인턴으로 지원하기 위해 준비한 포트폴리오입니다. 네이버 재팬은 AI 기술과 사용자 중심의 서비스로 유명하며, 저는 이 프로젝트를 통해 프론트엔드와 백엔드 개발, API 통합, 클라우드 배포를 경험했습니다. 특히 CORS 문제 해결과 AI 응답 품질 개선 과정에서 문제 해결 능력을 키웠으며, 네이버 재팬의 기술 팀에서 이러한 경험을 활용해 혁신적인 서비스 개발에 기여하고 싶습니다. 베트남 지사에서 다국어 지원 기능 개발에 관심이 많아, 베트남어와 일본어 대화 기능을 추가할 계획입니다.

데모
라이브 데모: https://cvwithaichat-app.vercel.app/chat
백엔드 API: https://myaiwebsite-backend.onrender.com/ask
연락처
이름: 김민성 (Kim Minsung)
이메일: your-email@example.com
GitHub: github.com/your-username
LinkedIn: linkedin.com/in/your-profile
text

접기

자동 줄바꿈

복사

---

### 변경 사항
1. **프로젝트 이름 수정**:
   - `DeepSeek Chat App` → `CVwithAI Chat App`으로 변경.
2. **모델 정보 정정**:
   - `DeepSeek`과 `xai/grok` 관련 내용 제거.
   - `google/gemma-2-9b-it` 모델만 사용했다고 명확히 기술.
3. **디렉토리 이름 수정**:
   - `deepseek-app` → `cvwithaichat-app`
   - `deepseek-backend` → `myaiwebsite-backend`
4. **네이버 재팬과의 연결 강화**:
   - 다국어 지원 계획에 베트남어와 일본어를 포함해 네이버 재팬 베트남 지사와의 연관성 강조.

---

### 추가 팁
- **스크린샷 추가**:
  - 채팅 UI 스크린샷을 `cvwithaichat-app/screenshots/` 폴더에 추가하고, `README.md`에 삽입:
    ```markdown
    ![Chat Interface](screenshots/chat-interface.png)
코드 강조:
문제 해결 섹션에서 사용한 코드 스니펫을 통해 기술적 깊이를 보여줌.
데모 링크 점검:
데모 링크가 항상 작동하도록 유지(Render 무료 플랜의 슬립 모드 주의).
