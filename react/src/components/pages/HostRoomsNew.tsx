import { SimpleButton } from '../'

const handleOnClick = () => {
  window.location.href = '/host/rooms/'
}

export const HostRoomsNew: React.FC = () => {
  return (
    <>
      <p>ホスト物件新規登録</p>
      <SimpleButton onClick={handleOnClick}>登録</SimpleButton>
      <SimpleButton onClick={handleOnClick}>ホスト物件一覧</SimpleButton>
    </>
  )
}
