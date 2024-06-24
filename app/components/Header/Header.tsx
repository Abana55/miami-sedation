"use client";
import Link from 'next/link';
import styles from './Header.module.scss';
import Dropdown from '../Dropdown/Dropdown';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          Bana Dental Design
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/about-us" className={styles.link}>About Us</Link>
          </li>
          <li>
            <Link href="/contact-us" className={styles.link}>Contact Us</Link>
          </li>
          <li>
            <Dropdown />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
