import React, { useEffect, useState, useRef } from "react";
import { Bot, Mic, MicOff } from "lucide-react";
import Ai from "../assets/Ai.png";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);

  const getIndianTime = () => {
    return new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hello, how are you?");
      }, 500);
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.onend = () => setIsListening(false);
      recognition.onerror = (event) => {
        console.warn("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  },);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text, time: getIndianTime() },
    ]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input, time: getIndianTime() },
    ]);

    setTimeout(() => {
      addBotMessage("Thanks for reaching out! How can I assist you today?");
    }, 1000);

    setInput("");
  };

  const toggleListening = () => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      try {
        recognition.start();
        setIsListening(true);
      } catch (error) {
        console.warn("Already listening");
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="focus:outline-none"
        style={{ all: "unset", cursor: "pointer" }}
      >
        <img src={Ai} alt="Chatbot" className="w-16 h-16 object-contain" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="mt-3 w-80 h-96 bg-white rounded-xl shadow-xl p-4 border border-gray-300 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg text-gray-800">Chat Support</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-red-500 font-bold"
            >
              X
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto text-sm space-y-2 mb-2 pr-1">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col space-y-1 max-w-[90%] ${msg.sender === "user" ? "ml-auto items-end" : "items-start"
                  }`}
              >
                <div
                  className={`flex items-start ${msg.sender === "user" ? "justify-end" : ""
                    }`}
                >
                  {msg.sender === "bot" && (
                    <div className="mr-2 mt-[2px] text-blue-600">
                      <Bot size={18} />
                    </div>
                  )}
                  <div
                    className={`px-3 py-2 rounded-lg text-sm ${msg.sender === "user"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-200 text-gray-800"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5">
                  {msg.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSend}
            className="flex items-center mt-2 border border-gray-300 rounded-md overflow-hidden"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 focus:outline-none"
            />
            <button
              type="button"
              onClick={toggleListening}
              className={`p-2 ${isListening ? "bg-red-100 text-red-600" : "bg-gray-100"
                } hover:bg-gray-200`}
              title={isListening ? "Stop Listening" : "Speak"}
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-2 py-2 hover:bg-blue-700"
            >
              Send
            </button>
          </form>

        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
