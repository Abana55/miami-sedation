"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesOpen(false); // Close services submenu when toggling the main menu
  };

  const toggleServicesMenu = (e) => {
    e.stopPropagation(); // Prevent closing the main menu when clicking on "Services"
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className={styles.dropdownContainer} onClick={toggleMenu}>
      <div className={styles.hamburger}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <ul>
            <li>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
            <li className={styles.services} onClick={toggleServicesMenu}>
              <span>Services</span>
              {isServicesOpen && (
                <ul className={styles.servicesMenu}>
                  <li>
                    <Link href="/dental-services/dental-implants">
                      Dental Implants
                    </Link>
                  </li>
                  <li>
                    <Link href="/dental-services/teeth-whitening">
                      Teeth Whitening
                    </Link>
                  </li>
                  <li>
                    <Link href="/dental-services/veneers">Veneers</Link>
                  </li>
                  <li>
                    <Link href="/dental-services/teeth-cleaning">
                      Teeth Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/dental-services/oral-exams">Oral Exams</Link>
                  </li>
                  <li>
                    <Link href="/dental-services/x-rays">X-Rays</Link>
                  </li>
                  <li>
                    <Link href="/dental-services/fillings">Fillings</Link>
                  </li>
                  <li>
                    <Link href="/dental-services/crowns">Crowns</Link>
                  </li>
                  <li>
                    <Link href="/dental-services/bridges">Bridges</Link>
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
