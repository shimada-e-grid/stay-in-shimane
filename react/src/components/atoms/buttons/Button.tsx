interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}
