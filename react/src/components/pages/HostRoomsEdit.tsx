import { useNavigate } from 'react-router-dom'
import { SimpleButton } from '../'

export const HostRoomsEdit: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>ホスト物件編集</p>
      <SimpleButton onClick={() => navigate('/host/rooms')}>変更</SimpleButton>
      <SimpleButton onClick={() => navigate('/host/rooms')}>ホスト物件一覧</SimpleButton>
    </>
  )
}
