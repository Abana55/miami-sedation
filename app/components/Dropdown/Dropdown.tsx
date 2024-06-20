"use client";

import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      category: "Cosmetic Dentistry",
      services: [
        { name: "Dental Implants", href: "/dental-services/dental-implants" },
        { name: "Teeth Whitening", href: "/dental-services/teeth-whitening" },
        { name: "Veneers", href: "/dental-services/veneers" },
      ]
    },
    {
      category: "Preventative Dentistry",
      services: [
        { name: "Teeth Cleaning", href: "/dental-services/teeth-cleaning" },
        { name: "Oral Exams", href: "/dental-services/oral-exams" },
        { name: "X-Rays", href: "/dental-services/x-rays" },
      ]
    },
    {
      category: "Restorative Dentistry",
      services: [
        { name: "Fillings", href: "/dental-services/fillings" },
        { name: "Crowns", href: "/dental-services/crowns" },
        { name: "Bridges", href: "/dental-services/bridges" },
      ]
    },
  ];

  return (
    <>
      <Head>
        <title>Dental Services | Miami Sedation Dentistry</title>
        <meta
          name="description"
          content="Explore our comprehensive dental services including cosmetic dentistry, preventative dentistry, and restorative dentistry at Miami Sedation Dentistry."
        />
        <meta
          name="keywords"
          content="dental services, cosmetic dentistry, preventative dentistry, restorative dentistry, dental implants, teeth whitening, veneers, teeth cleaning, oral exams, X-rays, fillings, crowns, bridges, Miami Sedation Dentistry"
        />
      </Head>
      <div className={styles['dropdown-container']} onMouseLeave={handleMouseLeave}>
        <button
          className={styles.button}
          onClick={toggleDropdown}
          onMouseEnter={handleMouseEnter}
        >
          Services
        </button>
        {isOpen && (
          <div
            className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {serviceCategories.map(category => (
              <section key={category.category} className={styles.category}>
                <h4 className={styles.categoryTitle}>{category.category}</h4>
                <ul className={styles.serviceList}>
                  {category.services.map(service => (
                    <li key={service.name} className={styles.serviceItem}>
                      <Link href={service.href}>
                        {service.name} at Miami Sedation Dentistry
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;