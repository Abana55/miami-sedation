"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const serviceCategories = [
    {
      category: "Cosmetic Dentistry",
      services: [
        "Cosmetic Dentistry",
        "Dental Bonding",
        "Dental Crowns",
        "Dental Implants",
        "All-on-4® Dental Implants",
        "Gum Contouring",
        "Invisalign®",
        "Invisalign Teen®",
        "Porcelain Veneers",
        "Smile Design",
        "Smile Makeover",
        "Teeth Whitening"
      ]
    },
    // Other categories...
  ];

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      <button className={styles.button}>Services</button>
      {isOpen && (
        <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
          {serviceCategories.map((category, index) => (
            <div key={index} className={styles.dropdownColumn}>
              <h3 className={styles.dropdownHeader}>{category.category}</h3>
              <ul className={styles.dropdownList}>
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className={styles.dropdownItem}>
                    <Link href={`/services/${service.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}>
                      <a className={styles.link}>{service}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;