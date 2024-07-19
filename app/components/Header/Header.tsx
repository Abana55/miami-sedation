"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false); // Close services submenu when toggling the main menu
  };

  const toggleServicesMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing the main menu when clicking on "Services"
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-hamburger"]} onClick={toggleMenu}>
        <span className={`${styles["header-hamburger__line"]} ${isMenuOpen ? styles["header-hamburger__line--open-top"] : ""}`}></span>
        <span className={`${styles["header-hamburger__line"]} ${isMenuOpen ? styles["header-hamburger__line--open-middle"] : ""}`}></span>
        <span className={`${styles["header-hamburger__line"]} ${isMenuOpen ? styles["header-hamburger__line--open-bottom"] : ""}`}></span>
      </div>
      <div className={styles["header-logo"]}>
        <Link href="/" className={styles["header-logo__link"]}>
          Bana Dental Design
        </Link>
      </div>
      <nav className={`${styles["header-nav"]} ${isMenuOpen ? styles["header-nav--open"] : ""}`}>
        <ul className={styles["header-nav__list"]}>
          <li className={styles["header-nav__item"]}>
            <Link href="/about-us" className={styles["header-nav__item__link"]}>
              About Us
            </Link>
          </li>
          <li className={styles["header-nav__item"]}>
            <Link href="/contact-us" className={styles["header-nav__item__link"]}>
              Contact Us
            </Link>
          </li>
          <li className={`${styles["header-nav__item"]} ${styles["header-nav__item--services"]}`} onClick={toggleServicesMenu}>
            <span className={styles["header-nav__item__link"]}>Services</span>
            {isServicesOpen && (
              <div className={styles["header-nav__submenu"]}>
                <div className={styles["header-nav__submenu-category"]}>
                  <h4>Cosmetic Treatments</h4>
                  <ul>
                    <li><Link href="/dental-services/teeth-whitening">Teeth Whitening</Link></li>
                    <li><Link href="/dental-services/veneers">Veneers</Link></li>
                  </ul>
                </div>
                <div className={styles["header-nav__submenu-category"]}>
                  <h4>Preventive Treatments</h4>
                  <ul>
                    <li><Link href="/dental-services/teeth-cleaning">Teeth Cleaning</Link></li>
                    <li><Link href="/dental-services/oral-exams">Oral Exams</Link></li>
                    <li><Link href="/dental-services/x-rays">X-Rays</Link></li>
                  </ul>
                </div>
                <div className={styles["header-nav__submenu-category"]}>
                  <h4>Restorative Treatments</h4>
                  <ul>
                    <li><Link href="/dental-services/dental-implants">Dental Implants</Link></li>
                    <li><Link href="/dental-services/fillings">Fillings</Link></li>
                    <li><Link href="/dental-services/crowns">Crowns</Link></li>
                    <li><Link href="/dental-services/bridges">Bridges</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
