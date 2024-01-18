import { CenteredContent } from 'src/shared/ui/centeredContent'
import styles from './content.module.css'

type Props = {
  text: string
}

export const EmptyContent = ({ text }: Props) => {
  return (
    <CenteredContent>
      <h1 className={styles.empty_content_text}>{text}</h1>
    </CenteredContent>
  )
}
