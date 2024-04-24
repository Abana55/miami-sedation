import Link from 'next/link';
import styles from '../Home.module.scss';
import Dropdown from '../Dropdown/Dropdown';  
import style from '../Dropdown/Dropdown.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.link}>Miami Sedation Dentistry</a>
        </Link>
        <ul>
          <li><Link href="/services"><a className={styles.link}>Services</a></Link></li>
          <li><Link href="/about"><a className={styles.link}>About Us</a></Link></li>
          <li><Link href="/contact"><a className={styles.link}>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;