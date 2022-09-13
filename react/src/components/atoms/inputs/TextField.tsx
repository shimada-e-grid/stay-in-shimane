import clsx from 'clsx'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const TextField: React.FC<TextFieldProps> = ({className, ...props}) => {
  return (
    <input type="text" className={clsx('shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', className)} {...props} />
  )
}
