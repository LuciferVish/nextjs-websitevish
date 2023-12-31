import Image from 'next/image'
import Link from 'next/link'
import styles from "@/app/styles/navbar.module.css"
import Nav from '@/app/components/Nav'

const Header = () => {
  return (
    <header className={styles.main_header}>
    <div className={styles.navbar_brand}>
    <Link href="/">
        <Image src="/logo2.png" width={150} height={40} alt="mty image"/>
    </Link>

    </div>
    <Nav/>
    </header>  )
}

export default Header