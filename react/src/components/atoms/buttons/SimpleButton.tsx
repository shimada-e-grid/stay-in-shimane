import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const SimpleButton: React.FC<ButtonProps> = ({className, ...props}) => {
  return (
    <button className={clsx('bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded', className)} {...props}>
      {props.children}
    </button>
  )
}
