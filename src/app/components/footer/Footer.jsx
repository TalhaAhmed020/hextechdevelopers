import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
CiLocationOn

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
    <div className={styles.inner1}>
      <h2>HexTech Developers</h2>
      <p className={styles.desc}> <AiOutlinePhone/> +92 312 1009772 </p>
      <p className={styles.desc}> <CiLocationOn/> Main GT Road, Barrier 2, Taj Complex, Wah Cantt </p>
      </div>
      <div className={styles.inner2}>
      <div className={styles.socialMediaIcons}>
          <Link href='/https://www.linkedin.com/'> <Image src='/facebookb.svg' width={34} height={34} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/'> <Image src='/linkedinb.svg' width={34} height={34} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/'> <Image src='/twitterb.svg' width={34} height={34} className={styles.facebook} alt='Image Loading Error'/> </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
