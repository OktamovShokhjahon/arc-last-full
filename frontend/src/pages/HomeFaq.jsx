// src/FAQ.js
import React, { useState } from "react";
import "../assets/css/faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Vite?",
      answer:
        "Vite is a modern build tool that provides a fast development environment.",
    },
    {
      question: "How do I install dependencies?",
      answer:
        "You can use npm or yarn to install dependencies listed in your package.json.",
    },
  ];

  return (
    <div className="faq-container">
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            {item.question}
            <i
              className={`fa-solid fa-plus ${
                activeIndex === index ? "rotate" : ""
              }`}
            ></i>
          </div>
          <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
