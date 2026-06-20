import {
  SectionWrapper,
  Container,
  Left,
  Center,
  Right,
  Tags,

} from "./Home.styles";


import { Button, ModalBackground, Title } from "../../style/StyleComponent";

import BizniTanlash from '../bizni tanlash/BizniTanlash'
import BizningKurslarimiz from "../bizningKurslarimiz/BizningKurslarimiz";

import img from "../../assets/hero.png";
import { useNavigate } from "react-router-dom";
import ModalKons from "../../components/modals/modalKonsultatsia/ModalKons";
import { useState } from "react";
import Coverking from "../Coverking/Coverking";
import TalimFormati from "../talimFormati/TalimFormati";
import Feedback from "../feedback/Feedback";
import Ishlash from "../ishlashadi/Ishlash";
import KoursesFuture from "../kursKelajak/KoursesFuture";
import Savollar from "../savolar/Savollar";

import { BizningKurslar } from '../bizningKurslarimiz/BizningKurslarimizData';



const Home = () => {

  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  //  ? go kourse

  const handleCardClick = (id) => {

    navigate(`/kurslar/${id}`);
  };



  return (
    <SectionWrapper>
      <div className="max-width">

        <Title>
          Innovatsiya va Texnoligiya olamida buyuklardan biri bo'lishga IT TAT sizga ko'makdosh
        </Title>
      </div>
      <Container className="max-width">


        {/* LEFT */}
        <Left>
          <img src={img} alt="img" />
        </Left>

        {/* CENTER */}
        <Center>
          {BizningKurslar && BizningKurslar.map((item, index) => (

            <Tags key={index} onClick={() => handleCardClick(item.id)} style={{ cursor: 'pointer' }} >
              <span>{item.nomi}</span>

            </Tags>
          ))}
        </Center>

        {/* RIGHT */}
        <Right className='right'>
          <p>

            O‘z qadriyatlariga ega va eng kuchli mutaxasislar jamlangan zamonaviy kasblar o‘quv markazi

          </p>

          <Button onClick={() => setShow(true)}>Bepul konsultatsiya olish</Button>
        </Right>

        {show && (
          <ModalBackground onClick={() => setShow(false)}>
            <div onClick={(e) => e.stopPropagation()}>
              <ModalKons onClose={() => setShow(false)} />
            </div>
          </ModalBackground>
        )}


      </Container>
      <BizniTanlash />
      <BizningKurslarimiz />
      <Coverking />
      <TalimFormati />
      <Feedback />
      <Ishlash />
      <KoursesFuture />
      <Savollar />

    </SectionWrapper>

    // nega bizni tanlashadi

  );
};

export default Home;