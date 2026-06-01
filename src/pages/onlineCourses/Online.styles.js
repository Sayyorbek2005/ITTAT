import styled from "styled-components";

export const OnlineCourses = styled.section`
max-height: 100vh;
min-height: 100vh;
height: 100%;
position: relative;




.not-found-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh !important;
    min-height: 100vh;
    height: 100%;
    background-color: var(--white);
    overflow: hidden;
}
.not-img {
  
    max-width: 200px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.img-404{
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 500px;
    width: 100%;
    z-index: 999;
   
}

.err_img_1{
    position: absolute;
    top: 20%;
    left: 20%;
}
.err_img_2{
    position: absolute;
    top: 20%;
    left: 70%;
}
.err_img_3{
    position: absolute;
    top: 70%;   
    left: 10%;
}
.err_img_4{
    position: absolute;
    top: 80%;
    left: 80%;
}
.online-but {
    
    position: absolute !important;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
}


`