"use client";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../DentalServices.module.scss";
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";

const TeethWhitening = () => {
  const articleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              styles["service-page__articles--visible"]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (articleRef.current) {
      observer.observe(articleRef.current);
    }

    return () => {
      if (articleRef.current) {
        observer.unobserve(articleRef.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Teeth Whitening | Bana Dental Design</title>
        <meta
          name="description"
          content="Learn about professional teeth whitening services provided by Bana Dental Design. Achieve a brighter smile with our safe and effective teeth whitening options."
        />
        <meta
          name="keywords"
          content="teeth whitening, cosmetic dentistry, smile enhancement, Bana Dental Design"
        />
        <meta name="author" content="Bana Dental Design" />
        <meta
          property="og:title"
          content="Teeth Whitening | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Learn about professional teeth whitening services provided by Bana Dental Design. Achieve a brighter smile with our safe and effective teeth whitening options."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/services/teeth-whitening"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/TeethWhitening.jpg"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/services/teeth-whitening"
        />
      </Head>

      <main className={styles["service-page"]}>
        {/* Hero Section */}
        <section className={styles["service-page__hero"]}>
          <div className={styles["service-page__hero-overlay"]}>
            <h1 className={styles["service-page__header"]}>Teeth Whitening</h1>
            <p className={styles["service-page__intro-text"]}>
              Brighten your smile with our professional teeth whitening
              services. Safe, effective, and designed to give you the confidence
              to smile again.
            </p>
            <Link href="#contact" passHref>
              <button className={styles["service-page__cta-button"]}>
                Schedule a Consultation
              </button>
            </Link>
          </div>
          <img
            src="/images/Shiny Diamond.jpg"
            alt="Teeth Whitening Hero"
            className={styles["service-page__hero-image"]}
          />
        </section>

        {/* What is Teeth Whitening */}
        <section className={styles["service-page__details"]}>
          <h2 className={styles["service-page__subheader"]}>
            What is Teeth Whitening?
          </h2>
          <div className={styles["service-page__two-column"]}>
            <img
              src="/images/teeth-whitening-diagram.jpg"
              alt="Teeth Whitening Diagram"
              className={styles["service-page__image"]}
            />
            <p className={styles["service-page__text"]}>
              Teeth whitening is a cosmetic dental procedure that lightens the
              color of your teeth and removes stains caused by food, drinks,
              smoking, or aging. It is one of the most effective ways to achieve
              a bright, white smile.
            </p>
          </div>
        </section>

        {/* Types of Teeth Whitening */}
        <section className={styles["service-page__types"]}>
          <h2 className={styles["service-page__subheader"]}>
            Types of Teeth Whitening
          </h2>
          <div className={styles["service-page__types-grid"]}>
            <div className={styles["service-page__type-card"]}>
              <h3>In-Office Whitening</h3>
              <p>
                Performed by a professional, in-office whitening can
                dramatically whiten your teeth in just one session using
                high-strength bleaching agents activated by light.
              </p>
              <img
                src="/images/in-office-whitening.jpg"
                alt="In-Office Teeth Whitening"
                className={styles["service-page__image"]}
              />
            </div>

            <div className={styles["service-page__type-card"]}>
              <h3>Take-Home Whitening Kits</h3>
              <p>
                Custom-made trays fitted by your dentist with professional-grade
                whitening gel. Achieve gradual but effective results in the
                comfort of your home.
              </p>
              <img
                src="/images/take-home-kit.jpg"
                alt="Take-Home Whitening Kits"
                className={styles["service-page__image"]}
              />
            </div>

            <div className={styles["service-page__type-card"]}>
              <h3>Over-the-Counter Products</h3>
              <p>
                Available at drugstores, over-the-counter products are
                affordable but may not deliver the same results as professional
                treatments.
              </p>
              <img
                src="/images/otc-whitening-products.jpg"
                alt="Over-the-Counter Whitening Products"
                className={styles["service-page__image"]}
              />
            </div>
          </div>
        </section>

        {/* Benefits of Teeth Whitening */}
        <section className={styles["service-page__benefits"]}>
          <h2 className={styles["service-page__subheader"]}>
            Benefits of Teeth Whitening
          </h2>
          <ul className={styles["service-page__list"]}>
            <li>Removes deep-set stains and discoloration.</li>
            <li>Enhances the appearance of your smile.</li>
            <li>Boosts your self-confidence.</li>
            <li>Safe, quick, and effective.</li>
          </ul>
        </section>

        {/* Procedure Overview */}
        <section className={styles["service-page__procedure"]}>
          <h2 className={styles["service-page__subheader"]}>
            Procedure Overview
          </h2>
          <div className={styles["service-page__procedure-steps"]}>
            <h3>Initial Consultation</h3>
            <p>
              During the consultation, your dentist will evaluate your oral
              health and discuss which whitening method suits you best.
            </p>

            <h3>Whitening Procedure</h3>
            <p>
              In-office whitening includes cleaning, protecting the gums,
              applying the gel, and activating it with light. Take-home kits
              involve custom trays and a whitening solution for gradual
              whitening over weeks.
            </p>

            <h3>Post-Whitening Care</h3>
            <p>
              After the procedure, avoid foods and drinks that stain teeth (like
              coffee, wine, and dark sauces). Regular touch-ups and good oral
              hygiene will help maintain your new bright smile.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles["service-page__why-choose-us"]}>
          <h2 className={styles["service-page__subheader"]}>Why Choose Us?</h2>
          <p className={styles["service-page__text"]}>
            At Bana Dental Design, we provide professional, safe, and
            long-lasting teeth whitening treatments. With years of experience
            and state-of-the-art technology, we ensure each patient achieves the
            bright smile they deserve.
          </p>
          <ul className={styles["service-page__why-list"]}>
            <li>Highly trained cosmetic dental team</li>
            <li>Custom treatment plans for optimal results</li>
            <li>Latest technology for safe and effective whitening</li>
          </ul>
        </section>

        {/* Contact Form Banner */}
        <section
          className={styles["service-page__contact-banner"]}
          id="contact"
        >
          <h3>Ready to Brighten Your Smile?</h3>
          <p>
            Book your consultation today and discover how professional teeth
            whitening can transform your smile.
          </p>
          <Link href="/contact-us" passHref>
            <button className={styles["service-page__contact-button"]}>
              Contact Us
            </button>
          </Link>
        </section>

        <ConsultationBanner />
      </main>
    </>
  );
};

export default TeethWhitening;
