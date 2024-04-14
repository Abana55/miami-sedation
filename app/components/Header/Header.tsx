import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from '../Home.module.scss';

const Dropdown = dynamic(() => import('../Dropdown/Dropdown.client'), {
  ssr: false 
});

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.logo}>Home</a>
        </Link>
        
        <Dropdown />
      </nav>
    </header>
  );
};

export default Header;