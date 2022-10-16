import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { LoginButton } from '../atoms/buttons/LoginButton'

import Router from '../../Router';

const Header: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex bg-gray-50 p-5">
      <button className="text-4xl" onClick={() => navigate('/')}>Stay in Shimane</button>
      <LoginButton onClick={() => navigate('/auth/sign_in')}>サインイン</LoginButton>
    </div>
  )
}
export default Header;
