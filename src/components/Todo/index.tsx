import React, { MouseEvent } from 'react'
import * as S from './styles'

export type TodoProps = {
  id: number
  title: string
  completed: boolean
  userId?: number | string
  handleUpdateTodo: (e: MouseEvent<HTMLDivElement>, id: number, completed: boolean) => void

}

const Todo: React.FC<TodoProps> = ({ id, title, completed, handleUpdateTodo }) => {



  return (
    <S.Wrapper status={completed} onClick={(e) => handleUpdateTodo(e, id, completed)} >
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )

}

export default Todo
