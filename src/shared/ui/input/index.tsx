import cn from 'classnames'
import React from 'react'
import styles from './input.module.css'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, className, error, ...rest } = props

  return (
    <div className={cn(styles.wrapper, className)}>
      <label className={styles.label} htmlFor={rest.name}>
        {label}
      </label>

      <input ref={ref} className={styles.input} aria-invalid={Boolean(error)} {...rest} />

      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
})

Input.displayName = 'Input'
