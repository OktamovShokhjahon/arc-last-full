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
      question:
        "Bizning loyiha uchun mos bo'lgan dizayn uslubini qanday aniqlash mumkin?",
      answer:
        "Dizayn uslubini tanlash uchun avvalo sizning ehtiyojlaringiz va loyihaning xususiyatlarini aniqlash muhim. Bu, binoning funksional maqsadlari, joylashuvi, foydalanish materiallari va byudjet kabi omillarga bog'liq. Biz siz bilan birgalikda ushbu ehtiyojlarni tahlil qilib, loyihangiz uchun eng mos keladigan dizayn uslubini tavsiya qilamiz.",
    },
    {
      question: "Loyihani amalga oshirish muddati qancha davom etadi?",
      answer:
        "Loyihani amalga oshirish muddati bir qator omillarga, jumladan, loyihaning murakkabligi, loyihalash va tasdiqlash jarayonlari, shuningdek, qurilish ishlarining jadvaliga bog'liq. Dastlabki rejalashtirish va loyiha ko'rib chiqish jarayoni 1-2 oyni talab qilishi mumkin, shundan so'ng qurilish muddati aniqlanadi.",
    },
    {
      question:
        "Loyihada qanday materiallar ishlatiladi va ularning sifatiga qanday kafolat berasiz?",
      answer:
        "Biz loyihada ishlatiladigan materiallarni sizning talablaringiz va byudjetingizga muvofiq tanlaymiz. Biz faqat yuqori sifatli va sertifikatlangan materiallarni tanlaymiz va yetkazib beruvchilar bilan mustahkam hamkorlik o'rnatganmiz. Qurilish davomida materiallarning sifati va to'g'ri ishlatilishi ustidan doimiy nazorat olib boriladi.",
    },
    {
      question: "Loyihada energiya samaradorligini qanday oshirish mumkin?",
      answer:
        "Energiya samaradorligini oshirish uchun biz ekologik toza materiallar, energiya tejovchi yoritish tizimlari, izolyatsiya va boshqa texnologiyalarni qo'llaymiz. Shuningdek, binoning joylashuvi va dizaynini optimallashtirish orqali tabiiy yorug'lik va havoni maksimal darajada ishlatishga harakat qilamiz.",
    },
    {
      question:
        "Loyihani amalga oshirish davomida qancha pul sarflanishi mumkin?",
      answer:
        "Loyihaning umumiy qiymati loyihaning o'lchami, murakkabligi, ishlatiladigan materiallar va texnologiyalarga bog'liq. Dastlabki bosqichlarda biz sizga taxminiy byudjetni taqdim etamiz, keyinchalik loyiha davomida barcha xarajatlar doimiy ravishda nazorat qilinadi va sizga muntazam hisobot berib boriladi. Biz har doim byudjetni optimallashtirish va xarajatlarni samarali boshqarishga intilamiz.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="title" style={{ textAlign: "center" }}>
        Eng Ko'p So'raladigan Savollarga Javob
      </h1>
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
