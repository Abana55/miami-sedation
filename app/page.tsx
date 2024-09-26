import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./components/Home.module.scss";
import "./styles/globals.scss";
import TeamAccordion from "./components/TeamAccordion/TeamAccordion";
import OurOffice from "./components/OurOffice/OurOffice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  {
    name: "Dr. Ramon Bana",
    title: "Dentist",
    photo: "/images/5D10A688-BC5F-4D17-9DE7-25F1347CEF64.JPG",
    description:
      "Dr. Ramon Bana is an experienced dentist specializing in cosmetic and restorative dentistry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Dr. Andrew Brattain",
    title: "Dentist",
    photo: "/images/IMG_6450.jpeg",
    description:
      "Dr. Andrew Brattain focuses on preventative care and oral health education. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Doe",
    title: "Hygienist",
    photo: "/images/jane-doe.jpg",
    description:
      "Jane Doe is a dedicated hygienist with a passion for patient care and comfort. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more team members as needed
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
  <title>Bana Dental Design | Miami, FL - Expert Dental Care with a Gentle Touch</title>
  <meta
    name="description"
    content="Bana Dental Design offers expert dental care with a gentle touch in Miami, FL. Specializing in cosmetic, restorative, and preventive dental treatments."
  />
  <meta
    name="keywords"
    content="Bana Dental Design, Miami dentist, cosmetic dentistry, restorative dentistry, preventive dental care, teeth whitening, dental implants, veneers, crowns, oral exams, X-rays, dental bridges"
  />
  <meta name="author" content="Dr. Ramon Bana" />
  <meta property="og:title" content="Bana Dental Design | Miami, FL - Expert Dental Care with a Gentle Touch" />
  <meta property="og:description" content="Bana Dental Design in Miami, FL, offers professional and gentle cosmetic, restorative, and preventive dental treatments for the entire family." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.banadental.com" />
  <meta property="og:image" content="https://www.banadental.com/images/hero-image.jpg" />
  <meta property="og:site_name" content="Bana Dental Design" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bana Dental Design | Expert Dental Care in Miami, FL" />
  <meta name="twitter:description" content="Providing expert cosmetic, restorative, and preventive dental care in Miami. Contact us to book your consultation today." />
  <meta name="twitter:image" content="https://www.banadental.com/images/hero-image.jpg" />
  <link rel="canonical" href="https://www.banadental.com" />
  <meta name="robots" content="index, follow" />

  <!-- Local Business Structured Data for SEO -->
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Bana Dental Design",
        "image": "https://www.banadental.com/images/hero-image.jpg",
        "url": "https://www.banadental.com",
        "telephone": "(786) 625-5550",
        "email": "info@banadental.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2461 Coral Way, Suite 100",
          "addressLocality": "Miami",
          "addressRegion": "FL",
          "postalCode": "33145",
          "addressCountry": "US"
        },
        "openingHours": [
          "Mo 09:30-19:00",
          "Tu-Th 08:45-18:00",
          "Fr 09:00-17:00"
        ],
        "priceRange": "$$",
        "description": "Bana Dental Design in Miami provides cosmetic, preventive, and restorative dental care with a gentle touch. Services include teeth whitening, dental implants, crowns, and more.",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.7505,
          "longitude": -80.2356
        },
        "sameAs": [
          "https://www.instagram.com/banadental",
          "https://www.facebook.com/banadental",
          "https://twitter.com/banadental"
        ]
      }
    `}
  </script>
</Head>

      <div className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          preload="auto" 
          playsInline 
          poster="/images/fallback-image.jpg" 
        >
          <source src="/videos/Website Video 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.heroContent}>
          <Link href="/contact-us">
            <button className={styles.heroButton}>
              Request a Consultation
            </button>
          </Link>
        </div>
      </div>
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h1 className={styles.welcomeTitle}>Welcome to Bana Dental Design</h1>
          <p className={styles.welcomeDescription}>
            Encounter an elegant, artistry, and inspiring dental experience
          </p>
          <button className={styles.welcomeButton}>
            What Makes Us Different
          </button>
        </div>
        <div className={styles.welcomeImage}>
          <img
            src="/images/OFFICCE/Bana Website Smiling.jpg"
            alt="Welcome to Bana Dental Design"
          />
        </div>
      </section>

      <section className={styles.missionStatement}>
        <img
          className={styles.bannerImage}
          src="/images/Figma 97b407c020051452.gif"
          alt="Mission Banner"
        />
        <div className={styles.textContainer}>
          <div className={styles.goldLine}>|</div>
          <p className={styles.sectionContent}>
            Discover Bana Dental Design, your top-tier modern dental destination
            nestled in vibrant Miami, Florida. Elevate your dental experience
            with our innovative services and concierge-level care.
          </p>
          <p className={styles.sectionContent}>
            Our skilled dentist harnesses cutting-edge digital workflows,
            conservative biomimetic techniques, and state-of-the-art 3D printing
            & design to address your cosmetic and general dentistry requirements
            seamlessly.
          </p>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className={styles.services}>
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
      </section> */}

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.teamContent}>
          <div className={styles.team}>
            <TeamAccordion teamMembers={teamMembers} />
          </div>
          <article className={styles.articleSection}>
            <h2 className={styles.articleTitle}>
              EXPERIENCE THE PINNACLE OF DENTAL EXCELLENCE WITH US.
            </h2>
          </article>
        </div>
      </section>
      <div className={styles.banner}>
        <h1 className={styles["banner__title"]}>Connect with Us</h1>
        <div className={styles["banner__content"]}>
          <p className={styles["banner__text"]}>
            We look forward to meeting you.
          </p>
          <div className={styles["banner__social-links"]}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["banner__social-link"]}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["banner__social-link"]}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["banner__social-link"]}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className={styles["banner__contact-info"]}>
          <p className={styles["banner__office-number"]}>
            Call us: (123) 456-7890
          </p>
          <a href="/contact" className={styles["banner__schedule-button"]}>
            Schedule an Appointment
          </a>
        </div>
      </div>

      {/* Our Office Section */}

      <OurOffice />

      <div className={styles.magazineSection}>
        <div className={styles.glassmorphicContainer}>
          <div className={styles.magazineArticle}>
            <img
              src="/images/magazine1.jpg"
              alt="Magazine Article 1"
              className={styles.magazineImage}
            />
            <h3 className={styles.magazineTitle}>
              Exclusive Interview with Dr. Ramon Bana
            </h3>
            <p className={styles.magazineDescription}>
              Read about Dr. Bana's journey in the latest issue of Luxury Dental
              Magazine.
            </p>
            <Link href="https://www.example.com/article1">
              <button className={styles.learnMoreButton}>Learn More</button>
            </Link>
          </div>

          <div className={styles.verticalDivider}></div>

          <div className={styles.magazineArticle}>
            <img
              src="/images/magazine2.jpg"
              alt="Magazine Article 2"
              className={styles.magazineImage}
            />
            <h3 className={styles.magazineTitle}>Top 10 Cosmetic Dentists</h3>
            <p className={styles.magazineDescription}>
              Discover why Bana Dental Design is listed among the top 10
              cosmetic dentists in the country.
            </p>
            <Link href="https://www.example.com/article2">
              <button className={styles.learnMoreButton}>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      {/* <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Patients Say</h2>
        <div className={styles.testimonialItem}>
          <p>
            "The best dental experience I've ever had! The staff was friendly
            and Dr. Bana made me feel at ease through the entire process."
          </p>
          <cite>— John Doe</cite>
        </div>
      </section> */}

      {/* Call to Action for Appointments */}
      {/* <section className={styles.callToAction}>
        <h2 className={styles.sectionTitle}>Ready to Smile?</h2>
        <p>Book your next appointment with us today!</p>
        <button className={styles.ctaButton}>Book Appointment</button>
      </section> */}

      <div className={styles.imageBanner}>
        <img
          src="/images/LOGOS/LOGOS.png"
          alt="Dr. Banas associated organizations"
        />
      </div>
    </div>
  );
};

export default Home;
