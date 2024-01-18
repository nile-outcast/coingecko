import { ContentLayout } from 'src/shared/ui'
import styles from './header.module.css'
import { Navigation } from './ui/navigation'

export const Header = () => {
  return (
    <header className={styles.header}>
      <ContentLayout className={styles.content}>
        <Navigation />
        <h2 className={styles.title}>Coingecko</h2>
      </ContentLayout>
    </header>
  )
}
