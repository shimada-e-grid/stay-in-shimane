import { SimpleButton } from '../'

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
      <SimpleButton onClick={handleOnClickEdit}>ホスト物件編集</SimpleButton>
      <SimpleButton onClick={handleOnClickNew}>ホスト物件新規登録</SimpleButton>
      <SimpleButton onClick={handleOnClickTop}>トップ</SimpleButton>
    </>
  )
}
