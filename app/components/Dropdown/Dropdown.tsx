"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
    console.log("Dropdown toggled", !isOpen); // Debugging log
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={toggleDropdown}>
        Services
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>
            <Link href="/services/dental-implants">
              <a className={styles.link}>Dental Implants</a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;