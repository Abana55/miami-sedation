"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Dropdown.module.scss';  


const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
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
        "Porcelain Veneers",
        "Smile Design",
        "Smile Makeover",
        "Teeth Whitening"
      ]
    },
    {
      category: "General Dentistry",
      services: [
        "Emergency Dentist",
        "General Dentistry",
        "Gum Disease",
        "Mercury Filling Removal (IAOMT-Compliant)",
        "Mouthguards & Nightguards",
        "Oral Hygiene",
        "Oral Cancer Screenings",
        "Sealants",
        "TMJ/TMD Dentistry",
        "Wisdom Teeth Removal"
      ]
    },
    
  ];

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
    <button className={styles.button}>Services</button>
    {isOpen && (
      <div className={styles.dropdownContent}>
        {serviceCategories.map((category) => (
          <div key={category.category} className={styles.dropdownColumn}>
            <h3 className={styles.dropdownHeader}>{category.category}</h3>
            <ul>
              {category.services.map(service => (
                <li key={service} className={styles.dropdownItem}>
                  <a href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}>
                    {service}
                  </a>
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