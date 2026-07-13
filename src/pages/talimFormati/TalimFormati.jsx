// import Title from '../../style/StyleComponent'
import React from 'react'
import './talimformati.css'
import { Title } from '../../style/StyleComponent'

// ? img
import talimOne from '../../assets/talimformati.png'
import talimTwo from '../../assets/talimformati2.png'
import talimThree from '../../assets/talim3.png'






const TalimFormati = () => {
  return (
    <div className='talim'>
      <div className="max-width">

        <Title>
        Ta`lim formati

        </Title>

        <div className="talim-card-bar display-flex">
            <div className=" pad talim-left">
                <h1>
                    Individual
                </h1>
                <p>
                    Har bir o'quvchining bilim darajasi, maqsadlari va o‘rganish tezligiga moslashtirilgan maxsus o‘quv dasturi. Ushbu kurs orqali siz IT sohasini chuqur o‘zlashtirish, o‘z kasbiy mahoratingizni oshirish va individual yondashuv orqali o‘zingizga qulay va samarali usulda o‘qish imkoniyatiga ega bo‘lasiz
                </p>
                    <img src={talimThree} alt="" />
            </div>
            <div className='talim-right-cont'>
                <div className=" pad talim-right">
                    <h1>Mini guruh</h1>
                    <p>
                        Bu kichik guruhda (odatda 4-5 kishi) o‘qitish usuli bo‘lib, individual yondashuv va jamoaviy o‘rganish muhitini birlashtiradi. Ushbu kurs sizga zamonaviy IT yo‘nalishlarini samarali o‘rganish, amaliy mashg‘ulotlar orqali tajriba orttirish va jamoa bilan ishlash ko‘nikmalarini rivojlantirish imkonini beradi.
                    </p>
      <img src={talimOne} alt="" />
                </div>
                <div className=" pad talim-right">
                    <h1>Guruh</h1>
                    <p>
                        Bu 10-12 kishidan iborat jamoada ta’lim olish tizimi bo‘lib, o‘quvchilarga o‘zaro tajriba almashish, jamoaviy muhitda ishlash va IT sohasida zarur ko‘nikmalarni o‘zlashtirish imkonini beradi. Ushbu kurs turli darajadagi o‘quvchilar uchun mos bo‘lib, nazariy va amaliy mashg‘ulotlar uyg‘unligi asosida olib boriladi.

                    </p>
                    <img src={talimTwo} alt="" />
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default TalimFormati
