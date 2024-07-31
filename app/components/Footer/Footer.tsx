import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__left"]}>
        <Image
          src="/images/1x/3Artboard 1_1.png" // Update with your logo image path
          alt="Company Logo"
          width={96}
          height={96}
          className={styles["footer__logo"]}
        />
      </div>
      <div className={styles["footer__right"]}>
        <div className={styles["footer__social-media"]}>
          <a href="https://www.facebook.com" className={styles["footer__icon"]} aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com" className={styles["footer__icon"]} aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com" className={styles["footer__icon"]} aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className={styles["footer__content"]}>
          <section className={styles["footer__section"]}>
            <h3 className={styles["footer__section-title"]}>Miami Location</h3>
            <p className={styles["footer__text"]}>Ramon Bana, DDS</p>
            <p className={styles["footer__text"]}>2461 Coral Way, Suite 100</p>
            <p className={styles["footer__text"]}>Miami, FL 33145</p>
            <p className={styles["footer__text"]}>
              <a href="tel:+17866255550" className={styles["footer__link"]}>
                (786) 625-5550
              </a>
            </p>
            <Link href="/map-directions" className={styles["footer__link"]}>
              Map & Directions
            </Link>
          </section>

          <section className={styles["footer__section"]}>
            <h3 className={styles["footer__section-title"]}>Office Hours</h3>
            <p className={styles["footer__text"]}>Mon: 9:30am-7:00pm</p>
            <p className={styles["footer__text"]}>Tues-Thurs: 8:45am-6:00pm</p>
            <p className={styles["footer__text"]}>Fri: 9:00am-5:00pm</p>
          </section>

          <section className={styles["footer__section"]}>
            <Link href="/accessibility" className={styles["footer__link"]}>
              Accessibility
            </Link>
            <Link href="/privacy-policy" className={styles["footer__link"]}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className={styles["footer__link"]}>
              Terms of Service
            </Link>
          </section>

          <section className={styles["footer__section"]}>
            <p className={styles["footer__text"]}>
              Call Our Dental Office:{" "}
              <a href="tel:+17866255550" className={styles["footer__link"]}>
                (786) 625-5550
              </a>
            </p>
            <Link href="/request-consultation" className={styles["footer__link"]}>
              Request a Consultation
            </Link>
          </section>

          <section className={styles["footer__section"]}>
            <p className={styles["footer__text"]}>4.9 Stars on 280 Google Reviews</p>
          </section>

          <section className={`${styles["footer__section"]} ${styles["footer__section--copyright"]}`}>
            <p className={styles["footer__text"]}>©2024 Dr. Ramon Bana. All Rights Reserved.</p>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
