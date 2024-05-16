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

  const serviceCategories = [
    {
      category: "Cosmetic",
      services: [
        { name: "Dental Implants", href: "/dental-services/dental-implants" },
        
      ]
    },
    {
      category: "Preventative",
      services: [
        { name: "Teeth Cleaning", href: "/dental-services/teeth-cleaning" },
        
      ]
    },
    {
      category: "Restoration",
      services: [
        { name: "Fillings", href: "/dental-services/fillings" },
        
      ]
    }
    // Add more categories and services here
  ];

  return (
    <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
      <button className={styles.button} onClick={toggleDropdown}>
        Services
      </button>
      <div className={styles.dropdownMenu}>
        {serviceCategories.map(category => (
          <div key={category.category} className={styles.category}>
            <h4 className={styles.categoryTitle}>{category.category}</h4>
            <ul className={styles.serviceList}>
              {category.services.map(service => (
                <li key={service.name} className={styles.serviceItem}>
                  <Link href={service.href}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;