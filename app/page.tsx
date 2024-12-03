import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./components/Home.module.scss";
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
    photo: "/images/aboutUs/DrBana2.jpg",
    description:
      "Dr. Ramon Bana is an experienced dentist specializing in cosmetic and restorative dentistry.",
  },
  {
    name: "Dr. Andrew Brattain",
    title: "Dentist",
    photo: "/images/aboutUs/Drbrattain2.jpg",
    description:
      "Dr. Andrew Brattain focuses on preventative care and oral health education.",
  },
  {
    name: "Judy",
    title: "Hygienist",
    photo: "/images/aboutUs/Judy2.jpg",
    description:
      "Judy is a dedicated hygienist with a passion for patient care and comfort.",
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="preload"
          href="/fonts/YourFont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <title>Bana Dental Design | Miami, FL - Expert Dental Care</title>
        <meta
          name="description"
          content="Expert dental care in Miami, FL, specializing in cosmetic, restorative, and preventive treatments."
        />
        <meta
          property="og:title"
          content="Bana Dental Design | Miami, FL - Expert Dental Care"
        />
        <meta
          property="og:image"
          content="https://www.banadental.com/images/hero-image.jpg"
        />
        <meta
          property="twitter:image"
          content="https://www.banadental.com/images/hero-image.jpg"
        />
      </Head>

      <div className={styles.hero}>
        <video
          className={styles["hero__video"]}
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
        <div className={styles["hero__content"]}>
          <Link href="/contact-us" passHref>
            <button className={styles["hero__content__button"]}>
              Request a Consultation
            </button>
          </Link>
        </div>
      </div>

      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h1 className={styles.welcomeTitle}>Welcome to Bana Dental Design</h1>
          <p className={styles.welcomeDescription}>
            Encounter an elegant, artistry, and inspiring dental experience.
          </p>
          <Link className={styles.welcomeButton} href="/about-us" passHref>
            What Makes Us Different
          </Link>
        </div>
        <div className={styles.welcomeImage}>
          <Image
            src="/images/OFFICCE/Bana Website Smiling.jpg"
            alt="Welcome to Bana Dental Design"
            width={800}
            height={600}
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.missionStatement}>
        <video
          className={styles.bannerVideo}
          src="/videos/BANNER 1.mp4"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/BANNER 1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.textContainer}>
          <div className={styles.goldLine}>|</div>
          <p className={styles.sectionContent}>
            Discover Bana Dental Design, your top-tier modern dental destination
            in Miami, Florida.
          </p>
        </div>
      </section>

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

      {/* Social Media Banner */}
      <div className={styles.banner}>
        <h1 className={styles["banner__title"]}>Connect with Us</h1>
        <div className={styles["banner__content"]}>
          <p className={styles["banner__text"]}>
            We look forward to meeting you.
          </p>
        </div>
        <div className={styles["banner__contact-info"]}>
          <p className={styles["banner__office-number"]}>
            Call us: (123) 456-7890
          </p>
          <Link
            className={styles["banner__schedule-button"]}
            href="/contact-us"
            passHref
          >
            Schedule an Appointment
          </Link>
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
            <h3 className={styles.magazineTitle}>Innovations in Dental Care</h3>
            <p className={styles.magazineDescription}>
              Discover the latest innovations in dental care at Bana Dental
              Design.
            </p>
            <Link href="https://www.example.com/article1" passHref>
              <button className={styles.learnMoreButton}>Learn More</button>
            </Link>
          </div>
          <div className={styles.divider}></div>{" "}
          {/* Divider between the two articles */}
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
            <Link href="https://www.example.com/article2" passHref>
              <button className={styles.learnMoreButton}>Learn More</button>
            </Link>
          </div>
        </div>
      </div>

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
