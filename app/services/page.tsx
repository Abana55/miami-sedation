import React from "react";
import Head from "next/head";
import Link from "next/link";
import ContactBanner from "../components/ContactBanner/ContactBanner";
import styles from "./services.module.scss";

const servicesList = {
  cosmetic: [
    {
      title: "Teeth Whitening",
      description: "Brighten your smile with our professional teeth whitening services.",
      image: "/images/5D10A688-BC5F-4D17-9DE7-25F1347CEF64.JPG",
      link: "/dental-services/teeth-whitening",
    },
    {
      title: "Veneers",
      description: "Get the perfect smile with custom veneers.",
      image: "/images/Teeth Whitening Karolina Grabowska.jpg",
      link: "/dental-services/veneers",
    },
  ],
  preventive: [
    {
      title: "Teeth Cleaning",
      description: "Maintain your oral health with regular teeth cleaning.",
      image: "/images/IMG_3696.JPG",
      link: "/dental-services/teeth-cleaning",
    },
    {
      title: "Oral Exams",
      description: "Comprehensive oral exams to ensure your dental health.",
      image: "/images/Implant Photos Shvetsa.jpg",
      link: "/dental-services/oral-exams",
    },
    {
      title: "X-Rays",
      description: "Advanced dental x-rays for accurate diagnosis.",
      image: "/images/Shiny Diamond.jpg",
      link: "/dental-services/x-rays",
    },
  ],
  restorative: [
    {
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth with dental implants.",
      image: "/images/dental-implants.jpg",
      link: "/dental-services/dental-implants",
    },
    {
      title: "Fillings",
      description: "Restore your teeth with durable fillings.",
      image: "/images/fillings.jpg",
      link: "/dental-services/fillings",
    },
    {
      title: "Crowns",
      description: "Protect and strengthen your teeth with crowns.",
      image: "/images/crowns.jpg",
      link: "/dental-services/crowns",
    },
    {
      title: "Bridges",
      description: "Replace missing teeth with dental bridges.",
      image: "/images/bridges.jpg",
      link: "/dental-services/bridges",
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
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>Cosmetic Treatments</h2>
          <div className={styles.servicesPage__cards}>
            {servicesList.cosmetic.map((service, index) => (
              <Link href={service.link} key={index} className={styles.servicesPage__card}>
                <div className={styles.servicesPage__cardContent}>
                  <img src={service.image} alt={service.title} className={styles.servicesPage__cardImage} />
                  <h3 className={styles.servicesPage__cardTitle}>{service.title}</h3>
                  <p className={styles.servicesPage__cardDescription}>{service.description}</p>
                  <button className={styles.servicesPage__button}>Learn More</button>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>Preventive Treatments</h2>
          <div className={styles.servicesPage__cards}>
            {servicesList.preventive.map((service, index) => (
              <Link href={service.link} key={index} className={styles.servicesPage__card}>
                <div className={styles.servicesPage__cardContent}>
                  <img src={service.image} alt={service.title} className={styles.servicesPage__cardImage} />
                  <h3 className={styles.servicesPage__cardTitle}>{service.title}</h3>
                  <p className={styles.servicesPage__cardDescription}>{service.description}</p>
                  <button className={styles.servicesPage__button}>Learn More</button>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className={styles.servicesPage__category}>
          <h2 className={styles.servicesPage__categoryTitle}>Restorative Treatments</h2>
          <div className={styles.servicesPage__cards}>
            {servicesList.restorative.map((service, index) => (
              <Link href={service.link} key={index} className={styles.servicesPage__card}>
                <div className={styles.servicesPage__cardContent}>
                  <img src={service.image} alt={service.title} className={styles.servicesPage__cardImage} />
                  <h3 className={styles.servicesPage__cardTitle}>{service.title}</h3>
                  <p className={styles.servicesPage__cardDescription}>{service.description}</p>
                  <button className={styles.servicesPage__button}>Learn More</button>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <ContactBanner />
      </main>
    </>
  );
};

export default ServicesPage;
