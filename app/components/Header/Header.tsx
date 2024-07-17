"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.line} ${isMenuOpen ? styles.line1 : ""}`}></span>
        <span className={`${styles.line} ${isMenuOpen ? styles.line2 : ""}`}></span>
        <span className={`${styles.line} ${isMenuOpen ? styles.line3 : ""}`}></span>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          Bana Dental Design
        </Link>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul>
          <li>
            <Link href="/about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              Contact Us
            </Link>
          </li>
          <li>
            <Dropdown />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
