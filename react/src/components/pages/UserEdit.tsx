import { useNavigate } from 'react-router-dom'
import { SimpleButton } from '../'

export const UserEdit: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>アカウント編集</p>
      <SimpleButton onClick={() => navigate('/host/rooms')}>変更</SimpleButton>
      <SimpleButton onClick={() => navigate('/host/rooms')}>ホスト物件一覧</SimpleButton>
    </>
  )
}
