"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Dropdown.module.scss';  


const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={styles.dropdownButton}>Services</button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <Link href="/dental-services/cleaning">Cleaning</Link>
          <Link href="/dental-services/fillings">Fillings</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;