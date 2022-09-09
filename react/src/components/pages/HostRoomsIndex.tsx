import { Button } from '../'

const handleOnClickEdit = () => {
  window.location.href = '/host/rooms/1/edit'
}
const handleOnClickNew = () => {
  window.location.href = '/host/rooms/new'
}
const handleOnClickTop = () => {
  window.location.href = '/'
}

export const HostRoomsIndex: React.FC = () => {
  return (
    <>
      <p>ホスト物件一覧</p>
      <Button onClick={handleOnClickEdit}>ホスト物件編集</Button>
      <Button onClick={handleOnClickNew}>ホスト物件新規登録</Button>
      <Button onClick={handleOnClickTop}>トップ</Button>
    </>
  )
}
