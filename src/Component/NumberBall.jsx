import React from 'react'
import '../Styles/NumberBall.css'

const NumberBall = ({number}) => {
  return (
        <div className='ball'>
            <h6 className='number'>{number}</h6>
        </div>
  )
}

export default NumberBall