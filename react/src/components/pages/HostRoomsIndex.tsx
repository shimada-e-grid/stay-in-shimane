import { useNavigate } from 'react-router-dom'
import { SimpleButton } from '../'

export const HostRoomsIndex: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>ホスト物件一覧</p>
      <SimpleButton onClick={() => navigate('/host/rooms/1/edit')}>ホスト物件編集</SimpleButton>
      <SimpleButton onClick={() => navigate('/host/rooms/new')}>ホスト物件新規登録</SimpleButton>
      <SimpleButton onClick={() => navigate('/')}>トップ</SimpleButton>
      <SimpleButton onClick={() => navigate('/user')}>アカウント編集</SimpleButton>
    </>
  )
}
