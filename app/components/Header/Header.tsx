"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Dropdown from "../Dropdown/Dropdown";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-hamburger"]} onClick={toggleMenu}>
        <span className={`${styles["header-line"]} ${isMenuOpen ? styles["header-line--open"] : ""}`}></span>
        <span className={`${styles["header-line"]} ${isMenuOpen ? styles["header-line--open"] : ""}`}></span>
        <span className={`${styles["header-line"]} ${isMenuOpen ? styles["header-line--open"] : ""}`}></span>
      </div>
      <div className={styles["header-logo"]}>
        <Link href="/" className={styles["header-logo__link"]}>
          Bana Dental Design
        </Link>
      </div>
      <nav className={`${styles["header-nav"]} ${isMenuOpen ? styles["header-nav--open"] : ""}`}>
        <ul className={styles["header-nav__list"]}>
          <li className={styles["header-nav__item"]}>
            <Link href="/about-us" className={styles["header-nav__link"]}>
              About Us
            </Link>
          </li>
          <li className={styles["header-nav__item"]}>
            <Link href="/contact-us" className={styles["header-nav__link"]}>
              Contact Us
            </Link>
          </li>
          <li className={styles["header-nav__item"]}>
            <Dropdown />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
