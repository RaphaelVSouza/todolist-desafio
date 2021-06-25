import React from 'react';
import * as S from './styles'

export type UserProps = {
  id: number
  username: string

}

const Users = ({ id, username }: UserProps) => {
  function handleUserLogin(e: React.MouseEvent<HTMLAnchorElement>) {
    localStorage.setItem('userid', `${id}`)
  }

  return (
    <S.Wrapper to={{ pathname: '/todos' }} onClick={handleUserLogin}>
      {username}
    </S.Wrapper >
  )

}

export default Users