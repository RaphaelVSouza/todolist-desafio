import { useEffect, useState } from 'react'
import User, { UserProps } from '../../components/User'
import { useHistory } from 'react-router'
import * as S from './styles'
import api from '../../services/api'

const PageHome = () => {
  const history = useHistory();
  const userId = localStorage.getItem('userid')
  if (userId) history.push('/todos')
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data)
    });

  }, [])

  return (
    <S.Wrapper>
      <S.Title>Escolha um usuário</S.Title>
      {users && users.map(({ id, username }: UserProps) => {
        return <User key={id} id={id} username={username} />
      })}

    </S.Wrapper>
  )
}

export default PageHome