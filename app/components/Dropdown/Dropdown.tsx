"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      category: "Cosmetic",
      services: [
        { name: "Dental Implants", href: "/dental-services/dental-implants" },
        { name: "Teeth Whitening", href: "/dental-services/teeth-whitening" },
        { name: "Veneers", href: "/dental-services/veneers" },
      ]
    },
    {
      category: "Preventative",
      services: [
        { name: "Teeth Cleaning", href: "/dental-services/teeth-cleaning" },
        { name: "Oral Exams", href: "/dental-services/oral-exams" },
        { name: "X-Rays", href: "/dental-services/x-rays" },
      ]
    },
    {
      category: "Restoration",
      services: [
        { name: "Fillings", href: "/dental-services/fillings" },
        { name: "Crowns", href: "/dental-services/crowns" },
        { name: "Bridges", href: "/dental-services/bridges" },
      ]
    },
  ];

  return (
    <div className={styles['dropdown-container']}>
      <div
        className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}
        
      >
        <button onMouseLeave={closeDropdown}
        onMouseEnter={() => setIsOpen(true)} className={styles.button} onClick={toggleDropdown}>
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
    </div>
  );
};

export default Dropdown;