import Link from 'next/link';
import styles from '../Home.module.scss';
import Dropdown from '../Dropdown/Dropdown';  
import style from '../Dropdown/Dropdown.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
    <nav className={styles.navbar}>
      <Link href="/" className={styles.link}>
        Miami Sedation Dentistry
      </Link>
      <ul>
        <li>
          <Link href="/services" className={styles.link}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/dental-implants" className={styles.link}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
        <li>
          <Dropdown/>
        </li>
      </ul>
    </nav>
  </header>
);
};

export default Header;