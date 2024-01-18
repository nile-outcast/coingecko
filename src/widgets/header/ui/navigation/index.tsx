'use client'
import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navigation.module.css'

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Profile',
    href: '/profile',
  },
]

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      {navLinks.map(({ label, href }) => {
        const isActive = href === pathname

        return (
          <Link
            key={label}
            href={href}
            className={cn(styles.link, isActive ? styles.link_active : '')}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
