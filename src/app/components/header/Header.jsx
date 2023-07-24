import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  {
      id: 1,
      title: "Home",
      href: "/"
  },
  {
      id: 2,
      title: "Our Services",
      href: "/ourServices"
  },
  {
      id: 3,
      title: "Our Team",
      href: "/ourTeam"
  },
  {
      id: 4,
      title: "Courses",
      href: "/courses"
  }
]

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <Link href="/home" className={styles.logo}> <Image width={70} height={80} alt='' src='/logo.png'/>  </Link>
      <div className={styles.links}>
        {links.map(link=>(
            <Link  key={link.id} href={link.href} className={styles.link}>{link.title}</Link>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Header
