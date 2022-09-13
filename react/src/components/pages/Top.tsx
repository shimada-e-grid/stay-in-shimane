import { SimpleButton } from '../'

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
      <SimpleButton onClick={handleOnClickIndex}>物件一覧</SimpleButton>
      <SimpleButton onClick={handleOnClickSignIn}>サインイン</SimpleButton>
    </>
  )
}
