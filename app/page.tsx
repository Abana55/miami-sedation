import React from "react";
import Link from "next/link";
import styles from "./components/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.glassBox}>
          <h1 className={styles.heroTitle}>Bana Dental Design</h1>
          <p className={styles.heroTagline}>(786) 625-5550</p>
          <Link href="/contact-us">
            <button className={styles.consultButton}>Request a Consult</button>
          </Link>
        </div>
      </div>
      <section className={styles.missionStatement}>
        <div className={styles.missionContent}>
          <div className={styles.textContent}>
            <h2 className={styles.welcomeTitle}>
              Welcome to Bana Dental Design
            </h2>
            <Link href="/about-us" className={styles.differentButton}>
              What Makes Us Different
            </Link>
          </div>
          <div className={styles.imageContent}>
            <img
              src="images/Implant Photos Babydov.jpg"
              alt="Dental Office"
              className={styles.missionImage}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <h3>Cosmetic Dentistry</h3>
            <p>
              Enhance your smile with our state-of-the-art cosmetic dental
              services.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Preventive Care</h3>
            <p>
              Regular exams, cleanings, and x-rays to maintain your oral health.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Sedation Dentistry</h3>
            <p>Experience pain-free dentistry with our sedation techniques.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Patients Say</h2>
        <div className={styles.testimonialItem}>
          <p>
            "The best dental experience I've ever had! The staff was friendly
            and Dr. Bana made me feel at ease through the entire process."
          </p>
          <cite>— John Doe</cite>
        </div>
      </section>

      {/* Call to Action for Appointments */}
      <section className={styles.callToAction}>
        <h2 className={styles.sectionTitle}>Ready to Smile?</h2>
        <p>Book your next appointment with us today!</p>
        <button className={styles.ctaButton}>Book Appointment</button>
      </section>

      {/* Footer Image or Banner */}
      <div className={styles.footerImage}>
        <img
          src="/path/to/dental-office-photo.jpg"
          alt="Our Modern Dental Office"
        />
      </div>
    </div>
  );
};

export default Home;
