import React from 'react';
import './kursniTugatganda.css';
import { Title } from '../../style/StyleComponent';
import imgOne from '../../assets/res_1.png';
import imgTwo from '../../assets/res2.png';
import imgThree from '../../assets/res3.png';
import imgFour from '../../assets/res4.png';

const KursniTugatganda = () => {
  const benefitsData = [
    {
      id: 1,
      title: "Portfolio",
      image: imgOne,
      desc: "Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni tugatganingizda, sizning shaxsiy portfolioingiz shakllanadi."
    },
    {
      id: 2,
      title: "Networking",
      image: imgTwo,
      desc: "Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni tugatganingizda, sizning shaxsiy portfolioingiz shakllanadi."
    },
    {
      id: 3,
      title: "Ish taklifi",
      image: imgThree,
      desc: "Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni tugatganingizda, sizning shaxsiy portfolioingiz shakllanadi."
    },
    {
      id: 4,
      title: "Sertifikat",
      image: imgFour,
      desc: "Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni tugatganingizda, sizning shaxsiy portfolioingiz shakllanadi."
    }
  ];

  const truncateWords = (text, limit) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

  return (
    <div className="max-width">
      <section className="benefits-section">
        <Title>
          Kursni tugatganda nimalarga erishasiz
        </Title>
        <div className="benefits-grid">
          {benefitsData.map((item) => (
            <div className="benefit-card" key={item.id}>
              <div className="img-title-cont">
                <img src={item.image} alt={item.title} />
              <h3 className="card-title">{item.title}</h3>
              </div>
              <p className="card-description">
                {truncateWords(item.desc, 20)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KursniTugatganda;