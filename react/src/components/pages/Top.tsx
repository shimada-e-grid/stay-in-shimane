import { useNavigate } from 'react-router-dom'
import { SimpleButton } from '../'

export const Top: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>トップ</p>
      <SimpleButton onClick={() => navigate('/rooms?search[prefecture]=32')}>物件一覧</SimpleButton>
      <SimpleButton onClick={() => navigate('/auth/sign_in')}>サインイン</SimpleButton>
    </>
  )
}
