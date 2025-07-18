import React, { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react"; // Modern and attractive icon

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 text-white shadow-[0_4px_20px_rgba(99,102,241,0.5)] hover:shadow-[0_6px_30px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUpCircle size={28} className="text-white drop-shadow" />
    </button>
  );
};

export default ScrollToTopButton;
