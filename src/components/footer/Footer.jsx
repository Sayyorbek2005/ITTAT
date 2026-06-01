import {
  FooterWrapper,
  Container,
  Left,
  Logo,
  Description,
  Column,
  Title,
  LinkItem,
  Socials
} from "./Footer.styles";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

import { BizningKurslar } from '../../pages/bizningKurslarimiz/BizningKurslarimizData'


import logo from "../../assets/footer_logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate()
   const handleCardClick = (id) => {
        // Kurs sahifasiga yo'naltirish (masalan: /course/1)
        navigate(`/kurslar/${id}`);
    };
  return (
    <FooterWrapper>
      <Container className="max-width">

        {/* LEFT */}
        <Left>
          <Logo src={logo} alt="logo" />
          <Description>
            Innovatsiya va texnologiya orqali O‘zbekiston yoshlarini dunyoga tanitish
          </Description>
        </Left>

        {/* NAVIGATION */}
        <Column>
          <Title>Navigatsiya</Title>
          <LinkItem onClick={() => navigate('/')}>Bosh sahifa</LinkItem>
          <LinkItem onClick={() => navigate('/kurslar')}>Kurslar</LinkItem>
          <LinkItem onClick={() => navigate('/ustozlar')}>Ustozlar</LinkItem>
          <LinkItem onClick={() => navigate('/online')}>Online kurslar </LinkItem>

        </Column>

        {/* COURSES */}
        <Column>
          <Title>Kurslar</Title>
          {BizningKurslar.map((item, index) => (
            <LinkItem
               key={index} onClick={() => handleCardClick(item.id)}
            >
              {item.nomi}
            </LinkItem>
          ))}

        </Column>

        {/* CONTACT */}
        <Column>
          <Title>Aloqa</Title>
          <LinkItem href="tel:+998886110440">+998 (88) 611-04-40</LinkItem>

          <Socials>

            <a
              href="https://t.me/it_tat_qabul"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >

              <FaTelegramPlane />
            </a>

            <a href="https://instagram.com/it_tat_samarkand"
              style={{ color: 'white' }}>

              <FaInstagram />
            </a>

          </Socials>
        </Column>

      </Container>
    </FooterWrapper >
  );
};

export default Footer;