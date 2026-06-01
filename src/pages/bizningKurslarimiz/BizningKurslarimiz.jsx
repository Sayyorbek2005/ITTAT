import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate-ni import qilamiz
import '../../App.css';
import './bizningKurslarimiz.css';
import { BizningKurslar } from './BizningKurslarimizData';
import { FaArrowRight } from 'react-icons/fa';
import { ModalBackground, Title } from '../../style/StyleComponent';
import ModalRegist from '../../components/modals/modalRegist/ModalRegist';

const BizningKurslarimiz = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate(); // 2. Hook-ni chaqiramiz

    const handleCardClick = (id) => {
        // Kurs sahifasiga yo'naltirish (masalan: /course/1)
        navigate(`/kurslar/${id}`);
    };

    return (
        <div className="bizningKurslarimiz " data-aos="fade-down">
            <div className="max-width">
                <Title>Bizning kurslarimiz</Title>

                <div className="courses-grid">
                    {BizningKurslar && BizningKurslar.map((item, index) => (
                        <div
                            className="course-card"
                            key={index}
                            onClick={() => handleCardClick(item.id)} // 3. Card-ga click event beramiz
                            style={{ cursor: 'pointer' }} // Kursorni ko'rsatkich shakliga keltiramiz
                        >
                            <div className="card-top">
                                <div className="top-left">
                                    <span className="cat-name">{item.nomi} - {item.davomiyligi}</span>
                                    {/* <span className="separator">—</span>
                                    <span className="duration">{item.davomiyligi}</span> */}

                                    {item.amaliyot && (
                                        <span className="practice-tag">{item.amaliyot}</span>
                                    )}
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="title-row">
                                    <h2 className="course-title">{item.nomi}</h2>
                                    <div className="ai-label">
                                        <div>
                                            <p>

                                        Ai 
                                            </p>
                                        <p>
                                            ✦
                                            </p>
                                        </div>
                                        </div>
                                </div>
                                <p className="course-description">
                                    {item.tavsif.split(" ").slice(0, 15).join(" ")}
                                    {item.tavsif.split(" ").length > 15 && "..."}
                                </p>
                            </div>

                            <div className="card-bottom">
                                {/* 4. e.stopPropagation() - Button bosilganda faqat modal ochiladi, card-ga o'tmaydi */}
                                <button
                                    className="arrow-circle"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpen(true);
                                    }}
                                >
                                    <FaArrowRight />
                                </button>

                                <div className="abstract-graphic">
                                    <img src={item.img} alt={item.nomi} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {open && (
                <ModalBackground onClick={() => setOpen(false)}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <ModalRegist onClose={() => setOpen(false)} />
                    </div>
                </ModalBackground>
            )}
        </div>
    );
};

export default BizningKurslarimiz;