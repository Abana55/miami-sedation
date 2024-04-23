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
              <li className={styles.dropdownItem}>
                <Link href="/dental-services/dental-implants">Dental Implants</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/dental-services/teeth-whitening">Teeth Whitening</Link>
              </li>
            </ul>
          </div>
          <div className={styles.dropdownColumn}>
            <h3 className={styles.dropdownHeader}>Restoration Dentistry</h3>
            <ul className={styles.dropdownList}>
              {/* Add links as needed */}
            </ul>
          </div>
          {/* Additional categories to be added */}
        </div>
      )}
    </div>
  );
};


export default Dropdown;
