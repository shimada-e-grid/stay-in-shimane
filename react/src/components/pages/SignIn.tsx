import { useNavigate } from 'react-router-dom'
import { SimpleButton } from '../'

export const SignIn: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>ログイン</p>
      <SimpleButton onClick={() => navigate('/host/rooms')}>ログイン</SimpleButton>
    </>
  )
}
