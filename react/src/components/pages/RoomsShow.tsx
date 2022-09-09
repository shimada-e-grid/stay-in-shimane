import { Button } from '../'

const handleOnClick = () => {
  window.location.href = '/rooms/'
}

export const RoomsShow: React.FC = () => {
  return (
    <>
      <p>物件詳細</p>
      <Button onClick={handleOnClick}>物件一覧</Button>
    </>
  )
}
