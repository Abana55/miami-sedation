import Link from 'next/link';
import styles from '../Home.module.scss';
import Dropdown from '../Dropdown/Dropdown';  
import style from '../Dropdown/Dropdown.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>Miami Sedation Dentistry</Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/services" className={styles.link}>Services</Link>
          </li>
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