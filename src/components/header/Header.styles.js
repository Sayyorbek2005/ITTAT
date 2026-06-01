import styled, { keyframes } from "styled-components";

/* LOGO UCHUN ANIMATSIYA */
const jelloHorizontal = keyframes`
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.1, 0.9, 1); }
  40% { transform: scale3d(0.9, 1.1, 1); }
  100% { transform: scale3d(1, 1, 1); }
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const Logo = styled.img`
  height: 60px;
  cursor: pointer;
  &:hover { animation: ${jelloHorizontal} 0.6s both; }
`;

/* KOMPYUTER UCHUN NAVIGATSIYA */
export const Nav = styled.ul`
  display: flex;
  gap: var(--gap-30);
  list-style: none;
  margin: 0;

  a {
    text-decoration: none;
    color: var(--black);
    font-weight: var(--font-weight-600);
    font-size: var(--font-size-16) !important;
    font-size: 15px;
    transition: 0.3s;
    &.active { color: var(--primary); }
    &:hover { color: var(--primary); }
  }

  @media (max-width: 992px) {
    display: none; /* 992px dan kichik ekranda yo'qoladi */
  }
`;

/* KOMPYUTER UCHUN O'NG TOMON */
export const Right = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: var(--font-weight-700);
    font-size: var(--fontsize-18);
    text-decoration: none;
    /* color: var(--primary); */
    display: flex;
    align-items: center;
    gap: var(--gap-10);
  }

  @media (max-width: 992px) {
    display: none; /* 992px dan kichik ekranda yo'qoladi */
  }
`;

/* MENU ICON (FAQAT MOBILDA CHIQADI) */
export const MenuIcon = styled.div`
  display: none;
  font-size: var(--font-size-35);
  cursor: pointer;
  color: var(--black);
  margin-right: 20px;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
  }
`;

/* MOBIL MENYU PANELI */
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 500px;
  width: 100%;
  border-bottom-left-radius: 300px;
  height: 100vh;
  background: #fff;
  z-index: 1001;
  padding: 60px 30px;
  display: flex;
  flex-direction: column;
  gap: var(--gap-30);
  box-shadow: -8px 0 25px rgba(0, 0, 0, 0.15);

  /* 🔥 SENIOR TO'LQIN ANIMATSIYASI */
  /* Animatsiya o'ng-yuqori burchakdan (top right) markaz bo'lib boshlanadi */
  transform-origin: top right; 
  
  transition: 
    transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), 
    border-bottom-left-radius 0.7s cubic-bezier(0.25, 1, 0.5, 1),
    opacity 0.5s ease;

  /* Yopiq holatda yuqoriga va o'ngga qisqarib, kichrayib turadi (To'lqin qaytishi) */
  transform: ${({ active }) => (active ? "translate(0, 0) scale(1)" : "translate(40px, -40px) scale(0)")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  
  /* To'lqin sohilga urilganda radius yoyiladi (Silliqlashadi) */
  border-bottom-left-radius: ${({ active }) => (active ? "120px" : "300px")};

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--gap-20);

    /* Ichki elementlar ham to'lqin yo'nalishida (top-right dan bottom-left ga) diagonal qalqib chiqadi */
    opacity: ${({ active }) => (active ? "1" : "0")};
    transform: ${({ active }) => (active ? "translate(0, 0)" : "translate(30px, -20px)")};
    transition: opacity 0.5s ease 0.25s, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.25s;

    a {
      text-decoration: none;
      color: #333;
      font-size: var(--font-size-25);
      font-weight: var(--font-weight-600);
      display: inline-block;
      transition: color 0.2s ease, transform 0.2s ease;

      &:hover {
        transform: translateX(4px);
      }

      &.active {
        color: var(--primary);
      }
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
  opacity: ${({ active }) => (active ? "1" : "0")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transition: 0.3s ease;
`;