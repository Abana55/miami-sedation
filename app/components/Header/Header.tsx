"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import MyButton from "../MyButton/MyButton"; 

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
      <div className={styles["header-end"]}>
        <div className={styles["header-end__phone"]}>
          Call us: (305) 555-5555
        </div>
        <MyButton href="/contact-us" className={styles["header-end__button"]}>
          Contact Us
        </MyButton>
      </div>
      <nav
        className={`${styles["header-nav"]} ${
          isMenuOpen ? styles["header-nav--open"] : ""
        }`}
      >
        <div className={styles["header-nav__container"]}>
          <MyButton
            href="/about-us"
            className={styles["header-nav__button"]}
            onClick={closeMenu}
          >
            About Us
          </MyButton>
          <MyButton
            href="/services"
            className={styles["header-nav__button"]}
            onClick={closeMenu}
          >
            Services
          </MyButton>
          <MyButton
            href="/finance-with-us"
            className={styles["header-nav__button"]}
            onClick={closeMenu}
          >
            Finance with Us
          </MyButton>
          <MyButton
            href="/contact-us"
            className={styles["header-nav__button"]}
            onClick={closeMenu}
          >
            Contact Us
          </MyButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
