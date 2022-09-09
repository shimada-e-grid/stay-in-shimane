import { Button } from '../'

const handleOnClickIndex = () => {
  window.location.href = '/rooms'
}
const handleOnClickSignIn = () => {
  window.location.href = 'auth/sign_in'
}

export const Top: React.FC = () => {
  return (
    <>
      <p>トップ</p>
      <Button onClick={handleOnClickIndex}>物件一覧</Button>
      <Button onClick={handleOnClickSignIn}>サインイン</Button>
    </>
  )
}
