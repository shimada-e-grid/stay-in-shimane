import { SimpleButton } from '../'

const handleOnClick = () => {
  window.location.href = '/host/rooms'
}

export const HostRoomsEdit: React.FC = () => {
  return (
    <>
      <p>ホスト物件編集</p>
      <SimpleButton onClick={handleOnClick}>ホスト物件一覧</SimpleButton>
    </>
  )
}
