import { useNavigate } from 'react-router-dom'
import { SimpleButton } from '../'

export const HostRoomsNew: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>ホスト物件新規登録</p>
      <SimpleButton onClick={() => navigate('/host/rooms')}>登録</SimpleButton>
      <SimpleButton onClick={() => navigate('/host/rooms')}>ホスト物件一覧</SimpleButton>
    </>
  )
}
