import React from 'react'
import '../Styles/PlayBall.css'




const PlayBall = ({onClick}) => {
  return (
    <div className='playball' onClick={onClick}>
    <h6 className='playballtext'>Play!</h6>
        </div>
  )
}

export default PlayBall