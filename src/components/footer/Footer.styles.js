import styled from "styled-components";

/* WRAPPER */
export const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #3d51e3, #2b3bbd);
  padding: 60px 0;
  color: var(--white);
`;

/* CONTAINER */
export const Container = styled.div`
 
  display: flex;
  justify-content: space-between;
  gap: var(--gap-20);
  flex-wrap: wrap;
`;

/* LEFT */
export const Left = styled.div`
  max-width: 250px;
`;

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: var(--font-size-18);
  line-height: 1.6;
  opacity: 0.9;
`;

/* COLUMN */
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-10);
  min-width: 180px;
`;

/* TITLE */
export const Title = styled.h3`
  font-size: var(--font-size-25);
  margin: 20px 0px;
  font-weight: var(--font-weight-400);
`;

/* LINKS */
export const LinkItem = styled.a`

  font-size: var(--font-size-20);
  color: var(--white);
  opacity: 0.85;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    transform: translateX(5px);
  }
`;

/* SOCIALS */
export const Socials = styled.div`
  display: flex;
  gap: var(--gap-10);
  margin-top: var(--gap-10);

  svg{
  font-size: var(--font-size-35);
  padding: 5px;
  border: 1px solid var(--white);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: var(--white);
    color: var(--primary);
    transform: translateY(-3px);
  }
  
  }
`;