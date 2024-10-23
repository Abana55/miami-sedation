"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Hamburger Menu Icon */}
      <div className={styles["header-hamburger"]} onClick={toggleMenu}>
        <span
          className={`${styles["header-hamburger__line"]} ${
            isMenuOpen ? styles["header-hamburger__line--open-top"] : ""
          }`}
        ></span>
        <span
          className={`${styles["header-hamburger__line"]} ${
            isMenuOpen ? styles["header-hamburger__line--open-middle"] : ""
          }`}
        ></span>
        <span
          className={`${styles["header-hamburger__line"]} ${
            isMenuOpen ? styles["header-hamburger__line--open-bottom"] : ""
          }`}
        ></span>
      </div>

      {/* Logo */}
      <div className={styles["header-logo"]}>
        <Link href="/">
          <Image
            src="/images/1x/3Artboard 1_1.png"
            alt="Bana Dental Design Logo"
            width={100}
            height={100}
            className={styles["header-logo__img"]}
            priority
          />
        </Link>
      </div>

      {/* Contact Info and Button */}
      <div className={styles["header-end"]}>
        <div className={styles["header-end__phone"]}>
          Call us: (305) 857-3731
        </div>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${styles["header-nav"]} ${
          isMenuOpen ? styles["header-nav--open"] : ""
        }`}
      >
        <div className={styles["header-nav__container"]}>
          <Link
            href="/about-us"
            className={styles["header-nav__link"]}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={styles["header-nav__link"]}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/finance-with-us"
            className={styles["header-nav__link"]}
            onClick={closeMenu}
          >
            Finance with Us
          </Link>
          <Link
            href="/contact-us"
            className={styles["header-nav__link"]}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
