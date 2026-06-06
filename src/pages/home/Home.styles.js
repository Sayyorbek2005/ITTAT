import styled from "styled-components";

/* WRAPPER */
export const SectionWrapper = styled.section`
  padding: 50px 0;
  
`;

/* CONTAINER */
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr;
  gap: 20px;
  padding-bottom: 50px;
  margin-bottom: 50px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/* LEFT */
export const Left = styled.div`
  background: #eaeaea;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* CENTER */
export const Center = styled.div`
  background: var(--primary);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 5px;
  flex-direction: column;

`;

/* TAGS */
export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    border: 1px solid var(--white);
    color: var(--white);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: var(--font-size-18);
    width: fit-content;
    transition: all .3s ease;
    cursor: pointer;

    &:hover{
        transform: translateX(10px);
    }
  }
`;

/* RIGHT */
export const Right = styled.div`
  background: var(--primary);
  border-radius: 16px;
  padding: 20px;
  color: var(--black);
  height: clamp(420px, 1.2vw, auto);
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  /* TITLE */
p{

    font-size: var(--font-size-25);
    line-height: 1.5;
    margin-bottom: var(--gap-20);
    color: var(--white);
    font-family: MyCustomFont;
    
  
}

button{
    background-color: var(--white);
    color: var(--primary);
    border: 1px solid transparent;
    
    width: 100%;
    transition: all .3s ease;

    &:hover{
        background-color: var(--primary);
    color: var(--white);
    border: 1px solid var(--white);

    }
}

@media(max-width: 600px){
    .right{
      height: 200px !important;
    }
  }
`;




