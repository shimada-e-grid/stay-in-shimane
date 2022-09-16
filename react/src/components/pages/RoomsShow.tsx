import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SimpleButton } from '../'
import { TextWithLabel } from '../atoms';

import useAxios from '../../hooks/useAxios'

interface RoomResponse {
  id: number
  name: string
  price: number
  city: string
  address1: string | null
  address2: string | null
}

export const RoomsShow: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [{ data, loading }, fetch] = useAxios<RoomResponse>({
    url: `api/v1/rooms/${useParams().room_id}`,
    method: 'get'
  });

  const navigate = useNavigate();

  const handleOnClickSearch = () => {
    fetch({
      params: {
        'search[name]': searchValue
      }
    })
  }

  return (
    <>
      <p>物件詳細</p>
      <SimpleButton onClick={() => navigate('/rooms')}>物件一覧</SimpleButton>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 row-span-2">
          <img className="rounded-lg w-full object-cover" src="https://placehold.jp/30/dd6699/ffffff/400x150.png?text=物件画像メイン" />
        </div>
        <div>
          <div className="grid grid-rows-2 gap-4">
            <img className="rounded-lg w-full object-cover" src="https://placehold.jp/30/dd6699/ffffff/400x150.png?text=物件画像2" />
            <img className="rounded-lg w-full object-cover" src="https://placehold.jp/30/dd6699/ffffff/400x150.png?text=物件画像3" />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-5xl font-semibold">詳細</p>
          <TextWithLabel label="金額" value={data ? data.price.toString() : ''}/>
        </div>
        <div>
          <p className="text-center text-5xl">カレンダー</p>
        </div>
      </div>
    </>
  )
}
