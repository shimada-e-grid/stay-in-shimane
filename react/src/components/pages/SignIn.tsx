import { SimpleButton } from '../'

const handleOnClick = () => {
  window.location.href = '/host/rooms'
}

export const SignIn: React.FC = () => {
  return (
    <>
      <p>ログイン</p>
      <SimpleButton onClick={handleOnClick}>ログイン</SimpleButton>
    </>
  )
}
