import { useNavigate } from 'react-router-dom'
import { SimpleButton } from '../'
import useAxios from '../../hooks/useAxios'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';

interface EventResponse {
  id: number
  title:string
  targetDate: Date
}


export const RoomsShow: React.FC = () => {
  const navigate = useNavigate()

  const [{ data, loading }, fetch] = useAxios<EventResponse[]>({
    url: `/api/v1/rooms/1/room_calendars`,
    method: 'get'
  });
  data && data.map(cevent =>
    //TODO
   // {title:'eventを', start: {cevent.targetDate}},
   console.log(cevent.targetDate))
  //  const books = () => {
  //    { 
  //      ) }
  //  }

  return (
    <>
      <p>物件詳細</p>
      <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale='ja'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}
        events={[
          {title:'eventを', start: '2022-03-14'},
          {title:'こんな感じで追加できます', start: '2022-03-15', end: '2022-03-17'}
        ]}
      />
      </div>
      <SimpleButton onClick={() => navigate('/rooms')}>物件一覧</SimpleButton>
    </>
  )
}
