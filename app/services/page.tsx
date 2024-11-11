import React from "react";
import Head from "next/head";
import Link from "next/link";
import ContactBanner from "../components/ContactBanner/ContactBanner";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import styles from "./services.module.scss";

const servicesList = {
  preventive: [
    {
      title: "Teeth Cleaning",
      description: "Routine cleanings to maintain optimal oral health.",
      image: "/images/Teeth Whitening Photo by Cedric Fauntleroy.jpg",
      link: "/dental-services/teeth-cleaning",
    },
    {
      title: "Oral Exams",
      description: "Thorough exams for early detection of dental issues.",
      image: "/images/Implant Photos Shvetsa.jpg",
      link: "/dental-services/oral-exams",
    },
    {
      title: "X-Rays",
      description: "High-resolution x-rays for precise dental diagnostics.",
      image: "/images/Shiny Diamond.jpg",
      link: "/dental-services/x-rays",
    },
  ],
  restorative: [
    {
      title: "Crowns",
      description: "Custom crowns to protect and restore your teeth.",
      image: "/images/crowns.jpg",
      link: "/dental-services/crowns",
    },
    {
      title: "Bridges",
      description: "Replace missing teeth with durable, natural-looking bridges.",
      image: "/images/bridges.jpg",
      link: "/dental-services/bridges",
    },
    {
      title: "Fillings",
      description: "Long-lasting fillings to repair cavities effectively.",
      image: "/images/fillings.jpg",
      link: "/dental-services/fillings",
    },
    {
      title: "Dental Implants",
      description: "Permanent, secure replacements for missing teeth.",
      image: "/images/dental-implants.jpg",
      link: "/dental-services/dental-implants",
    },
    {
      title: "Inlays and Onlays",
      description: "Precisely crafted inlays and onlays for tooth restoration.",
      image: "/images/inlays-onlays.jpg",
      link: "/dental-services/inlays-onlays",
    },
  ],
  cosmetic: [
    {
      title: "Teeth Whitening",
      description: "Professional treatments to whiten and brighten your smile.",
      image: "/images/teeth-whitening.jpg",
      link: "/dental-services/teeth-whitening",
    },
    {
      title: "Veneers",
      description: "Achieve a flawless smile with custom-made veneers.",
      image: "/images/veneers.jpg",
      link: "/dental-services/veneers",
    },
    {
      title: "Full Mouth Rehab",
      description: "Comprehensive solutions for a revitalized smile.",
      image: "/images/smile-makeovers.jpg",
      link: "/dental-services/smile-makeovers",
    },
    {
      title: "Gum Contouring",
      description: "Refine your gum line for a more balanced smile.",
      image: "/images/gum-contouring.jpg",
      link: "/dental-services/gum-contouring",
    },
    {
      title: "Full Arch Dentistry",
      description: "Advanced treatments for complete smile reconstruction.",
      image: "/images/full-arch-dentistry.jpg",
      link: "/dental-services/full-arch-dentistry",
    },
  ],
  specialized: [
    {
      title: "Emergency Dentistry",
      description: "Urgent care for immediate dental needs.",
      image: "/images/emergency-dentistry.jpg",
      link: "/dental-services/emergency-dentistry",
    },
    {
      title: "Sedation Dentistry",
      description: "Comfort-enhancing sedation options for a relaxed experience.",
      image: "/images/sedation-dentistry.jpg",
      link: "/dental-services/sedation-dentistry",
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
          <p className={styles.servicesPage__intro}>
            We offer a wide range of dental services to meet your needs, from
            preventive care to restorative and cosmetic treatments. Explore our
            services to see how we can help you maintain a healthy, beautiful
            smile.
          </p>
        </header>

        {/* Preventive Care Section */}
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>
            Preventive Care
          </h2>
          <p className={styles.servicesPage__description}>
            Preventive care is essential for maintaining your oral health and
            catching potential issues early. Our preventive services help you
            keep your teeth and gums healthy.
          </p>
          <div className={styles.servicesPage__cards}>
            {servicesList.preventive.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <Link
            href="/dental-services/preventive-care"
            className={styles.servicesPage__moreLink}
          >
            Learn more about Preventive Care
          </Link>
        </section>

        {/* Restorative Care Section */}
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>
            Restorative Dental Treatments
          </h2>
          <p className={styles.servicesPage__description}>
            Our restorative treatments focus on repairing damaged teeth and
            restoring function. Whether you're dealing with cavities or missing
            teeth, we have solutions to bring back your healthy smile.
          </p>
          <div className={styles.servicesPage__cards}>
            {servicesList.restorative.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <Link
            href="/dental-services/restorative-care"
            className={styles.servicesPage__moreLink}
          >
            Learn more about Restorative Dental Treatments
          </Link>
        </section>

        {/* Cosmetic Dentistry Section */}
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>
            Cosmetic Dentistry
          </h2>
          <p className={styles.servicesPage__description}>
            Cosmetic dentistry can enhance the appearance of your teeth and
            gums, giving you a more confident smile. From whitening to veneers,
            we offer a range of services to improve your smile.
          </p>
          <div className={styles.servicesPage__cards}>
            {servicesList.cosmetic.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <Link
            href="/dental-services/cosmetic-care"
            className={styles.servicesPage__moreLink}
          >
            Learn more about Cosmetic Dentistry
          </Link>
        </section>

        {/* Specialized Care Section */}
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>
            Specialized Care
          </h2>
          <p className={styles.servicesPage__description}>
            Our specialized care services ensure you receive the best treatment
            for complex dental needs, including emergency and sedation dentistry.
          </p>
          <div className={styles.servicesPage__cards}>
            {servicesList.specialized.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <Link
            href="/dental-services/specialized-care"
            className={styles.servicesPage__moreLink}
          >
            Learn more about Specialized Care
          </Link>
        </section>

        <ContactBanner />
      </main>
    </>
  );
};

export default ServicesPage;
