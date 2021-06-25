import React, { useState, useEffect, FormEvent, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import * as S from './styles'
import Button from '../../components/Button'
import ButtonLogout from '../../components/ButtonLogout'
import Input from '../../components/Input'
import Todo, { TodoProps } from '../../components/Todo'

const PageTodos: React.FC = () => {
  const userId = localStorage.getItem('userid') || '';
  const history = useHistory();

  if (!userId) {
    history.push('/');
  }
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [renderTodos, setRenderTodos] = useState(1);

  function handleLogout() {
    localStorage.removeItem('userid');
    history.push('/')
  }

  function handleCreateTodo(e: FormEvent) {
    e.preventDefault();

    api.post(`/todos`, {
      title,
      completed: false,
      userId
    }).then(response => {

      setTodos([response.data, ...todos] as Array<never>)
    }).catch(err => console.error(err))

  }

  async function handleUpdateTodo(e: MouseEvent<HTMLDivElement>, id: number, completed: boolean) {
    let target = e.currentTarget
    target.style.opacity = '0.3';

    const response = await api
      .patch(`todos/${id}`, {
        completed: completed ? false : true,
      })

    target.style.opacity = '1';

    let updatedTodoIndex = 0;
    const { id: updatedTodoId } = await response.data;


    const todosAux = todos as Array<TodoProps>;

    for (let i = 0; i <= todosAux.length; i++) {
      if (updatedTodoId === todosAux[i].id) {
        updatedTodoIndex = i
        break;
      }
      continue;
    }

    todosAux[updatedTodoIndex] = response.data;


    setTodos(todosAux as never[])
    setRenderTodos(renderTodos + 1);

  }

  useEffect(() => {

  }, [renderTodos])

  useEffect(() => {
    api.get(`users/${userId}/todos`).then(response => {
      const todos = response.data;

      setTodos(todos)
    })
  }, [userId])

  return (
    <S.Wrapper>
      <ButtonLogout label="Sair" onClick={handleLogout} />

      <S.Form onSubmit={handleCreateTodo}>
        <Input
          label="Crie uma nova tarefa"
          name="title"
          value={title}
          placeholder="Insira o título da tarefa aqui"
          onChange={(e) => { setTitle(e.target.value) }}
          required
        />
        <Button label="Criar tarefa" type="submit" />
      </S.Form>
      <S.TodosContainer>
        {todos && todos.map(({ id, title, completed }: TodoProps) =>
          <Todo
            key={id}
            id={id}
            title={title}
            completed={completed}
            handleUpdateTodo={handleUpdateTodo}
          />
        )}
      </S.TodosContainer>

    </S.Wrapper>
  )

}

export default PageTodos
