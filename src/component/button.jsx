import React from 'react'
import { ButtonWrapper } from './style'

const Button = ({children, type,...restProps}) => {
  return (
    <ButtonWrapper type={type} {...restProps}>
      {children}
    </ButtonWrapper>
  )
}

export default Button