"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesOpen(false); // Close services submenu when toggling the main menu
  };

  const toggleServicesMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing the main menu when clicking on "Services"
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className={styles["dropdown-container"]} onClick={toggleMenu}>
      <div className={styles["dropdown-hamburger"]}>
        <span className={styles["dropdown-line"]}></span>
        <span className={styles["dropdown-line"]}></span>
        <span className={styles["dropdown-line"]}></span>
      </div>
      {isOpen && (
        <div className={`${styles["dropdown-menu"]} ${isOpen ? styles["dropdown-menu--fade-in"] : ""}`}>
          <ul className={styles["dropdown-menu__list"]}>
            <li className={styles["dropdown-menu__item"]}>
              <Link href="/about-us" className={styles["dropdown-menu__link"]}>
                About Us
              </Link>
            </li>
            <li className={styles["dropdown-menu__item"]}>
              <Link href="/contact-us" className={styles["dropdown-menu__link"]}>
                Contact Us
              </Link>
            </li>
            <li className={`${styles["dropdown-menu__item"]} ${styles["dropdown-menu__item--services"]}`} onClick={toggleServicesMenu}>
              <span className={styles["dropdown-menu__link"]}>Services</span>
              {isServicesOpen && (
                <ul className={`${styles["dropdown-menu__services-list"]} ${isServicesOpen ? styles["dropdown-menu__services-list--fade-in"] : ""}`}>
                  <li className={styles["dropdown-menu__services-item"]}>
                    <Link href="/dental-services/dental-implants" className={styles["dropdown-menu__services-link"]}>
                      Dental Implants
                    </Link>
                  </li>
                  <li className={styles["dropdown-menu__services-item"]}>
                    <Link href="/dental-services/teeth-whitening" className={styles["dropdown-menu__services-link"]}>
                      Teeth Whitening
                    </Link>
                  </li>
                  <li className={styles["dropdown-menu__services-item"]}>
                    <Link href="/dental-services/veneers" className={styles["dropdown-menu__services-link"]}>
                      Veneers
                    </Link>
                  </li>
                  <li className={styles["dropdown-menu__services-item"]}>
                    <Link href="/dental-services/teeth-cleaning" className={styles["dropdown-menu__services-link"]}>
                      Teeth Cleaning
                    </Link>
                  </li>
                  <li className={styles["dropdown-menu__services-item"]}>
                    <Link href="/dental-services/oral-exams" className={styles["dropdown-menu__services-link"]}>
                      Oral Exams
                    </Link>
                  </li>
                  <li className={styles["dropdown-menu__services-item"]}>
                    <Link href="/dental-services/x-rays" className={styles["dropdown-menu__services-link"]}>
                      X-Rays
                    </Link>
                  </li>
                  <li className={styles["dropdown-menu__services-item"]}>
                    <Link href="/dental-services/fillings" className={styles["dropdown-menu__services-link"]}>
                      Fillings
                    </Link>
                  </li>
                  <li className={styles["dropdown-menu__services-item"]}>
                    <Link href="/dental-services/crowns" className={styles["dropdown-menu__services-link"]}>
                      Crowns
                    </Link>
                  </li>
                  <li className={styles["dropdown-menu__services-item"]}>
                    <Link href="/dental-services/bridges" className={styles["dropdown-menu__services-link"]}>
                      Bridges
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
