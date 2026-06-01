import React from 'react'
import './coverking.css'
import { Title } from '../../style/StyleComponent'
import cowerkingOne from '../../assets/IMG_cowercing.jpg'
import cowerkingTwo from '../../assets/IMG_cowercing_2.jpg'
import cowerkingThree from '../../assets/IMGcowercing_3.jpg'

import '../../App.css'



const Coverking = () => {
  return (
    <div className='cowerking'>
        <div className="max-width">

        <Title>
            Bepul cowerking
        </Title>
        <div className="cowerking-img-bar">
            <div className="left">
                <img src={cowerkingOne} alt="" />
            </div>
            <div className="right">
                <img src={cowerkingTwo} alt="" />
                <img src={cowerkingThree} alt="" />
            </div>
        </div>
      
        </div>
    </div>
  )
}

export default Coverking
