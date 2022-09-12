import { useState } from 'react'
import { Button, TextField } from '../'
import useAxios from '../../hooks/useAxios'

const handleOnClickShow = () => {
  window.location.href = '/rooms/1'
}
const handleOnClickTop = () => {
  window.location.href = '/'
}

interface RoomResponse {
  id: number
  name: string
}

export const RoomsIndex: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [{ data, loading }, fetch] = useAxios<RoomResponse[]>({
    url: `api/v1/rooms?search[prefecture]=32`,
    method: 'get'
  });

  const handleOnClickSearch = () => {
    fetch({
      params: {
        'search[name]': searchValue
      }
    })
  }

  return (
    <>
      <p>物件一覧</p>
      <Button onClick={handleOnClickShow}>物件詳細</Button>
      <Button onClick={handleOnClickTop}>トップ</Button>
      <TextField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <Button onClick={handleOnClickSearch}>検索</Button>
      { loading && <>ローディング</> }
      { data && data.map(room => {
        return <p key={room.id}>{room.name}</p>
      }) }
    </>
  )
}
