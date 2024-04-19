"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Dropdown.module.scss";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const serviceCategories = [
    {
      category: "Cosmetic Dentistry",
      services: [
        { name: "Dental Implants", path: "/dental-services/dental-implants" },
        { name: "Teeth Whitening", path: "/dental-services/teeth-whitening" },
      ],
    },
  ];

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      <button className={styles.button}>Services</button>
      {isOpen && (
        <div
          className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}
        >
          {serviceCategories.map((category, index) => (
            <div key={index} className={styles.dropdownColumn}>
              <h3 className={styles.dropdownHeader}>{category.category}</h3>
              <ul className={styles.dropdownList}>
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className={styles.dropdownItem}>
                    <Link href={service.path}>{service.name}</Link>
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
