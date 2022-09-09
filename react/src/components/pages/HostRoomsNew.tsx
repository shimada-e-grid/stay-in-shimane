import { Button } from '../'

const handleOnClick = () => {
  window.location.href = '/host/rooms/'
}

export const HostRoomsNew: React.FC = () => {
  return (
    <>
      <p>ホスト物件新規登録</p>
      <Button onClick={handleOnClick}>登録</Button>
      <Button onClick={handleOnClick}>ホスト物件一覧</Button>
    </>
  )
}
