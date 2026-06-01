import styled from 'styled-components';

export const CourseDetailPage = styled.div`
    background-color: var(--white);
    min-height: 100vh;
    padding:  100px 0px 0px 0px;



    .texnologialar{
        max-width: 1300px;
        margin: auto;
        padding-bottom: 50px;
    }
    .texnologialar > h1{
        padding-top: 50px;
    }


.texnologialar > .tex-cont{
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--gap-50);

    
}  

.tex-cont div > button{
    max-width: 250px;
    width: 100%;
    max-height: 100px;
    height: 100%;
    border-radius: 40px;
    font-weight: 400px;
    font-size: var(--font-size-30);
    color: var(--primary);
    border: 1px solid var(--primary);
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    }

    /* ? ortacha maosh */
    .stats-cards{
        background-color: var(--primary);
        padding: 50px 0px;
        h1{
            padding-top: 0px;
            color: var(--white) !important;
        }
    }

    .ortacha{
        gap: 50px;
        flex-wrap: wrap;

        div{
            padding: 20px 40px;
            border-radius: 15px;
            background-color: var(--white);
            color: var(--primary);
            line-height: 45px;
            h2{
                font-size: var(--font-size-40);
                font-weight: var(--font-weight-400);
                font-family: MyCustomFont;
            }
            p{
                font-size: var(--font-size-25);
            }
        }
        
    }

    @media(max-width:600px){
        .ortacha > div{
            width: 100%;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }
    .stats-bottom{
        padding: 50px 0px 0px 0px;
        gap: 50px;
        flex-wrap: wrap;
    }

    .bottom-item{
        gap: 20px;
    }
    .icon img{
        width: 100px;
    }
    .bottom-text >h3{
            font-size: var(--font-size-30);
            font-weight: var(--font-weight-400);
            font-style: MyCustomFont;
            color: var(--white);
            max-width: 250px;
    }

    .oylik-statistikasi{

        background-color: var(--f5);
        padding: 50px 0px 100px 0px;

        h1{
            padding-top: 0px;
        }
    }

    .cont-dunyo{
        gap: 50px;
        flex-wrap: wrap;
    }

    .dunyo{
        padding: 20px 40px;
        color: var(--primary);
        background-color: var(--white);
        border-radius: 10px;
    }

    .dunyo > h1{
        max-width:350px;
        padding: 30px 0px;
        font-size: var(--font-size-30);
        font-weight: 400;

    }
    
    .dunyo > div{
        
        align-items: flex-end;
    }


    .senior{
        background-color: #e8e7f4;
        color: var(--dark-primary-color);
        width: 150px;
        height: 300px;
        border-radius: 20px 20px 0px 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        padding-top: 10px;

        h2{
            font-size: var(--font-size-20);
            padding: 5px;
        }
    }

       @media(max-width:600px){
        .senior {
            width: auto;
        }
    }
    .senior > div{
        padding: 30px 10px;
        background-color: var(--dark-primary-color);
        color: var(--white);
        height: 250px;
        width: 100%;
        border-radius: 20px 20px 0px 20px;
      
    }
    .s-two{
        border-radius: 20px 20px 0px 0px;

    }
    .s-two{
        height: 250px;
    }
    .s-two div{
    border-radius: 20px 20px 0px 0px;

    }
    .s-three{
        height: 205px;
    }

    .s-three{
        border-radius: 20px 20px 20px 0px;

    }
    .s-three div{
        border-radius: 20px 20px 20px 0px;
        

    }


`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: var(--gap-10);
    background: none;
    border: none;
    color: var(--c3);
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-600);
    cursor: pointer;
    margin-bottom: 50px;
    transition: 0.3s;
    &:hover { color: var(--primary); }
    cursor: pointer;
`;

export const MainCard = styled.div`
    background: var(--white);
    display: flex;
    gap: var(--gap-50);
    align-items: center;
    padding: 20px 0px 100px 0px;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: var(--gap-50);
    }
`;



export const ImageSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    img {
        width: 100%;
        max-width: 450px;
        object-fit: contain;
        filter: drop-shadow(0 20px 40px rgba(67, 97, 238, 0.2));
    }
`;

export const InfoSide = styled.div`
    flex: 1.2;
    h1 {
        font-family: MyCustomFont;
        font-size: var(--font-size-40);
        color: var(--dark-primary-color);
        margin-bottom: 20px;
        font-weight: var(--font-weight-700);
        
    }
    p.description {
        color: var(--c3);
        line-height: 1.7;
        font-size: var(--font-size-20);
        margin-bottom: 30px;
    }
`;

export const AiBanner = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background: var(--white);
    /* padding: 12px 20px; */
    border-radius: 20px;
    margin-bottom: 35px;
    .badge {
        background: linear-gradient(135deg, #8a2be2, var(--primary));
        color: white;
        padding: 8px 18px;
        border-radius: 12px;
        font-weight: bold;
        font-size: 20px;
    }
    p {
        font-size: var(--font-size-18);
        color: var(--primary);
        font-weight: 400;
        margin: 0;
    }
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;
    @media (max-width: 600px) { grid-template-columns: 1fr 1fr; }
`;

export const StatItem = styled.div`
    span {
         color: #a0a0a0;
          font-size: var(--font-size-20);
           display: block;
            margin-bottom: 5px;
         }
    h2 {
         font-size:var(--font-size-30);
          color: var(--primary);
           margin: 0; }
    .practice {
        background: var(--primary);
        color: white;
        font-size: var(--font-size-18);
        padding: 4px 8px;
        border-radius: 6px;
        display: inline-block;
        margin-top: 8px;
    }
`;

export const ActionFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 20px;
    }
`;

export const EnrollButton = styled.button`
    background: var(--primary);
    color: white;
    border: none;
    padding: 18px 45px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    &:hover { background: var(--primary-dark); transform: translateY(-2px); }
    @media (max-width: 600px) { width: 100%; }
`;

export const PriceTag = styled.div`
    span {
         color: #a0a0a0;
          font-size: var(--font-size-20); }
    h3 {
        font-size: var(--font-size-35);
        color: var(--primary);
        margin: 0;
        span { font-size: var(--font-size-18); color: var(--primary); font-weight: var(--font-weight-600); }
    }
`;