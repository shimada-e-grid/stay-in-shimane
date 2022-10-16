import { SelectMap } from '../atoms/inputs/SelectMap'
import { ApartmentCards } from '../templates/ApartmentCards'
import Header from '../templates/Header'


export const Top: React.FC = () => {

  return (
    <>
      <Header />
      <div className="flex bg-gray-50 p-5">
        <SelectMap />
        <ApartmentCards />
      </div>
    </>
  )
}
