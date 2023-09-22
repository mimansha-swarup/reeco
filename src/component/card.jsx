import React from 'react'
import { CardWrapper } from './style'

const Card = ({heading, value, showBorderLeft, isIcons=false}) => {
  return (
    <CardWrapper showBorderLeft={Boolean(showBorderLeft)}>
      <p className='heading' >{heading}</p>
      <span className='details' >{value}</span>

    </CardWrapper>
  )
}

export default Card
