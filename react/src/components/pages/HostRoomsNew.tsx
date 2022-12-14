import { useNavigate } from 'react-router-dom'
import React, { useCallback, useState } from 'react'
import axios from 'axios'
import { Prefecture, PrefectureArray } from './prefecture'

import { SimpleButton, TextField } from '../'

export const HostRoomsNew: React.FC = () => {
  const navigate = useNavigate()
  const [nameValue, setNameValue] = useState<string>('')
  const [nameKanaValue, setNameKanaValue] = useState<string>('')
  const [priceValue, setPriceValue] = useState<string>('')
  const [prefectureValue, setPrefectureValue] = useState<string>('')
  const [cityValue, setCityValue] = useState<string>('')
  const [zipValue, setZipValue] = useState<string>('')
  const [address1Value, setAddress1Value] = useState<string>('')
  const [address2Value, setAddress2Value] = useState<string>('')
  const [maximumCapacityValue, setMaximumCapacityValue] = useState<string>('')
  const [descriptionValue, setDescriptionValue] = useState<string>('')
  const [imagePath1, setImagePath1] = useState<File>()
  const [imagePath2, setImagePath2] = useState<File>()
  const [imagePath3, setImagePath3] = useState<File>()

  const selectImage = useCallback((e: any) => {
    const selectedImage = e.target.files[0]
    const selectedImageNumber = e.target.dataset.number
    switch (selectedImageNumber){
      case '1':
        setImagePath1(selectedImage)
        break;
      case '2':
        setImagePath2(selectedImage)
        break;
      case '3':
        setImagePath3(selectedImage)
        break
    }
  }, [])

  const createRoomData = () => {
    const roomData = new FormData()
    roomData.append('room[name]', nameValue)
    roomData.append('room[name_kana]', nameKanaValue)
    roomData.append('room[price]', priceValue)
    roomData.append('room[prefecture]', prefectureValue)
    roomData.append('room[city]', cityValue)
    roomData.append('room[zip_code]', zipValue)
    roomData.append('room[address1]', address1Value)
    roomData.append('room[address2]', address2Value)
    roomData.append('room[maximum_capacity]', maximumCapacityValue)
    roomData.append('room[description]', descriptionValue)
    return roomData
  }

  const createRoomImageData = (room_id: any) => {
    const imageData = new FormData()
    if (!imagePath1 || !imagePath2 || !imagePath3) return
    imageData.append('image[image_path1]', imagePath1)
    imageData.append('image[image_path2]', imagePath2)
    imageData.append('image[image_path3]', imagePath3)
    imageData.append('image[room_id]', room_id)
    return imageData
  }

  const sendForm = async () => {
    // ????????????????????????????????????
    if (!imagePath1 || !imagePath2 || !imagePath3) {
      alert("???????????????????????????????????????????????????")
      return
    }

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    // ?????????????????????
    const room_data = await createRoomData()
    axios.post(
      'http://localhost:3000/api/v1/rooms', room_data, config
      )
    .then(response => {

      // ?????????????????????
      const room_image_data = createRoomImageData(response.data.room.id)
      axios.post(
        'http://localhost:3000/api/v1/room_images', room_image_data, config
        )
      .then(response => {
        navigate('/host/rooms')
        return
      }).catch(error => {
        alert("????????????????????????????????????????????????????????????")
        console.log(error)
      })

    }).catch(error => {
      alert("????????????????????????????????????????????????????????????")
      console.log(error)
    })
  }

  return (
    <>
      <p>???????????????????????????</p>
      <input type="file" data-number="1" onChange={(e) => selectImage(e)}/>
      <input type="file" data-number="2" onChange={(e) => selectImage(e)}/>
      <input type="file" data-number="3" onChange={(e) => selectImage(e)}/>
      <TextField style={{ width: "300px", display: "block" }} value={nameValue} onChange={(e) => setNameValue(e.target.value)} placeholder={"?????????"} required/>
      <TextField style={{ width: "300px", display: "block" }} value={nameKanaValue} onChange={(e) => setNameKanaValue(e.target.value)} placeholder={"?????????(??????)"} required/>
      <div style={{ display: "block" }}>
        <TextField style={{ width: "300px" }} value={priceValue} onChange={(e) => setPriceValue(e.target.value)} placeholder={"??????"} required/>???
      </div>
      <select style={{ width: "300px", display: "block" }} id="prefecture" onChange={(e) => setPrefectureValue(e.target.value)} required>
        <option value="" key="">????????????</option>
        { PrefectureArray.map((prefecture: Prefecture) => (
          <option value={prefecture.id} key={prefecture.id}>{prefecture.label}</option>
        ))}
      </select>
      <TextField style={{ width: "300px", display: "block" }} value={cityValue} onChange={(e) => setCityValue(e.target.value)} placeholder={"????????????"} required/>
      <TextField style={{ width: "300px", display: "block" }} value={zipValue} onChange={(e) => setZipValue(e.target.value)} placeholder={"????????????(??????????????????)"} required/>
      <TextField style={{ width: "300px", display: "block" }} value={address1Value} onChange={(e) => setAddress1Value(e.target.value)} placeholder={"????????????"} required/>
      <TextField style={{ width: "300px", display: "block" }} value={address2Value} onChange={(e) => setAddress2Value(e.target.value)} placeholder={"??????_?????????????????????????????????"} required/>
      <div style={{ display: "block" }}>
        <TextField style={{ width: "300px" }} value={maximumCapacityValue} onChange={(e) => setMaximumCapacityValue(e.target.value)} placeholder={"????????????"} required/>???
      </div>
      <TextField style={{ width: "300px", display: "block" }} value={descriptionValue} onChange={(e) => setDescriptionValue(e.target.value)} placeholder={"??????"} required/>
      <SimpleButton onClick={sendForm}>??????</SimpleButton>
      <SimpleButton onClick={() => navigate('/host/rooms')}>?????????????????????</SimpleButton>
    </>
  )
}
