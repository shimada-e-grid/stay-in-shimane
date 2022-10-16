import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { TextWithLabel } from '../atoms';

type Props = {
    name: string,
    price: number,
    address: string,
}

export const ApartmentCard: React.FC<Props> = (props: Props) => {
    const navigate = useNavigate()
    
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <img className="rounded-t-lg h-1/2 w-full object-cover" src="https://placehold.jp/30/dd6699/ffffff/400x150.png?text=物件画像" />
            <div className="p-5">
                <div className="mb-2 text-2xl font-bold">
                    <TextWithLabel label="名前"　value={props.name}/>
                </div>
                <div className="mb-3 font-normal">
                    <TextWithLabel label="値段"　value={props.price.toString()}/>
                </div>
                <div className="mb-3 font-normal">
                    <TextWithLabel label="場所"　value={props.address}/>
                </div>
            </div>
        </div>
    );
};