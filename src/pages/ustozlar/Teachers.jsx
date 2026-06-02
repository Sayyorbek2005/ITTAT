import React from 'react'
import { Button, Title } from '../../style/StyleComponent'
import '../../App.css'
import './ustozlar.style'
// import { BizningKurslar } from '../bizningKurslarimiz/BizningKurslarimizData'
import { ustozlar } from './ustozlarData'
import { UstozlarSection } from './ustozlar.style'
import Success from '../success/Success'
import Motivation from '../motivation/Motivation'
import { useNavigate } from 'react-router-dom'

const Teachers = () => {
  const navigate = useNavigate(); // 2. Hook-ni chaqiramiz

    const ustozlarCardClick = (id) => {
        // Kurs sahifasiga yo'naltirish (masalan: /course/1)
        navigate(`/ustoz/${id}`);
    };
  return (
    <div className='ustozlar'> 

    <div className='max-width' >

      <UstozlarSection>
      <Title>
        Kuchli bilimlarga ega ustozlar
      </Title>
      <div className="ustozlar-card-cont">
        {ustozlar.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="salom" />

            <p className='ustoz-name'>
              {item.fullName}
            </p>

            <p>
              {item.kursUstozi}
            </p>
            <Button onClick={() => ustozlarCardClick(item.id)}>
              Batafsil ma`lumot
            </Button>
          </div>
        ))}
      </div>
      </UstozlarSection>
      <Success />

    </div>
      <Motivation/>
        </div>
  )
}

export default Teachers
