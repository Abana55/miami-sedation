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
          src="/images/1x/3Artboard 1_1.png" // Update with your logo image path
          alt="Company Logo"
          layout="fill"
          objectFit="contain"
          className={styles.footerLogo}
        />
      </div>
      <div className={styles.footerRight}>
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
