// import React, { useState } from 'react';
import './crOtish.css';
// Rasmni o'z loyihangizdagi manzildan import qiling
import programIllustration from '../../assets/info.png'; 

import ModalRegist from '../../components/modals/modalRegist/ModalRegist';

const CROtish = () => {

  return (
    <section className="download-section">
      <div className="max-width">
        <div className="download-container">
          
          {/* Chap tomon: Rasmlar va belgilar */}
          <div className="illustration-box">
            <img src={programIllustration} alt="Dastur rasmi" />
          </div>

          {/* O'ng tomon: Shaffof forma */}
          <div className="glass-form-card">
            <h2 className="form-title">
              Kursimizga qatnashish uchun ma'lumotlaringizni qoldiring
            </h2>
            <ModalRegist />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CROtish;