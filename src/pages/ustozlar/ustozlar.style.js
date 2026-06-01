import styled from "styled-components";

export const UstozlarSection = styled.section`

    padding-bottom: 50px;
    
    h1{
        padding:150px 0px  50px 0px;
    }
    
    .ustozlar-card-cont{
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--gap-30);
  >   div{
        border: 1px solid var(--primary);
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        max-width: 300px;
        width: 100%;
        height: 350px;
        position: relative;
        
        
        img{
            border-radius: 15px;
            width: 100%;
            max-height: 200px;
            height: 100%;
            background-position: center;
            background-size: cover;
            object-fit: contain;
        }

        .ustoz-name{
            font-size: 20px;
            color: var(--primary);
            font-weight: 400;
        }
        p{
            font-size: 18px;
            font-weight: 400;
            margin: 5px 0px;
        }
        button{
            /* width: 100%; */
            padding: 0px !important;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            position: absolute;
            bottom: 10px;
            left: 10px;
            right: 10px;
            background-color: var(--white);
            color: var(--primary);
            transition: all .3s ease;
            border: 1.5px solid var(--primary);

            &:hover{
                background-color: var(--primary);
                color: var(--white);
            }
        }
    }

}


`