import React from "react";
import "./ustoz.css";
import { Title } from "../../style/StyleComponent";
import { useNavigate, useParams } from "react-router-dom";
// import { BizningKurslar } from "../bizningKurslarimiz/BizningKurslarimizData";
import { ustozlar } from "../ustozlar/ustozlarData";
import { IoChevronBackOutline } from "react-icons/io5";
import Success from '../success/Success'
// import dJarayon from '../../assets/memati.mp4'

const Ustoz = () => {
  const { id } = useParams();

  const navigate = useNavigate()

  const teacher = ustozlar.find(
    (item) => item.id === Number(id)
  );

  if (!teacher) {
    return <h1>Ustoz topilmadi</h1>;
  }

  return (
    <div className="max-width" data-aos="fade-down">

    <div className="ustoz-page">
      
      {/* top */}
      <div className="ustoz-top" onClick={()=> navigate(-1)}>
        <IoChevronBackOutline className="back-icon" />
        <span>orqaga</span>
      </div>

      {/* card */}
      <div className="ustoz-card">

        {/* left */}
        <div className="ustoz-image-box">
          <img
            src={teacher.img}
            alt={teacher.fullName}
            className="ustoz-image"
          />
        </div>

        {/* right */}
        <div className="ustoz-content">

          <h1 className="ustoz-name">
            {teacher.fullName}
          </h1>

          <h3 className="ustoz-job">
            {teacher.kursUstozi} 
          </h3>

          {/* stats */}
          <div className="ustoz-stats">

            <div className="stat-box">
              <strong>Tajribasi</strong>
              <p>{teacher.tajriba}</p>
            </div>

            <div className="stat-box">
              <strong>Mamnun o‘quvchilar</strong>
              <p>{teacher.mamnunOquvchilar}</p>
            </div>

            <div className="stat-box">
              <strong>Loyihalar</strong>
              <p>{teacher.loyihalar}</p>
            </div>

          <p>
            {teacher.qoshimchaMalumot}
          </p>
          </div>

          {/* description */}
          <p className="ustoz-text">
            {teacher.tavsif}
          </p>

        </div>
      </div>

      {/* ? portfolio */}
      
      

        {/* ? dars jarayoni */}
        <div className="dars-jarayoni">

        <Title>
          Dars jarayoni
        </Title>

        <video controls>
          <source src={"https://youtu.be/i24GQAhdvoE?si=nBQRYY3Q6OZuEqkB"} />
        </video>

        </div>



    </div>

      <Success />
    </div>
  );
};

export default Ustoz;