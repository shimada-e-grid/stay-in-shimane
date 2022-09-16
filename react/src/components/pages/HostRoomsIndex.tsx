import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { SimpleButton } from '../'
import { useAuthUserContext } from "../../providers";
import useAxios from '../../hooks/useAxios'

interface RoomResponse {
  id: number
  name: string
}

export const HostRoomsIndex: React.FC = () => {
  const navigate = useNavigate()
  const authUser = useAuthUserContext()

  const [{ data, loading }, fetch] = useAxios<RoomResponse[]>({
    url: `api/v1/host/rooms`,
    method: 'get',
  }, { manual: true });

  useEffect(() => {
    return () => {
      if (authUser.user) {
        fetch({
          headers: {
            uid: authUser.user.uid,
            client: authUser.user.client,
            'access-token': authUser.user['access-token']
          }
        })
      }
    }
  }, [authUser.user])

  return (
    <>
      <p>ホスト物件一覧</p>
      <SimpleButton onClick={() => navigate('/host/rooms/1/edit')}>ホスト物件編集</SimpleButton>
      <SimpleButton onClick={() => navigate('/host/rooms/new')}>ホスト物件新規登録</SimpleButton>
      <SimpleButton onClick={() => navigate('/')}>トップ</SimpleButton>
      <SimpleButton onClick={() => navigate('/user')}>アカウント編集</SimpleButton>
      <SimpleButton onClick={() => authUser.signOut(() => {
        navigate('/')
      })}>ログアウト</SimpleButton>
      {loading && <>ローディング</>}
      {data && data.map(room =>
        <p key={room.id}>{room.name}</p>
      )}
    </>
  )
}
