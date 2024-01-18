import cn from 'classnames'
import type { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'negative'
}

export const Button = ({ className, children, color = 'primary', ...props }: ButtonProps) => {
  return (
    <button className={cn(styles.btn, styles[`btn-${color}`], className)} {...props}>
      {children}
    </button>
  )
}
