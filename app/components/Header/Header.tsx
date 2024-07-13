"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
        Bana Dental Design
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={isMenuOpen ? styles.hamburgerOpen : ""}></div>
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
          <li className={styles.dropdown}>
            Services
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/services/service1">
                  Service 1
                </Link>
              </li>
              <li>
                <Link href="/services/service2">
                  Service 2
                </Link>
              </li>
              <li>
                <Link href="/services/service3">
                  Service 3
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
