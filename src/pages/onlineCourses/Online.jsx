import React from 'react'
import { OnlineCourses } from './Online.styles'
import { Button, Title } from '../../style/StyleComponent'

// ? img
// import error from "../../assets/404.png";
import img_1 from "../../assets/frontend.png"; // ? images
import hour from "../../assets/qumsoat.png"; // ? images
import el from "../../assets/el.png"; // ? images

const Online = () => {

  const OpenTelegram = () => {
    const telegramUrl = "https://t.me/it_tat_qabul"; // Bu yerga o'z ssilkangizni qo'ying
    
    // Ssilkani yangi tabda (oynada) ochish xavfsiz usuli
    window.open(telegramUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <OnlineCourses data-aos="fade-down">

      <div className="max-width">
        <div className=" not-found">

          <Title className="not-img img-404">

            Online kurslarimizga o`tish uchun pastdagi tugmaga bosing!
          </Title>
          <img className="not-img err_img_1" src={img_1} alt="" />

          <img className="not-img err_img_3" src={hour} alt="" />
          <img className="not-img err_img_4" src={el} alt="" />

          <div className="online-but" >
            <Button
            onClick={OpenTelegram}
              // href="https://t.me/it_tat_qabul" // Bu yerga telegram profilingiz yoki kanalingiz ssilkasi qo'yiladi
              // target="_blank"             // Yangi tabda ochish uchun
              // rel="noopener noreferrer"
            >Online kurslar</Button>
          </div>
          {/* <a  href="/" className="back_button online-but">
            </a> */}
        </div>
      </div>
    </OnlineCourses>
  )
}

export default Online
