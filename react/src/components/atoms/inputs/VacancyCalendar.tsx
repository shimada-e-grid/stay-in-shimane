import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import { useParams } from 'react-router-dom'
import useAxios from '../../../hooks/useAxios'

interface RoomCalendars {
    target_date: string,
}

export const VacancyCalendar: React.FC = () => {

    const [{ data, loading }, fetch] = useAxios<RoomCalendars[]>({
        url: `api/v1/rooms/${useParams().room_id}/room_calendars`,
        method: 'get'
      });

    return (
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        events={
            data?.map(e => {return {
                title: 'Reserved',
                date: e.target_date,
                display: 'background',
                backgroundColor: 'red',
                // color: 'transparent',
                // textColor: 'red',
            }})
        }
      />
    )
}