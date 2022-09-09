import { Button } from '../'

const handleOnClick = () => {
  window.location.href = '/host/rooms'
}

export const SignIn: React.FC = () => {
  return (
    <>
      <p>ログイン</p>
      <Button onClick={handleOnClick}>ログイン</Button>
    </>
  )
}
