import styles from './Button.module.css'

interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
}

export const Button = ({ text, onClick, disabled = false }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
