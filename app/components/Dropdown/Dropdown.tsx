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
        "Invisalign Teen®",
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
    {
      category: "Oral Surgery",
      services: [
        "Oral Surgery",
        "Full Mouth Rehabilitation"
      ]
    },
    {
      category: "Sedation Dentistry",
      services: [
        "Sedation Dentistry"
      ]
    },
    {
      category: "Restorative Dentistry",
      services: [
        "All-on-4® Dental Implants",
        "Dental Implants",
        "Dental Inlays/Onlays",
        "Dentures & Partials",
        "Dental Bridges",
        "Hybridge®",
        "Implant-Supported Dentures",
        "Restorative Dentistry",
        "Root Canals",
        "Same-Day Crowns",
        "Teeth Tomorrow®",
        "Teeth in a Day",
        "Tooth-Colored Fillings (BPA-Free)"
      ]
    }
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
                    <a href={`/services/${service.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}>
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