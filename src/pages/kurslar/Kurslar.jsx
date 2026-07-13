import React from 'react';
import { Title } from '../../style/StyleComponent';
import { KurslarCont } from './Kurslar.styles';
import * as S from './Kurslar.styles';

// ? data 
import { BizningKurslar } from '../bizningKurslarimiz/BizningKurslarimizData'
import KursniTugatganda from '../kursTugatganda/KursniTugatganda';
import TalimFormati from "../talimFormati/TalimFormati";
import { useNavigate } from 'react-router-dom';
const Kurslar = () => {
  const navigate = useNavigate()

const handleCardClick = (id) => {
    navigate(`/kurslar/${id}`);
};


  return (
    <>
    <div className='max-width'>
      <KurslarCont>
        <Title>Kurslar</Title>

        <div className="kont">


          {BizningKurslar.map((item, index) => (
            <S.CardContainer key={index}>
              {/* Chap tomondagi mentor qismi */}
              <S.LeftSection>
                <S.MentorImage src={item.imgUstoz} alt={item.ustoz} />
                <div className='nameBar'>
                <S.MentorName>{item.ustoz}</S.MentorName>
                <S.MentorTitle>{item.kategoriya}</S.MentorTitle>
                </div>
              </S.LeftSection>

              {/* O'ng tomondagi ma'lumotlar qismi */}
              <S.RightSection>
                <S.Header>
                  <S.CourseTitle>{item.nomi}</S.CourseTitle>
                  <S.DetailsButton onClick={() => handleCardClick(item.id)}>Batafsil ma'lumot</S.DetailsButton>
                </S.Header>

                <S.Description  
                
                

                >

                  {item.tavsif.split(' ').length > 10
                    ? item.tavsif.split(' ').slice(0, 10).join(' ') + '...'
                    : item.tavsif}
                </S.Description>
                <hr className='hr' />
                <br />
                <S.InfoGrid>
                  <S.InfoItem>
                    <S.Label>Kurs davomiyligi</S.Label>
                    <S.Value>{item.davomiyligi}</S.Value>
                  </S.InfoItem>

                  <S.InfoItem>
                    <S.Label>Dars soati</S.Label>
                    <S.Value>{item.nechaSoat}</S.Value>
                  </S.InfoItem>

                  <S.InfoItem>
                    <S.Label>Haftada</S.Label>
                    <S.Value>{item.haftada}</S.Value>
                  </S.InfoItem>

                  <S.InfoItem>
                    <S.Label>Necha soat</S.Label>
                    <S.Value>{item.nechaSoat}</S.Value>
                  </S.InfoItem>
                </S.InfoGrid>
              </S.RightSection>
            </S.CardContainer>
          ))}
        </div>
      </KurslarCont>
    </div>
        <TalimFormati />
      <KursniTugatganda />
    </>
  );
}

export default Kurslar;