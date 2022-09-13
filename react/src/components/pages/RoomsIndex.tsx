import { useState } from 'react'
import { SimpleButton, TextField } from '../'
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
      <SimpleButton onClick={handleOnClickShow} className="px-1">物件詳細</SimpleButton>
      <SimpleButton onClick={handleOnClickTop}>トップ</SimpleButton>
      <TextField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <SimpleButton onClick={handleOnClickSearch}>検索</SimpleButton>
      { loading && <>ローディング</> }
      { data && data.map(room => {
        return <p key={room.id}>{room.name}</p>
      }) }
    </>
  )
}
