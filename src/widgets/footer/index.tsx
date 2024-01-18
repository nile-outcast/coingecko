import Image from 'next/image'
import { ContentLayout } from 'src/shared/ui'
import { socialIcons } from './constants'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContentLayout className={styles.content}>
        <div className={styles.icon_list}>
          {socialIcons.map(({ label, link, path }) => (
            <a key={label} href={link} target="_blank">
              <Image alt={label} src={path} width={40} height={40} />
            </a>
          ))}
        </div>

        <p>© 2024 CoinGecko. All Rights Reserved</p>
      </ContentLayout>
    </footer>
  )
}
