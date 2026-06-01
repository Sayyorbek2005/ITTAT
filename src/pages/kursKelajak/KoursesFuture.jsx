import React, { useState } from 'react'
import './kursFuture.css'
import { Button, Title } from '../../style/StyleComponent'

import telegam from '../../assets/telegram.kurs.png'
import ModalKons from '../../components/modals/modalKonsultatsia/ModalKons'
import { useNavigate } from 'react-router-dom'
import { BizningKurslar } from '../bizningKurslarimiz/BizningKurslarimizData'

const KoursesFuture = () => {
    const [show, setShow] = useState(true)

        const navigate = useNavigate(); // 2. Hook-ni chaqiramiz
    
        const handleCardClick = (id) => {
            // Kurs sahifasiga yo'naltirish (masalan: /course/1)
            navigate(`/kurslar/${id}`);
        };
    

    return (
        <div className='kelajakFuture'>
            <div className="max-width">
                <Title>
                    Kurslarga ro'yxatdan o'tib, kelajagingizni boshlang!
                </Title>
                <section className="future display-flex flex-wrap">
                    <div className="future-left">
                        <img src={telegam} alt="" />
                        
                        <div className='button-bar-future'>

                    {BizningKurslar.map((item, index)=>(
                        
                        
                        <Button onClick={() => handleCardClick(item.id)} >{item.nomi}</Button>
                            
                       
                        ))}
                        </div>
                    </div>
                    <div className="future-right">
                        {show && (
                            <ModalKons onClose={() => setShow(true)} />

                        )}
                    </div>
                </section>
            </div>

        </div>
    )
}

export default KoursesFuture
