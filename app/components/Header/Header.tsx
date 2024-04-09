import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

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
            <li className={styles.navItem} onMouseEnter={() => setIsServicesDropdownOpen(true)} onMouseLeave={() => setIsServicesDropdownOpen(false)}>
      <Link href="/dental-services">
        <a className={styles.navLink}>Services</a>
      </Link>
      {isServicesDropdownOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>
            <Link href="/dental-services/cleaning">
              <a className={styles.dropdownLink}>Cleaning</a>
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link href="/dental-services/fillings">
              <a className={styles.dropdownLink}>Fillings</a>
            </Link>
          </li>
          {/* More dropdown items */}
        </ul>
      )}
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