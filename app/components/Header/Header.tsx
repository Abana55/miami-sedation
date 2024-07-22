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
        <div className={styles["header-nav__container"]}>
          <button className={styles["header-nav__button"]}>
            <Link href="/about-us" className={styles["header-nav__link"]}>
              About Us
            </Link>
          </button>
          <button className={styles["header-nav__button"]}>
            <Link href="/contact-us" className={styles["header-nav__link"]}>
              Contact Us
            </Link>
          </button>
          <div className={styles["header-nav__services-container"]}>
            <button className={styles["header-nav__button"]} onClick={toggleServicesMenu}>
              <span className={styles["header-nav__link"]}>Services</span>
            </button>
            <div className={`${styles["header-nav__submenu"]} ${isServicesOpen ? styles["header-nav__submenu--open"] : ""}`}>
              <div className={styles["header-nav__submenu-category"]}>
                <h4>Cosmetic Treatments</h4>
                <button className={styles["header-nav__submenu-item"]}>
                  <Link href="/dental-services/teeth-whitening" className={styles["header-nav__submenu-link"]}>Teeth Whitening</Link>
                </button>
                <button className={styles["header-nav__submenu-item"]}>
                  <Link href="/dental-services/veneers" className={styles["header-nav__submenu-link"]}>Veneers</Link>
                </button>
              </div>
              <div className={styles["header-nav__submenu-category"]}>
                <h4>Preventive Treatments</h4>
                <button className={styles["header-nav__submenu-item"]}>
                  <Link href="/dental-services/teeth-cleaning" className={styles["header-nav__submenu-link"]}>Teeth Cleaning</Link>
                </button>
                <button className={styles["header-nav__submenu-item"]}>
                  <Link href="/dental-services/oral-exams" className={styles["header-nav__submenu-link"]}>Oral Exams</Link>
                </button>
                <button className={styles["header-nav__submenu-item"]}>
                  <Link href="/dental-services/x-rays" className={styles["header-nav__submenu-link"]}>X-Rays</Link>
                </button>
              </div>
              <div className={styles["header-nav__submenu-category"]}>
                <h4>Restorative Treatments</h4>
                <button className={styles["header-nav__submenu-item"]}>
                  <Link href="/dental-services/dental-implants" className={styles["header-nav__submenu-link"]}>Dental Implants</Link>
                </button>
                <button className={styles["header-nav__submenu-item"]}>
                  <Link href="/dental-services/fillings" className={styles["header-nav__submenu-link"]}>Fillings</Link>
                </button>
                <button className={styles["header-nav__submenu-item"]}>
                  <Link href="/dental-services/crowns" className={styles["header-nav__submenu-link"]}>Crowns</Link>
                </button>
                <button className={styles["header-nav__submenu-item"]}>
                  <Link href="/dental-services/bridges" className={styles["header-nav__submenu-link"]}>Bridges</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
