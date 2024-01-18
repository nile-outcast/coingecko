import cn from 'classnames'
import styles from './content.module.css'

type Props = {
  children: React.ReactNode
  className?: string
  position?: 'top' | 'center'
}

export const CenteredContent = ({ children, className, position = 'center' }: Props) => {
  return (
    <div className={cn(styles.content, styles[`content_position_${position}`], className)}>
      {children}
    </div>
  )
}
