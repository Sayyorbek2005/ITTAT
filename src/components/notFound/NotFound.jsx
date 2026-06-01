import React, { useEffect } from "react";
import "./NotFound.css";

import error from "../../assets/404.png";
import img_1 from "../../assets/frontend.png"; // ? images
import hour from "../../assets/qumsoat.png"; // ? images
import el from "../../assets/el.png"; // ? images
import { Button } from "../../style/StyleComponent";
const NotFound = () => {

  useEffect(() => {
    document.title = "Bunday sahifa mavjudemas";
  }, []);

  return (
    <div className="not-found-cont">
        <div className="max-width">
          <div className=" not-found">
            <img className="not-img img-404"  src={error} alt="" />
            <img className="not-img err_img_1" src={img_1} alt="" />
           
            <img className="not-img err_img_3" src={hour} alt="" />
            <img className="not-img err_img_4" src={el} alt="" />

            <a  href="/" className="back_button">
               <Button>Bosh sahifaga qaytish</Button>
            </a>
          </div>
        </div>
    </div>
  );
};

export default NotFound;
