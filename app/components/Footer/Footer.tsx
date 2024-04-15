import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section className={styles.location}>
          <h3>Miami Location</h3>
          <p>Ramon Bana, DDS</p>
          <p>2461 Coral Way, Suite 100</p>
          <p>Miami, FL 33145</p>
          <p><a href="tel:+17866255550">(786) 625-5550</a></p>
          <Link href="/map-directions"><a>Map & Directions</a></Link>
        </section>

        <section className={styles.officeHours}>
          <h3>Office Hours</h3>
          <p>Mon: 9:30am-7:00pm</p>
          <p>Tues-Thurs: 8:45am-6:00pm</p>
          <p>Fri: 9:00am-5:00pm</p>
        </section>

        <section className={styles.additionalLinks}>
          <Link href="/accessibility"><a>Accessibility</a></Link>
          <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
          <Link href="/terms-of-service"><a>Terms of Service</a></Link>
        </section>

        <section className={styles.consultation}>
          <p>Call Our Dental Office: <a href="tel:+17866255550">(786) 625-5550</a></p>
          <Link href="/request-consultation"><a>Request a Consultation</a></Link>
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
