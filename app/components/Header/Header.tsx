"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MyButton from "../MyButton/MyButton";
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
      <Link href="/" passHref>
          <Image
            src="/images/1x/3Artboard 1_1.png"
            alt="Bana Dental Design Logo"
            width={124}
            height={124}
            className={styles["header-logo__img"]}
            priority 
          />
        </Link>
      </div>
      <div className={styles["header-end"]}>
        <div className={styles["header-end__phone"]}>
          Call us: (305) 555-5555
        </div>
        <Link href="/contact-us" passHref>
          <MyButton className={styles["header-end__button"]}>
            Contact Us
          </MyButton>
        </Link>
      </div>
      <nav
        className={`${styles["header-nav"]} ${
          isMenuOpen ? styles["header-nav--open"] : ""
        }`}
      >
        <div className={styles["header-nav__container"]}>
          <Link href="/about-us" passHref onClick={closeMenu}>
            <MyButton className={styles["header-nav__button"]}>
              About Us
            </MyButton>
          </Link>
          <Link href="/contact-us" passHref onClick={closeMenu}>
            <MyButton className={styles["header-nav__button"]}>
              Contact Us
            </MyButton>
          </Link>
          <Link href="/services" passHref onClick={closeMenu}>
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
