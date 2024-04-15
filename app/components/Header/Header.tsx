import Link from 'next/link';
import styles from '../Home.module.scss';
import Dropdown from '../Dropdown/Dropdown';  

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">Miami Sedation Dentistry</Link>
        <Dropdown /> 
        
      </nav>
    </header>
  );
};

export default Header;