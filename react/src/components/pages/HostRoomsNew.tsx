import { useNavigate } from 'react-router-dom'
import React, { useCallback, useState } from 'react'
import axios from 'axios'

import { SimpleButton, TextField } from '../'

export const HostRoomsNew: React.FC = () => {
  const navigate = useNavigate()
  const [nameValue, setNameValue] = useState<string>('')
  const [nameKanaValue, setNameKanaValue] = useState<string>('')
  const [priceValue, setPriceValue] = useState<string>('')
  const [imagePath, setImagePath] = useState<File>()

  const selectImage = useCallback((e: any) => {
    const selectedImage = e.target.files[0]
    setImagePath(selectedImage)
  }, [])

  const createRoomData = () => {
    const roomData = new FormData()
    roomData.append('room[name]', nameValue)
    roomData.append('room[name_kana]', nameKanaValue)
    roomData.append('room[price]', priceValue)
    return roomData
  }

  const createRoomImageData = (room_id: any) => {
    const imageData = new FormData()
    if (!imagePath) return
    imageData.append('image_path', imagePath)
    imageData.append('room_id', room_id)
    return imageData
  }

  const sendForm = async () => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    // 物件情報の登録
    const room_data = await createRoomData()
    axios.post(
      'http://localhost:3000/api/v1/rooms', room_data, config
      )
    .then(response => {
      console.log(response.data.room.id)
      // 新規で作成した物件データのid
    }).catch(error => {
      console.log(error)
    })

    // 物件画像の登録
    const room_image_data = await createRoomImageData(1)
    axios.post(
      'http://localhost:3000/api/v1/room_images', room_image_data, config
      )
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <>
      <p>ホスト物件新規登録</p>
      <input type="file" onChange={(e) => selectImage(e)}/>
      <TextField value={nameValue} onChange={(e) => setNameValue(e.target.value)} placeholder={"物件名"}/>
      <TextField value={nameKanaValue} onChange={(e) => setNameKanaValue(e.target.value)} placeholder={"物件名(カナ)"}/>
      <TextField value={priceValue} onChange={(e) => setPriceValue(e.target.value)} placeholder={"金額"}/>
      <SimpleButton onClick={sendForm}>登録</SimpleButton>
      <SimpleButton onClick={() => navigate('/host/rooms')}>ホスト物件一覧</SimpleButton>
    </>
  )
}
