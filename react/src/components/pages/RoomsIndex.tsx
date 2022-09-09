import { Button, TextField } from '../'
import useAxios from '../../hooks/useAxios'

const handleOnClickShow = () => {
  window.location.href = '/rooms/1'
}
const handleOnClickTop = () => {
  window.location.href = '/'
}
const handleOnClickSearch = () => {

}

interface RoomResponse {
  name: string
}

export const RoomsIndex: React.FC = () => {
  const [{ response, loading }] = useAxios<{ data: RoomResponse[] }>({
    url: `api/v1/rooms?prefecture=32`,
    method: 'get'
  });

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
