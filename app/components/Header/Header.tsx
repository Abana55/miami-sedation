"use client";

import React, { useState } from "react";
import Link from "next/link";
import MyButton from "../MyButton/MyButton";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
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
      <div className={styles["header-logo"]}>
        <Link href="/" className={styles["header-logo__link"]}>
          Bana Dental Design
        </Link>
      </div>
      <nav
        className={`${styles["header-nav"]} ${
          isMenuOpen ? styles["header-nav--open"] : ""
        }`}
      >
        <div className={styles["header-nav__container"]}>
          <Link href="/about-us" passHref>
            <MyButton className={styles["header-nav__button"]}>
              About Us
            </MyButton>
          </Link>
          <Link href="/contact-us" passHref>
            <MyButton className={styles["header-nav__button"]}>
              Contact Us
            </MyButton>
          </Link>
          <Link href="/services" passHref>
            <MyButton className={styles["header-nav__button"]}>
              Services
            </MyButton>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
