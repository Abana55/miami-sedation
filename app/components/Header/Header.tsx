import React from 'react';
import Link from 'next/link';
import Dropdown from '../Dropdown/Dropdown.client';
import styles from './Header.scss';


const Header: React.FC = () => {
    return (
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={styles.logo}>Miami Sedation Dentistry</a>
          </Link>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link href="/about-us">
                <a className={styles.navLink}>About Us</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Dropdown />
            </li>
            <li className={styles.navItem}>
              <Link href="/dental-blog">
                <a className={styles.navLink}>Blog</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact-us">
                <a className={styles.navLink}>Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;