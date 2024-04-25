"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Dropdown.module.scss";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      <button className={styles.button}>Services</button>
      {isOpen && (
        <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}>
          <div className={styles.dropdownColumn}>
            <h3 className={styles.dropdownHeader}>Cosmetic Dentistry</h3>
            <ul className={styles.dropdownList}>
            <nav>
            <Link href="/dental-services/dental-implants" onClick={(e) => e.stopPropagation()}>Dental Implants</Link>
      <Link href="/dental-services/teeth-whitening">Teeth Whitening</Link>
    </nav>
            </ul>
          </div>
          <div className={styles.dropdownColumn}>
            <h3 className={styles.dropdownHeader}>Restoration Dentistry</h3>
            <ul className={styles.dropdownList}>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};


export default Dropdown;
