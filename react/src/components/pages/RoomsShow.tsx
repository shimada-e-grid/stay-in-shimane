import { useNavigate } from 'react-router-dom'
import { SimpleButton } from '../'

export const RoomsShow: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>物件詳細</p>
      <SimpleButton onClick={() => navigate('/rooms')}>物件一覧</SimpleButton>
    </>
  )
}
