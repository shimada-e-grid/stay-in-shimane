import useAxios from '../../hooks/useAxios'
import { Link } from 'react-router-dom'

import { ApartmentCard } from '../organisms/ApartmentCard'

interface RoomResponse {
  id: number
  name: string
  price: number
  city: string
  address1: string | null
  address2: string | null
}

export const ApartmentCards: React.FC = () => {

  const [{ data, loading }] = useAxios<RoomResponse[]>({
    url: `api/v1/rooms`,
    method: 'get'
  });

  return (
    <>
      { loading && <>ローディング</> }
      <div className="flex m-4 flex-wrap w-3/5">
        { data && data.map(room =>
          // TODO
          <div className="m-2">
            <Link to={`/rooms/${room.id}`}>
              <ApartmentCard id={room.id} name={room.name} price={room.price} address={room.address1 || "" + room.address2 || ""}/>
            </Link>
          </div>
          ) }
      </div>
    </>
  )
}

export default ApartmentCards;
