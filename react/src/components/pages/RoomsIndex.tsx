import { Button, TextField } from '../'

const handleOnClickShow = () => {
  window.location.href = '/rooms/1'
}
const handleOnClickTop = () => {
  window.location.href = '/'
}
const handleOnClickSearch = () => {

}

export const RoomsIndex: React.FC = () => {
  return (
    <>
      <p>物件一覧</p>
      <Button onClick={handleOnClickShow}>物件詳細</Button>
      <Button onClick={handleOnClickTop}>トップ</Button>
      <TextField />
      <Button onClick={handleOnClickSearch}>検索</Button>
    </>
  )
}
