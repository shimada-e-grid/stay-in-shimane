import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const PillButton: React.FC<ButtonProps> = ({className, ...props}) => {
  return (
    <button className={clsx('bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full', className)} {...props}>
      {props.children}
    </button>
  )
}
