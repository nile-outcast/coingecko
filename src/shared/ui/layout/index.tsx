import cn from 'classnames'
import styles from './layout.module.css'

type Props = {
  children: React.ReactNode
  className?: string
}

export const ContentLayout = ({ children, className }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.child, className)}>{children}</div>
    </div>
  )
}
