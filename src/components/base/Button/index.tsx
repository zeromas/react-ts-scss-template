import classes from './Button.module.scss'

type ButtonProps = {
  innerText?: string
  type?: "button" | "submit" | "reset" | undefined
  size?: 'small' | 'large'
  variant?: "text" | "contained" | "outlined" | undefined
  children?: React.ReactNode
  onClickMethod?: (event: React.MouseEvent<HTMLButtonElement>) => void
  hidden?: boolean
}

const Button = ({innerText, type="button", size="small", variant="contained", onClickMethod = () => false, children}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClickMethod}
      className={classes.button}
    >
      {children ? children : innerText}
    </button>
  )
}

export default Button