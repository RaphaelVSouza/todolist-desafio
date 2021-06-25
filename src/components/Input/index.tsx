import React, { InputHTMLAttributes } from 'react';

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string

}

export const Input: React.FC<InputProps> = ({ label, name, type = "text", ...rest }) => (
  <S.Wrapper>
    <S.Label htmlFor={name}>{label}</S.Label>
    <S.Input name={name} type={type} {...rest} />
  </S.Wrapper>
)

export default Input