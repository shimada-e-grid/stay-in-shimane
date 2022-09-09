import { Button } from '../'

const handleOnClick = () => {
  window.location.href = '/host/rooms'
}

export const HostRoomsEdit: React.FC = () => {
  return (
    <>
      <p>ホスト物件編集</p>
      <Button onClick={handleOnClick}>ホスト物件一覧</Button>
    </>
  )
}
