import styled from "styled-components";

// Asosiy konteyner
export const KurslarCont = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-20);

    .kont {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--gap-50);
    }

`;

// Karta konteyneri
export const CardContainer = styled.div`
  display: flex;
  align-self: center; // Markazga tekislash
  background: var(--white);
  border-radius: 20px;
  padding: 15px 15px;
  width: 100%;
  max-width: 625px;
  height: 400px;
  box-shadow: 0px 0px 10px 2px rgba(142, 141, 141, 0.26);
  /* border: 1px solid var(--e5); */
  
  @media (max-width: 750px) {
    flex-wrap: wrap;
    height: auto;
    text-align: start;


    .hr{
      display: none;
    }

  }

`;

// Chap qism (Mentor)
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 0px 0;
  border-right: 1px solid var(--e5);
  min-width: 100px;

   .nameBar{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 150px;
      
  };
  
  @media (max-width: 750px) {
  
    flex-direction: row;
    justify-content: flex-start;
    border: none;
    border-bottom: 1px solid var(--e5);
    margin-bottom: 20px;
    gap: var(--gap-30);
    width: 100%;
    padding:20px;


    img{
      width: 150px;
      height: 150px;
      object-fit: contain;
    }

    
    .nameBar{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      
  };

  }

  
`;




export const MentorImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  object-fit: contain;
  
`;


export const MentorName = styled.h3`
  color: var(--primary);
  margin: 15px 0 5px 0;
  font-size: 20px;
  font-weight: var(--font-weight-600);
  text-align: center;
  max-width: 120px;
  width: 100%;

  @media (max-width: 750px) {
   max-width :100%;
   text-align: start;
  }
`;

export const MentorTitle = styled.p`
  color: var(--e5);
  font-size: var(--font-size-20);
  text-align: center;
  margin: 0;

   @media (max-width: 750px) {
   max-width :100%;
   text-align: start;
  }
`;

// O'ng qism (Kurs ma'lumotlari)
export const RightSection = styled.div`
  flex: 1;
  padding-left: 20px;

  @media (max-width: 750px) {
    padding-left: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 750px) {
   
    button{
      font-size: 20px;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
`;

export const CourseTitle = styled.h2`
  color: var(--primary);
  font-size: 25px;
  font-weight: var(--font-weight-700);
  margin: 0;

 @media (max-width: 570px) {

    font-size: 18px;
    ;

  }

`;

export const DetailsButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all .3s ease;

  &:hover {
    background-color: var(--dark-primary-color);
    transform: translateY(-2px);
  }
  /* Mobile */
  @media (max-width: 570px) {
    padding: 5px !important;
    font-size: 16px !important;
    border-radius: 7px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }


`;

export const Description = styled.p`
  color: var(--black);
  font-size: var(--font-size-20);
  line-height: 1.6;
  margin-bottom: 25px;
  
  font-weight: 200 !important;
  @media (max-width: 750px) {
    color: var(--black);
  }
  
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-20);
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: var(--e5);
  font-size: var(--font-size-20);
  margin-bottom: 5px;
`;

export const Value = styled.span`
  color: var(--primary);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-600);
`; 