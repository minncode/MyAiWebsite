import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/Chat.module.css';

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]); // 대화 기록 저장
  const chatEndRef = useRef(null); // 스크롤을 위한 ref
  const [isLoading, setIsLoading] = useState(false);

  // 대화가 추가될 때마다 맨 아래로 스크롤
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return; // 빈 입력 방지

    // 사용자 메시지 추가
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    // 입력 필드 초기화
    setInput('');
    setIsLoading(true);
    // AI 응답 요청
    try {
      const res = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const aiMessage = { role: 'assistant', content: data.choices[0].message.content };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { role: 'assistant', content: '오류가 발생했습니다. 다시 시도해주세요.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Enter 키로 메시지 전송
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <section id="chat" className={styles.chat}>
      <h2 className={styles.title}>Chatting with AI</h2>
      <div className={styles.chatContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.role === 'user' ? styles.userMessage : styles.aiMessage
            }`}
          >
            <span className={styles.messageContent}>{msg.content}</span>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {isLoading && <div className={styles.loading}>로딩 중...</div>}
      
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask questions"
          className={styles.input}
        />
        <button onClick={sendMessage} className={styles.button}>
          Send
        </button>
        <button onClick={clearChat} className={styles.clearButton}>Reset</button>
      </div>
    </section>
  );
}

export default Chat;