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

const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

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
            <a href="tel:+998886110440">
              <LuPhone /> +998 (88) 611-04-40
            </a>
          </Right>

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
        </ul>

        <div className="display-flex j-left">
          <a href="tel:+998886110440">
            <LuPhone /> +998 (88) 611-04-40
          </a>
        </div>
      </MobileMenu>
    </>
  );
};

export default Header;