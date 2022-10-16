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
        <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-1">
            <img className="rounded-t-lg h-1/2 w-full object-cover" src="https://placehold.jp/30/dd6699/ffffff/400x150.png?text=物件画像" />
            <div className="p-5">
                <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <TextWithLabel label="名前"　value={props.name}/>
                </div>
                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <TextWithLabel label="値段"　value={props.price.toString()}/>
                </div>
                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <TextWithLabel label="場所"　value={props.address}/>
                </div>
            </div>
        </div>
    );
};