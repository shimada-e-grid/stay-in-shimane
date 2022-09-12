import { useState } from 'react'
interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <input type="text" {...props} />
  )
}
