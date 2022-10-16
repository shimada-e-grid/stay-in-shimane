import { useState } from 'react'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'

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
  const [searchParams] = useSearchParams();
  const prefecture_id = searchParams.get('search[prefecture]')
  const [{ data, loading }, fetch] = useAxios<RoomResponse[]>({
    url: `api/v1/rooms?search[prefecture]=${prefecture_id}`,
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
      <TextField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="検索：施設名"/>
      <SimpleButton onClick={handleOnClickSearch}>検索</SimpleButton>
      { loading && <>ローディング</> }
      <div className="flex justify-between gap-4 w-full flex-wrap">
        { data && data.map(room =>
          // TODO
          <Link to={`/rooms/${room.id}`}>
            <ApartmentCard id={room.id} name={room.name} price={room.price} address={room.address1 || "" + room.address2 || ""}/>
          </Link>
          ) }
      </div>
    </>
  )
}
