import { SimpleButton } from '../'

const handleOnClick = () => {
  window.location.href = '/rooms/'
}

export const RoomsShow: React.FC = () => {
  return (
    <>
      <p>物件詳細</p>
      <SimpleButton onClick={handleOnClick}>物件一覧</SimpleButton>
    </>
  )
}
