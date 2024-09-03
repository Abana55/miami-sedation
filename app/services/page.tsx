import React from "react";
import Head from "next/head";
import ContactBanner from "../components/ContactBanner/ContactBanner";
import ServiceCard from "../components/ServiceCard/ServiceCard"; 
import styles from "./services.module.scss";
import { faTooth, faSmile, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const servicesList = {
  cosmetic: [
    {
      title: "Teeth Whitening",
      description:
        "Brighten your smile with our professional teeth whitening services.",
      image: "/images/5D10A688-BC5F-4D17-9DE7-25F1347CEF64.JPG",
      link: "/dental-services/teeth-whitening",
      icon: faSmile,
    },
    {
      title: "Veneers",
      description: "Get the perfect smile with custom veneers.",
      image: "/images/Teeth Whitening Karolina Grabowska.jpg",
      link: "/dental-services/veneers",
      icon: faSmile,
    },
  ],
  preventive: [
    {
      title: "Teeth Cleaning",
      description: "Maintain your oral health with regular teeth cleaning.",
      image: "/images/IMG_3696.JPG",
      link: "/dental-services/teeth-cleaning",
      icon: faTooth,
    },
    {
      title: "Oral Exams",
      description: "Comprehensive oral exams to ensure your dental health.",
      image: "/images/Implant Photos Shvetsa.jpg",
      link: "/dental-services/oral-exams",
      icon: faShieldAlt,
    },
    {
      title: "X-Rays",
      description: "Advanced dental x-rays for accurate diagnosis.",
      image: "/images/Shiny Diamond.jpg",
      link: "/dental-services/x-rays",
      icon: faTooth,
    },
  ],
  restorative: [
    {
      title: "Dental Implants",
      description:
        "Permanent solutions for missing teeth with dental implants.",
      image: "/images/dental-implants.jpg",
      link: "/dental-services/dental-implants",
      icon: faTooth,
    },
    {
      title: "Fillings",
      description: "Restore your teeth with durable fillings.",
      image: "/images/fallback-image.jpg",
      link: "/dental-services/fillings",
      icon: faTooth,
    },
    {
      title: "Crowns",
      description: "Protect and strengthen your teeth with crowns.",
      image: "/images/crowns.jpg",
      link: "/dental-services/crowns",
      icon: faTooth,
    },
    {
      title: "Bridges",
      description: "Replace missing teeth with dental bridges.",
      image: "/images/bridges.jpg",
      link: "/dental-services/bridges",
      icon: faTooth,
    },
  ],
};

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Our Services | Bana Dental Design</title>
        <meta
          name="description"
          content="Explore the various dental services offered by Bana Dental Design, including cosmetic, preventive, and restorative treatments."
        />
        <meta
          name="keywords"
          content="dental services, cosmetic dentistry, preventive dentistry, restorative dentistry, Bana Dental Design"
        />
      </Head>
      <main className={styles.servicesPage}>
        <header className={styles.servicesPage__header}>
          <h1 className={styles.servicesPage__title}>Our Services</h1>
        </header>

        {/* Cosmetic Treatments Section */}
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>Cosmetic Treatments</h2>
          <p className={styles.servicesPage__description}>
            Cosmetic dentistry focuses on enhancing the appearance of your smile. These treatments can improve the color, shape, position, and alignment of your teeth, giving you a more confident smile.
          </p>
          <div className={styles.servicesPage__cards}>
            {servicesList.cosmetic.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>

        {/* Preventive Treatments Section */}
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>Preventive Treatments</h2>
          <p className={styles.servicesPage__description}>
            Preventive dentistry is the practice of caring for your teeth to keep them healthy. This helps to avoid cavities, gum disease, enamel wear, and more. Regular check-ups, cleanings, and screenings are essential to maintaining your oral health.
          </p>
          <div className={styles.servicesPage__cards}>
            {servicesList.preventive.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>

        {/* Restorative Treatments Section */}
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>Restorative Treatments</h2>
          <p className={styles.servicesPage__description}>
            Restorative dentistry is focused on repairing and restoring your teeth to full health and functionality. Whether you're dealing with cavities, missing teeth, or damaged teeth, these treatments will help you regain a healthy smile.
          </p>
          <div className={styles.servicesPage__cards}>
            {servicesList.restorative.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>

        <ContactBanner />
      </main>
    </>
  );
};

export default ServicesPage;
