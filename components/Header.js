import Link from 'next/link'
import { FaAffiliatetheme } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { BsFileImage } from 'react-icons/bs'
import styles from '../styles/Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <h1>Truxt</h1>
                <span>Pictures</span>
            </div>
            <ul className={styles.menu}>
                <li>
                    <GoHome /> 
                    <Link href="/" > Home</Link>
                </li>
                <li>
                    <BsFileImage />
                    <Link href="/stories" >Stories</Link>
                </li>
            </ul>
            <FaAffiliatetheme size={30} />
        </header>
    )
}