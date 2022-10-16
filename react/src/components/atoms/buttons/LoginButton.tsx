import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const LoginButton: React.FC<ButtonProps> = ({className, ...props}) => {
  return (
    <button className={clsx('ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded', className)} {...props}>
      {props.children}
    </button>
  )
}
