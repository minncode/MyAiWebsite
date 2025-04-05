import React, { useState, useEffect, useRef } from "react";
import styles from "../css/Chat.module.css";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    if (input.length > 500) {
      const errorMessage = {
        role: "assistant",
        content: "Input cannot exceed 500 characters.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data?.content) {
        const formattedContent = formatResponse(data.content);
        const aiMessage = { role: "assistant", content: formattedContent };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error:", error.message);
      const errorMessage = {
        role: "assistant",
        content: `An error has occurred: ${error.message}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatResponse = (text) => {
    let formatted = text.replace(/\n/g, "<br />");

    const listRegex = /(\d+\.\s+[^:]+:.*?(?=\d+\.\s|$))/g;
    const listItems = formatted.match(listRegex);

    if (listItems) {
      const listHtml = listItems
        .map((item) => {
          const [_, title, description] =
            item.match(/(\d+\.\s+[^:]+):(.*)/) || [];
          return `<div class="list-item"><strong>${title}</strong>${description}</div>`;
        })
        .join("");
      formatted = formatted.replace(
        listRegex,
        `<div class="list-container">${listHtml}</div>`
      );
    }

    return formatted;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const clearChat = () => {
    if (window.confirm("Do you want to reset the chatting?")) {
      setMessages([]);
      setInput("");
    }
  };

  return (
    <section id="chat" className={styles.chat}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Chat with <span className={styles.highlight}>AI</span>
        </h2>
        <div className={styles.underline}></div>

        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <div className={styles.chatTitle}>AI Assistant</div>
            <button onClick={clearChat} className={styles.clearButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
              Reset
            </button>
          </div>

          <div ref={chatContainerRef} className={styles.chatContainer}>
            {messages.length === 0 ? (
              <div className={styles.emptyChat}>
                <div className={styles.welcomeIcon}>💬</div>
                <p>Start a conversation with the AI assistant</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${
                    msg.role === "user" ? styles.userMessage : styles.aiMessage
                  }`}
                >
                  <div className={styles.messageBubble}>
                    <span
                      className={styles.messageContent}
                      dangerouslySetInnerHTML={{ __html: msg.content }}
                    />
                  </div>
                </div>
              ))
            )}
            <div ref={chatEndRef} />
          </div>

          <div className={styles.inputContainer}>
            {isLoading && (
              <div className={styles.loadingIndicator}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            )}

            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask something..."
                className={styles.input}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                className={styles.sendButton}
                disabled={isLoading || !input.trim()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
