import { ContentLayout } from 'src/shared/ui/layout'
import { Navigation } from '../navigation'
import styles from './header.module.css'

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
