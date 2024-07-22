"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <Link href="/about-us" className={styles["header-nav__button"]}>
            About Us
          </Link>
          <div className={styles["header-nav__separator"]}></div>
          <Link href="/contact-us" className={styles["header-nav__button"]}>
            Contact Us
          </Link>
          <div className={styles["header-nav__separator"]}></div>
          <Link href="/services" className={styles["header-nav__button"]}>
            Services
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
