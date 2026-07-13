import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuPhone, LuMenu, LuX } from "react-icons/lu"; // Ikonkalar
import logo_header from "../../assets/result.svg";

import {
  HeaderWrapper,
  Container,
  Logo,
  Nav,
  Right,
  MenuIcon,
  MobileMenu,
  Overlay
} from "./Header.styles";
import { Socials } from "../footer/Footer.styles";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Button, ModalBackground } from "../../style/StyleComponent";
import ModalRegist from "../modals/modalRegist/ModalRegist";

const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const [show, setShow] = useState(false)

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <>
      <HeaderWrapper data-aos="fade-down">
        <div className="max-width">

        <Container>
          <Logo src={logo_header} onClick={() => navigate("/")} alt="Logo" />

          {/* Desktop Nav */}
          <Nav>
            <li><NavLink to="/">Bosh sahifa</NavLink></li>
            <li><NavLink to="/kurslar">Kurslar</NavLink></li>
            <li><NavLink to="/ustozlar">Ustozlar</NavLink></li>
            <li><NavLink to="/online">Online kurslar</NavLink></li>
          </Nav>

          {/* Desktop Telefon */}
          <Right>
            <a href="tel:+998886110440" style={{marginRight: '10px'}}>
              <LuPhone /> +998 (88) 611-04-40
            </a>
            <Button onClick={() => setShow(true)} >
              Ro`yxatdan o`tish
            </Button>
          </Right>

            {show && (
                    <ModalBackground onClick={() => setShow(false)}>
                      <div className="hed-regist" onClick={(e) => e.stopPropagation()}>
                        <ModalRegist onClose={() => setShow(false)} />
                      </div>
                    </ModalBackground>
                  )}

          {/* Mobil uchun Menu Icon */}
          <MenuIcon onClick={toggleMenu}>
            {isActive ? <LuX /> : <LuMenu />}
          </MenuIcon>
        </Container>
          </div>
      </HeaderWrapper>

      {/* Orqa fon xiralashishi */}
      <Overlay active={isActive} onClick={toggleMenu} />

      {/* O'ngdan chiquvchi mobil menyu */}
      <MobileMenu active={isActive}>
        <ul>
          <li onClick={toggleMenu}><NavLink to="/">Bosh sahifa</NavLink></li>
          <li onClick={toggleMenu}><NavLink to="/kurslar">Kurslar</NavLink></li>
          <li onClick={toggleMenu}><NavLink to="/ustozlar">Ustozlar</NavLink></li>
          <li onClick={toggleMenu}><NavLink to="/online">Online kurslar</NavLink></li>

        <div className="display-flex j-left" style={{ borderBottom: "1px solid var(--primary)", paddingBottom: "20px", marginBottom: "10px" }}>
          <a style={{ color: "var(--primary)" }} href="tel:+998886110440">
            <LuPhone /> +998 (88) 611-04-40
          </a>
        </div>
           <Socials>
          
                      <a
                        href="https://t.me/it_tat_qabul"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid var(--primary)", padding: "5px", borderRadius: "10px" }}
                      >
          
                        <FaTelegramPlane style={{ fontSize: "35px" }} />
                      </a>
          
                      <a href="https://instagram.com/it_tat_samarkand"
                        style={{ color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid var(--primary)", padding: "5px", borderRadius: "10px" }}>
          
                        <FaInstagram style={{ fontSize: "35px" }} />
                      </a>
          
                    </Socials>
        </ul>

      </MobileMenu>
    </>
  );
};

export default Header;