import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./components/Home.module.scss";
import "./styles/globals.scss";
import TeamAccordion from "./components/TeamAccordion/TeamAccordion";

const teamMembers = [
  {
    name: "Dr. Ramon Bana",
    title: "Dentist",
    photo: "/images/5D10A688-BC5F-4D17-9DE7-25F1347CEF64.JPG",
    description: "Dr. Ramon Bana is an experienced dentist specializing in cosmetic and restorative dentistry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Dr. Andrew Brattain",
    title: "Dentist",
    photo: "/images/IMG_6450.jpeg",
    description: "Dr. Andrew Brattain focuses on preventative care and oral health education. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Doe",
    title: "Hygienist",
    photo: "/images/jane-doe.jpg",
    description: "Jane Doe is a dedicated hygienist with a passion for patient care and comfort. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more team members as needed
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bana Dental Design</title>
        <meta
          name="description"
          content="Providing expert dental care with a gentle touch."
        />
      </Head>
      <div className={styles.hero}>
        <div className={styles.glassBox}>
          <h1 className={styles.heroTitle}>Welcome to Bana Dental Design</h1>
          <p className={styles.heroTagline}>
            Providing expert dental care with a gentle touch.
          </p>
          <div className={styles.contactBox}>
            <p>Call us: (123) 456-7890</p>
            <Link href="/contact-us">
              <button className={styles.contactButton}>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
      <section className={styles.missionStatement}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.sectionContent}>
          Our mission is to provide compassionate and comprehensive dental care
          to our patients, ensuring their comfort and well-being at every visit.
        </p>
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

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.team}>
          <h2 className={styles.sectionTitle}>Meet Our Team</h2>
          <TeamAccordion teamMembers={teamMembers} />
        </div>
        <article className={styles.articleSection}>
          <h2 className={styles.articleTitle}>Additional Information</h2>
          <p className={styles.articleContent}>
            Here you can add more information about your dental practice, services, or any other relevant details that you want to share with your patients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Vivamus auctor, mi et luctus vehicula, urna ligula tincidunt risus, sit amet vestibulum lorem ipsum nec arcu.
          </p>
        </article>
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
