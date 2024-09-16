import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <Image
          src="/images/LOGO ICON/Bana Website Logo.png"
          alt="Bana Website Logo"
          width={100}   
          height={160}  
          className={styles["logo-image"]}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerSections}>
          <div className={styles.footerColumn}>
            <h3>Hours</h3>
            <p>Mon: 9:30am-7:00pm</p>
            <p>Tues-Thurs: 8:45am-6:00pm</p>
            <p>Fri: 9:00am-5:00pm</p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Stay in Touch</h3>
            <p>
              <a href="mailto:info@banadental.com">info@banadental.com</a>
            </p>
            <Link href="/contact-us">
              <button className={styles.footerButton}>Contact Us</button>
            </Link>
          </div>
          <div className={styles.footerColumn}>
            <h3>Address</h3>
            <p>2461 Coral Way, Suite 100</p>
            <p>Miami, FL 33145</p>
            <p>
              <a href="tel:+17866255550">(786) 625-5550</a>
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>©2024 Dr. Ramon Bana. All Rights Reserved.</p>
          <div className={styles.footerSocialMedia}>
            <a href="https://www.instagram.com" className={styles.footerIcon} aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com" className={styles.footerIcon} aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.tiktok.com" className={styles.footerIcon} aria-label="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
