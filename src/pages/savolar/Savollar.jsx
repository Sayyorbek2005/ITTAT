import React from 'react';
import { useState } from "react";
import "./savollar.css";

// ? img
import faqImg from "../../assets/glossy.png";
import { Title } from '../../style/StyleComponent';

// ✅ faqs array komponent tashqarisida
const faqs = [
  {
    id: 1,
    question: "IT sohasi nima ?",
    answer: " - IT (Information Technology) – bu axborot texnologiyalari bo‘lib, kompyuter tizimlari, dasturiy ta’minot, ma’lumotlar bazasi, kiberxavfsizlik va boshqa texnologiyalarni o‘z ichiga oladi.",
  },
  {
    id: 2,
    question: "IT sohasida ishlash uchun oliy ma’lumot kerakmi ?",
    answer: " - Yo‘q, IT sohasi amaliy bilimga asoslangan. Ko‘plab muvaffaqiyatli dasturchilar universitet diplomisiz ham yaxshi daromad topishadi. Muhimi – amaliy tajriba, portfolio va real loyihalarda ishtirok etish.",
  },
  {
    id: 3,
    question: "IT sohasini o‘rganish uchun qancha vaqt kerak?",
    answer: " - Boshlang‘ich bilimlar – 3-6 oy O‘rta darajaga chiqish – 6-12 oy Professional daraja – 1,5-2 yil Bu o‘rganish tezligiga va qancha vaqt ajratishingizga bog‘liq.",
  },
  {
    id: 4,
    question: "IT mutaxassislarining o‘rtacha maoshi qancha?",
    answer: " - IT mutaxassislarining o‘rtacha maoshi qancha? - O‘zbekistonda: 5,000,000 – 40,000,000 so‘m Dunyo bo‘yicha: 1,000 – 10,000$ (darajaga qarab) Freelancerlar esa o‘z loyihalaridan yanada ko‘proq daromad olishlari mumkin.",
  },
  {
    id: 5,
    question: "IT sohasida qanday ish topish mumkin ?",
    answer: " - Frilans platformalarida ishlash (Upwork, Fiverr, Freelancer, Toptal) Mahalliy va xalqaro kompaniyalarga rezume yuborish (LinkedIn, Indeed, Glassdoor) Portfolio yaratish va GitHub’da loyihalar joylashtirish Kurslar va bootcamp-larni tugatib, tajriba orttirish",
  },
  {
    id: 6,
    question: "IT sohasida ishlash uchun ingliz tili kerakmi ?",
    answer: " - Ha, ingliz tili IT sohasida juda muhim. Ko‘p texnik hujjatlar, dasturlash tillari va xalqaro loyihalar ingliz tilida bo‘ladi. Kamida B1-B2 daraja bo‘lsa, yaxshi ish topish osonlashadi.",
  },
  {
    id: 7,
    question: "IT kurslarini tugatganimdan keyin darhol ish topa olamanmi?",
    answer: " - Ha, agar siz kurs davomida amaliy loyihalar yaratgan bo‘lsangiz, portfolio tayyor bo‘lsa va intervyularga tayyorgarlik ko‘rsangiz, darhol ish topish imkoniyati yuqori bo‘ladi.",
  },
  {
    id: 8,
    question: "Qaysi IT yo‘nalishi eng foydali va kelajakda talabgir ?",
    answer: " - Sun’iy intellekt (AI) va Data ScienceKiberxavfsizlik Cloud Computing (AWS, Azure, Google Cloud) Blockchain va kriptovalyuta texnologiyalari Dasturlash (FullStack, Mobil ilovalar)",
  },
];
  
// ✅ ArrowIcon
const ArrowIcon = ({ isOpen }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3B4FD8"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: "transform 0.3s ease",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

const Savollar = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="max-width">
        <Title>Tez tez beriladigan savollar</Title>

        <div className="faq-body">
          <div className="faq-image">
            <img src={faqImg} alt="FAQ Illustration" />
          </div>

          <div className="faq-list">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div className="faq-item" key={faq.id}>
                  <div className="faq-header" onClick={() => toggle(faq.id)}>
                    <span className="faq-question">{faq.question}</span>
                    <div className="faq-arrow-btn">
                      <ArrowIcon isOpen={isOpen} />
                    </div>
                  </div>
                  <div className={`faq-answer-wrapper${isOpen ? " open" : ""}`}>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savollar;