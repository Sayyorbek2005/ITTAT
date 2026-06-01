import React from 'react'
import './feedback.css'
import Success from '../success/Success'
import {Title} from '../../style/StyleComponent'

const Feedback = () => {
  return (
    <div className=' max-width feedBack'>
      
        <Title>

         Feedback, o`quvchilar {/* va ota-onalar */} fikrlari 
        </Title>
    
      <Success />
    </div>
  )
}

export default Feedback
