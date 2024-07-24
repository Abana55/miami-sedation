"use client";

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
      image: "/images/veneers.jpg",
      link: "/dental-services/veneers",
    },
  ],
  preventive: [
    {
      title: "Teeth Cleaning",
      description: "Maintain your oral health with regular teeth cleaning.",
      image: "/images/teeth-cleaning.jpg",
      link: "/dental-services/teeth-cleaning",
    },
    {
      title: "Oral Exams",
      description: "Comprehensive oral exams to ensure your dental health.",
      image: "/images/oral-exams.jpg",
      link: "/dental-services/oral-exams",
    },
    {
      title: "X-Rays",
      description: "Advanced dental x-rays for accurate diagnosis.",
      image: "/images/x-rays.jpg",
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
    <div className={styles.services}>
      <h1 className={styles["services__title"]}>Our Services</h1>
      <section className={styles["services__category"]}>
        <h2 className={styles["services__category-title"]}>Cosmetic Treatments</h2>
        <div className={styles["services__cards"]}>
          {servicesList.cosmetic.map((service, index) => (
            <Link href={service.link} key={index} className={styles["services__card"]}>
              <div className={styles["services__card-content"]}>
                <img src={service.image} alt={service.title} className={styles["services__card-image"]} />
                <h3 className={styles["services__card-title"]}>{service.title}</h3>
                <p className={styles["services__card-description"]}>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles["services__category"]}>
        <h2 className={styles["services__category-title"]}>Preventive Treatments</h2>
        <div className={styles["services__cards"]}>
          {servicesList.preventive.map((service, index) => (
            <Link href={service.link} key={index} className={styles["services__card"]}>
              <div className={styles["services__card-content"]}>
                <img src={service.image} alt={service.title} className={styles["services__card-image"]} />
                <h3 className={styles["services__card-title"]}>{service.title}</h3>
                <p className={styles["services__card-description"]}>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles["services__category"]}>
        <h2 className={styles["services__category-title"]}>Restorative Treatments</h2>
        <div className={styles["services__cards"]}>
          {servicesList.restorative.map((service, index) => (
            <Link href={service.link} key={index} className={styles["services__card"]}>
              <div className={styles["services__card-content"]}>
                <img src={service.image} alt={service.title} className={styles["services__card-image"]} />
                <h3 className={styles["services__card-title"]}>{service.title}</h3>
                <p className={styles["services__card-description"]}>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactBanner /> 
    </div>
  );
};

export default ServicesPage;
