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
          content="Discover professional teeth whitening services at Bana Dental Design. Achieve a radiant smile with our customized whitening treatments."
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
          content="Learn about professional teeth whitening services at Bana Dental Design. Brighten your smile with our expert care."
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
              Brighten your smile with our safe, professional, and effective
              teeth whitening services. Transform your smile and boost your
              confidence with the brilliance it deserves.
            </p>
            <Link href="#contact" passHref>
              <button className={styles["service-page__cta-button"]}>
                Schedule a Consultation
              </button>
            </Link>
          </div>
          <img
            src="/images/OFFICCE/dentist-doctor-teeth-health-care-specialist-explai-2023-11-27-05-10-10-utc.JPG"
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
              src="/images/CONNECT/1.png"
              alt="Teeth Whitening Process"
              className={styles["service-page__image"]}
            />
            <p className={styles["service-page__text"]}>
              Teeth whitening is a non-invasive cosmetic dental procedure
              designed to lighten the color of teeth by removing stains and
              discoloration caused by coffee, tea, smoking, and aging. At Bana
              Dental Design, we offer state-of-the-art whitening options to help
              you achieve a radiant smile.
            </p>
          </div>
        </section>

        {/* Types of Teeth Whitening */}
        <section className={styles["service-page__types"]}>
          <h2 className={styles["service-page__subheader"]}>
            Our Teeth Whitening Services
          </h2>
          <div className={styles["service-page__types-grid"]}>
            <div className={styles["service-page__type-card"]}>
              <h3>In-Office Whitening</h3>
              <p>
                Our in-office whitening treatments provide fast and dramatic
                results, lightening your teeth by several shades in just one
                visit. Using cutting-edge technology, this treatment guarantees
                a safe, effective transformation.
              </p>
              <img
                src="/images/in-office-whitening.jpg"
                alt="In-Office Whitening"
                className={styles["service-page__image"]}
              />
            </div>

            <div className={styles["service-page__type-card"]}>
              <h3>Take-Home Whitening Kits</h3>
              <p>
                Customized take-home whitening kits allow you to whiten your
                teeth at your convenience. These kits include custom-fitted
                trays and a professional-grade whitening gel for long-lasting
                results.
              </p>
              <img
                src="/images/take-home-kit.jpg"
                alt="Take-Home Whitening Kit"
                className={styles["service-page__image"]}
              />
            </div>

            <div className={styles["service-page__type-card"]}>
              <h3>Over-the-Counter Products</h3>
              <p>
                While less effective than professional treatments, we also
                provide guidance on over-the-counter products for maintaining
                your results and extending the longevity of your brighter smile.
              </p>
              <img
                src="/images/otc-whitening-products.jpg"
                alt="Over-the-Counter Whitening"
                className={styles["service-page__image"]}
              />
            </div>
          </div>
        </section>

        {/* Benefits of Teeth Whitening */}
        <section className={styles["service-page__benefits"]}>
          <h2 className={styles["service-page__subheader"]}>
            The Benefits of Teeth Whitening
          </h2>
          <ul className={styles["service-page__list"]}>
            <li>Whiter, more radiant smile in just one treatment.</li>
            <li>Boosts self-esteem and confidence.</li>
            <li>Removes deep stains that regular cleaning can’t remove.</li>
            <li>Non-invasive, pain-free procedure.</li>
          </ul>
          <img
            src="/images/TeethWhiteningResults.jpg"
            alt="Teeth Whitening Results"
            className={styles["service-page__image--center"]}
          />
        </section>

        {/* Who is a Candidate */}
        <section className={styles["service-page__candidates"]}>
          <h2 className={styles["service-page__subheader"]}>
            Who is a Good Candidate for Teeth Whitening?
          </h2>
          <p className={styles["service-page__text"]}>
            Teeth whitening is ideal for individuals looking to enhance their
            smile and remove surface stains caused by daily habits or age. It’s
            important to have good oral health before whitening, as untreated
            cavities or gum disease can affect the outcome. We recommend
            scheduling a consultation to determine the best whitening solution
            for your needs.
          </p>
        </section>

        {/* Procedure Overview */}
        <section className={styles["service-page__procedure"]}>
          <h2 className={styles["service-page__subheader"]}>
            The Whitening Procedure
          </h2>
          <div className={styles["service-page__procedure-steps"]}>
            <h3>Step 1: Consultation</h3>
            <p>
              Your journey begins with a personalized consultation to discuss
              your whitening goals. We will assess your oral health and
              determine the most suitable treatment.
            </p>

            <h3>Step 2: The Whitening Process</h3>
            <p>
              During the procedure, we apply a protective barrier to your gums,
              followed by the application of a whitening gel activated by a
              special light. This process is repeated until the desired result
              is achieved.
            </p>

            <h3>Step 3: Post-Care Instructions</h3>
            <p>
              After whitening, we will provide post-care instructions to help
              you maintain your results. Avoid staining foods and drinks for a
              few days and use a whitening toothpaste to extend your bright
              smile.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles["service-page__why-choose-us"]}>
          <h2 className={styles["service-page__subheader"]}>
            Why Choose Bana Dental Design?
          </h2>
          <p className={styles["service-page__text"]}>
            At Bana Dental Design, we use the latest technology and
            evidence-based techniques to ensure you get the best whitening
            results. Our professional team is committed to making your
            experience comfortable and ensuring that you walk out with a smile
            you’ll love.
          </p>
          <ul className={styles["service-page__why-list"]}>
            <li>Highly experienced cosmetic dental team.</li>
            <li>Customizable treatment plans for each patient.</li>
            <li>State-of-the-art technology and techniques.</li>
          </ul>
        </section>

        {/* Call to Action Banner */}
        <section
          id="contact"
          className={styles["service-page__contact-banner"]}
        >
          <h2>Ready for a Whiter Smile?</h2>
          <Link href="/contact-us" passHref>
            <button className={styles["service-page__contact-button"]}>
              Contact Us Today
            </button>
          </Link>
        </section>

        {/* Consultation Banner */}
        <ConsultationBanner />
      </main>
    </>
  );
};

export default TeethWhitening;
