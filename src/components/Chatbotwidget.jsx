import React, { useEffect, useState } from "react";
import { MessageCircle, Bot } from "lucide-react"; // Bot icon

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Auto-message on open
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ sender: "bot", text: "Hello, how are you?" }]);
      }, 500);
    }
  }, [open, messages.length]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        userMessage,
        { sender: "bot", text: "Thanks for reaching out! How can I assist you today?" },
      ]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chatbot Toggle Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full bg-gradient-to-tr from-green-500 via-teal-500 to-blue-500 text-white shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="mt-3 w-80 h-96 bg-white rounded-xl shadow-xl p-4 border border-gray-300 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg text-gray-800">Chat Support</h2>
            <button onClick={() => setOpen(false)} className="text-sm text-red-500 font-bold">
              X
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto text-sm space-y-2 mb-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start max-w-[90%] ${
                  msg.sender === "user" ? "ml-auto justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="mr-2 mt-[2px] text-blue-600">
                    <Bot size={18} />
                  </div>
                )}
                <div
                  className={`px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
