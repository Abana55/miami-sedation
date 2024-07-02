import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com" className={styles.icon}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com" className={styles.icon}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com" className={styles.icon}>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className={styles.footerContent}>
        <section className={styles.location}>
          <h3>Miami Location</h3>
          <p>Ramon Bana, DDS</p>
          <p>2461 Coral Way, Suite 100</p>
          <p>Miami, FL 33145</p>
          <p>
            <a href="tel:+17866255550" className={styles.link}>
              (786) 625-5550
            </a>
          </p>
          <Link href="/map-directions" className={styles.link}>
            Map & Directions
          </Link>
        </section>

        <section className={styles.officeHours}>
          <h3>Office Hours</h3>
          <p>Mon: 9:30am-7:00pm</p>
          <p>Tues-Thurs: 8:45am-6:00pm</p>
          <p>Fri: 9:00am-5:00pm</p>
        </section>

        <section className={styles.additionalLinks}>
          <Link href="/accessibility" className={styles.link}>
            Accessibility
          </Link>
          <Link href="/privacy-policy" className={styles.link}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className={styles.link}>
            Terms of Service
          </Link>
        </section>

        <section className={styles.consultation}>
          <p>
            Call Our Dental Office:{" "}
            <a href="tel:+17866255550" className={styles.link}>
              (786) 625-5550
            </a>
          </p>
          <Link href="/request-consultation" className={styles.link}>
            Request a Consultation
          </Link>
        </section>

        <section className={styles.reviews}>
          <p>4.9 Stars on 280 Google Reviews</p>
        </section>

        <section className={styles.copyRight}>
          <p>©2024 Dr. Ramon Bana. All Rights Reserved.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
