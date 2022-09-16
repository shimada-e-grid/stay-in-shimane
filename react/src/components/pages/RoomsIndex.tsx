import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SimpleButton, TextField } from '../'
import useAxios from '../../hooks/useAxios'
import { ApartmentCard } from '../organisms/ApartmentCard'

interface RoomResponse {
  id: number
  name: string
  price: number
  city: string
  address1: string | null
  address2: string | null
}

export const RoomsIndex: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [{ data, loading }, fetch] = useAxios<RoomResponse[]>({
    url: `api/v1/rooms?search[prefecture]=32`,
    method: 'get'
  });

  const navigate = useNavigate()
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
      <SimpleButton onClick={() => navigate('/rooms/1')}>物件詳細</SimpleButton>
      <SimpleButton onClick={() => navigate('/')}>トップ</SimpleButton>
      <TextField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <SimpleButton onClick={handleOnClickSearch}>検索</SimpleButton>
      { loading && <>ローディング</> }
      <div className="flex">
        { data && data.map(room =>
          // TODO
          <ApartmentCard name={room.name} price={room.price} address={room.address1 || "" + room.address2 || ""}/>
          ) }
      </div>
    </>
  )
}
