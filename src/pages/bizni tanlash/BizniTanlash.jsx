import React, { useState } from 'react'
import './bizniTanlash.css'
import '../../App.css'
import cardOne from '../../assets/negabizni tanlashadi_i1.png'
import cardTwo from '../../assets/negabizni tanlashadi_i2.png'
import cardThree from '../../assets/negabizni tanlashadi_i3.png'
import cardFour from '../../assets/negabizni tanlashadi_i4.png'
import { Title } from '../../style/StyleComponent'


const BizniTanlash = () => {

    const [inform] = useState([
        {
            img: cardOne,
            title: "Yuqori malakali mentorlar",
            desc: " Bizning mentorlarimiz xalqaro darajadagi tajribali mutaxassislar. Ular o‘z sohasida katta tajribaga ega bo‘lib, o‘quvchilarga real loyihalar ustida ishlashni o‘rgatadi va ularning professional ko‘nikmalarini rivojlantirishda yaqindan ko‘mak beradi.)"

        },
        {
            img: cardTwo,
            title: "Real loyihalarda amaliyot",
            desc: " Bizda o‘quvchilar nazariyani amaliyot bilan mustahkamlashadi! Ular real loyihalarda ishtirok etib, dasturlash, muammolarni hal qilish va jamoa bilan ishlash ko‘nikmalarini rivojlantirishadi. Bu esa ularning kelajakdagi ish faoliyatiga mustahkam poydevor yaratadi"

        },
        {
            img: cardThree,
            title: "Natijaga yo'naltirilgan ta'lim",
            desc: " Natijaga yo‘naltirilgan ta’lim – muvaffaqiyat garovi! Bizning o‘quv tizimimiz o‘quvchilarning haqiqiy natijalarga erishishini ta’minlaydi. Darslar davomida: Amaliy mashg‘ulotlar, Mentorlar ko‘magi, Ishga tayyorgarlik jarayonlari yuritiladi"

        },
        {
            img: cardFour,
            title: "Ish takliflari",
            desc: " IT TAT o‘quv markazida o‘qishni muvaffaqiyatli yakunlagan eng iqtidorli o‘quvchilarga ishga joylashish imkoniyati taqdim etiladi."

        },
    ])


    return (
        <div className='bizni-tanlash' >
            <Title>
                Nimaga bizni tanlashadi
            </Title>
            <div className="max-width">

                <div className='display-flex cont-b-t-card'>
                        {inform.map((item, index)=>(
                    <div className='bizni-tanlash-card' key={index}>
                        <img src={item.img} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>

                        ))}
                </div>

            </div>

        </div>
    )
}

export default BizniTanlash
