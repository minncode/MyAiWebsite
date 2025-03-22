import React, { useState } from 'react';
import styles from '../css/Chat.module.css';

function Chat() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await fetch('http://localhost:5000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setResponse(data.choices[0].message.content);
  };

  return (
    <section id="chat" className={styles.chat}>
      <h2 className={styles.title}>Chatting with AI</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask questions"
        className={styles.input}
      />
      <button onClick={sendMessage} className={styles.button}>Send</button>
      <div className={styles.response}>{response}</div>
    </section>
  );
}

export default Chat;