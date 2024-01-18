import Image from 'next/image'
import { ContentLayout } from 'src/shared/ui/layout'
import styles from './footer.module.css'

const socialIcons = [
  {
    label: 'twitter',
    path: '/twitter_icon.png',
    link: 'https://twitter.com/',
  },
  {
    label: 'telegram',
    path: '/telegram_icon.png',
    link: 'https://web.telegram.org/',
  },
  {
    label: 'facebook',
    path: '/facebook_icon.png',
    link: 'https://facebook.com',
  },
]

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
