type Props = {
    label: string,
    value: string,
}

export const TextWithLabel: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <span>{props.label}</span> : <span>{props.value}</span>
        </div>
    )
}