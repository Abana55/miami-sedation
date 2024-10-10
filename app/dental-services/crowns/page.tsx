"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import ScrollFadeIn from "@/app/components/ScrollFadeIn/ScrollFadeIn";
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";
import styles from "../../DentalServices.module.scss";

const Crowns = () => {
  const beforeAfterImages = [
    { before: "/images/crown-before1.jpg", after: "/images/crown-after1.jpg" },
    { before: "/images/crown-before2.jpg", after: "/images/crown-after2.jpg" },
  ];

  return (
    <>
      <Head>
        <title>Dental Crowns | Miami Sedation Dentistry</title>
        <meta
          name="description"
          content="Discover how dental crowns at Miami Sedation Dentistry can restore the function, shape, and appearance of damaged teeth with advanced restorative techniques."
        />
        <meta
          name="keywords"
          content="dental crowns, tooth restoration, dental care, oral health, Miami Sedation Dentistry, crown placement, cosmetic dentistry"
        />
        <meta
          property="og:title"
          content="Dental Crowns | Miami Sedation Dentistry"
        />
        <meta
          property="og:description"
          content="Learn about our dental crowns service at Miami Sedation Dentistry. Dental crowns restore tooth function and aesthetics using the latest materials and technology."
        />
        <meta property="og:image" content="/images/crown1.jpg" />
        <meta
          property="og:url"
          content="https://miamisedationdentistry.com/services/crowns"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://miamisedationdentistry.com/services/crowns"
        />
      </Head>

      <main className={styles.crownsPage}>
        {/* Header Section */}
        <header className={styles.crownsPage__header}>
          <ScrollFadeIn>
            <h1 className={styles.crownsPage__title}>Dental Crowns</h1>
            <p className={styles.crownsPage__intro}>
              At Bana Dental Design, we offer high-quality dental crowns that
              restore both the function and aesthetics of your teeth. Our dental
              crowns are designed for longevity and aesthetics. Using the latest
              materials and techniques, we ensure your crown not only restores
              your tooth’s function but also blends naturally with your other
              teeth, offering a beautiful, long-lasting solution.
            </p>
          </ScrollFadeIn>
        </header>

        {/* Article Section */}
        <section className={styles.crownsPage__content}>
          <article className={styles.crownsPage__article}>
            <ScrollFadeIn>
              <h2 className={styles.crownsPage__subheader}>
                What Are Dental Crowns?
              </h2>
              <p className={styles.crownsPage__text}>
                Dental crowns are custom-made caps that cover and protect a
                damaged tooth. Crowns are typically used for teeth that have
                been weakened by decay, fractures, or extensive restorations. At
                our practice, we provide crowns made from high-quality materials
                such as porcelain and ceramic, which blend seamlessly with your
                natural teeth.
              </p>

              {/* Image Slider Section */}
              <div className={styles.crownsPage__imageSlider}>
                <div className={styles.slider__mainImage}>
                  <img src="/images/crown1.jpg" alt="Crown Procedure" />
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <h2 className={styles.crownsPage__subheader}>The Procedure</h2>
              <section className={styles.crownsPage__text}>
                <h3>Initial Consultation</h3>
                <p>
                  Your dentist will perform a thorough examination, including
                  X-rays, to assess the health of the tooth. We’ll discuss the
                  crown placement procedure and answer any questions you may
                  have.
                </p>

                <h3>Tooth Preparation</h3>
                <p>
                  The damaged tooth is reshaped to ensure a proper fit for the
                  crown. If the tooth is severely damaged, a core buildup may be
                  necessary before placement.
                </p>

                <h3>Impressions and Temporary Crown</h3>
                <p>
                  We take digital impressions to ensure the crown fits perfectly
                  with your bite. With our same-day crown technology, you can
                  typically leave with your new porcelain crown on the same day
                  that the tooth is prepared. If you prefer, a temporary crown
                  can be placed to protect the tooth while your permanent crown
                  is fabricated if you prefer to wait to have the permanent
                  crown delivered.
                </p>

                <h3>Permanent Crown Placement</h3>
                <p>
                  Once your permanent crown is ready, it is carefully placed and
                  adjusted for optimal comfort and bite alignment. The crown is
                  then bonded securely to the tooth.
                </p>

                <h3>Post-Procedure Care</h3>
                <p>
                  After the crown is placed, it’s important to maintain regular
                  dental hygiene, including brushing, flossing, and attending
                  check-ups to ensure the longevity of your crown.
                </p>
              </section>
            </ScrollFadeIn>

            <ScrollFadeIn>
              {/* <h2 className={styles.crownsPage__subheader}>
                Why Choose Our Dental Crowns?
              </h2>
              <p className={styles.crownsPage__text}>
                Our dental crowns are designed for longevity and aesthetics.
                Using the latest materials and techniques, we ensure your crown
                not only restores your tooth’s function but also blends
                naturally with your other teeth, offering a beautiful,
                long-lasting solution.
              </p> */}
              <Link
                href="/contact-us"
                className={styles.crownsPage__contactButton}
              >
                Schedule Your Appointment
              </Link>
            </ScrollFadeIn>
          </article>
        </section>

        {/* Before and After Section */}
        <section className={styles.crownsPage__beforeAfter}>
          <ScrollFadeIn>
            <h2 className={styles.crownsPage__subheader}>Before & After</h2>
            <div className={styles.beforeAfterGrid}>
              {beforeAfterImages.map((image, index) => (
                <div key={index} className={styles.beforeAfterItem}>
                  <div className={styles.beforeAfter__imageContainer}>
                    <img
                      src={image.before}
                      alt={`Before Crown ${index + 1}`}
                      className={styles.beforeAfter__image}
                    />
                    <span className={styles.beforeAfter__label}>Before</span>
                  </div>
                  <div className={styles.beforeAfter__imageContainer}>
                    <img
                      src={image.after}
                      alt={`After Crown ${index + 1}`}
                      className={styles.beforeAfter__image}
                    />
                    <span className={styles.beforeAfter__label}>After</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </section>

        {/* Consultation Banner */}
        <ConsultationBanner />
      </main>
    </>
  );
};

export default Crowns;
