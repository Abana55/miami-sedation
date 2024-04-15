import Link from 'next/link';
import styles from '../Home.module.scss';
import Dropdown from '../Dropdown/Dropdown';  

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>Miami Sedation Dentistry</Link>
        <div>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/before-after" className={styles.link}>Before & After</Link>
          <Link href="/resources" className={styles.link}>Resources</Link>
          <Dropdown />
        </div>
      </nav>
    </header>
  );
};

export default Header;