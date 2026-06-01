import React from 'react'
import './islash.css'
import { Title } from '../../style/StyleComponent'

// ? icon
import { CiLocationOn } from "react-icons/ci";


// ? img

import ishOne from '../../assets/doWork.jpg'
import ishTwo from '../../assets/wwr.jpeg'
import ishThree from '../../assets/remove-nat.png'
import ishFour from '../../assets/tex.png'
import ishFive from '../../assets/union.jpg'
import ishSix from '../../assets/remoDesignStudio.png'
import ishSeven from '../../assets/parkIt.png'
import ishEight from '../../assets/m.jpeg'
import ishNight from "../../assets/qoantas.png"
import ishTan from "../../assets/logoSvg.svg"





const Ishlash = () => {
    return (
        <div className='ishlash'>
            <div className="max-width">
                <Title>
                    Bizning o`quvchilarimiz qayerda ishlashadi
                </Title>

                <div className="ishlash-img-bar">
                    <img src={ishOne} alt="Ish joyi 1" />
                    <img src={ishTwo} alt="Ish joyi 2" />
                    <img src={ishThree} alt="Ish joyi 3" />
                    <img src={ishFour} alt="Ish joyi 4" />
                    <img src={ishTan} alt="Ish joyi 5" />
                    <img src={ishSix} alt="Ish joyi 6" />
                    <img src={ishSeven} alt="Ish joyi 7" />
                    <img src={ishEight} alt="Ish joyi 8" />
                    <img src={ishFive} alt="Ish joyi 9" />
                    <img src={ishNight} alt="Ish joyi 10" />


                </div>

                {/* ? biz qayerda joylashganmiz  */}

                <section className="joylashuv">

                    <Title>
                        Biz qayerda joylashganmiz
                    </Title>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.7621516775075!2d66.92396777587983!3d39.67756460029579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19d54b324835%3A0xdf389d78adb91db2!2sIT%20TAT!5e0!3m2!1sru!2s!4v1777543162024!5m2!1sru!2s" 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Manzil"
                    >
                    
                        
                    </iframe>
                        <div className='iframe-loc display-flex'>
                            <CiLocationOn className='loc' />
                            <p>
                                Beruniy ko'chasi 32a, Samarqand, Samarqand viloyati
                            </p>
                        </div>
                </section>
            </div>
        </div>
    )
}

export default Ishlash