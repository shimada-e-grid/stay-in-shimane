import { useState } from 'react'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'

import { SimpleButton, TextField } from '../'
import useAxios from '../../hooks/useAxios'
import { ApartmentCard } from '../organisms/ApartmentCard'
import Header from '../templates/Header'

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
      <Header />
      {/* <p>物件一覧</p> */}
      <div className="flex search-field p-4 bg-gray-50">
        <TextField placeholder="物件名を入力してください" className="m-1 w-4/5 max-w-2xl" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <SimpleButton className="ml-10 mr-auto" onClick={handleOnClickSearch}>検索</SimpleButton>
      </div>
      { loading && <>ローディング</> }
      <div className="flex p-4 bg-gray-50">
        { data && data.map(room =>
          // TODO
          <Link to={`/rooms/${room.id}`}>
            <ApartmentCard name={room.name} price={room.price} address={room.address1 || "" + room.address2 || ""}/>
          </Link>
          ) }
      </div>
    </>
  )
}
