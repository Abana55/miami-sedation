"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ScrollFadeIn from "@/app/components/ScrollFadeIn/ScrollFadeIn";
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";
import styles from "../../DentalServices.module.scss";

const Bridges = () => {
  const images = [
    "/images/bridge1.jpg",
    "/images/bridge2.jpg",
    "/images/bridge3.jpg",
  ];

  const beforeAfterImages = [
    {
      before: "/images/bridge-before1.jpg",
      after: "/images/bridge-after1.jpg",
    },
    {
      before: "/images/bridge-before2.jpg",
      after: "/images/bridge-after2.jpg",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <>
      <Head>
        <title>Dental Bridges in [Your City] | Bana Dental Design</title>
        <meta
          name="description"
          content="Restore your smile with dental bridges at Bana Dental Design in [Your City]. Learn about the different types of dental bridges and how they can replace missing teeth."
        />
        <meta
          name="keywords"
          content="dental bridges, tooth replacement, dental care, oral health, Bana Dental Design, missing teeth, restorative dentistry, [Your City]"
        />
        <meta
          property="og:title"
          content="Dental Bridges in [Your City] | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Learn how dental bridges at Bana Dental Design can replace missing teeth and restore your smile. Contact us today for a consultation."
        />
        <meta property="og:image" content="/images/bridge1.jpg" />
        <meta
          property="og:url"
          content="https://banadentaldesign.com/services/bridges"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://banadentaldesign.com/services/bridges"
        />
      </Head>
      <main className={styles.bridgesPage}>
        {/* Header Section */}
        <header className={styles.bridgesPage__header}>
          <ScrollFadeIn>
            <h1 className={styles.bridgesPage__title}>Dental Bridges</h1>
            <p className={styles.bridgesPage__intro}>
              At Bana Dental Design, we specialize in providing high-quality
              dental bridges to help you restore your smile and confidence. Our
              experienced team uses the latest techniques to replace missing
              teeth and improve your oral health.
            </p>
          </ScrollFadeIn>
        </header>

        {/* Article Section */}
        <section className={styles.bridgesPage__content}>
          <article className={styles.bridgesPage__article}>
            <ScrollFadeIn>
              <h2 className={styles.bridgesPage__subheader}>
                What Are Dental Bridges?
              </h2>
              <p className={styles.bridgesPage__text}>
                Dental bridges are custom-made restorations that fill the gap
                left by one or more missing teeth. A bridge consists of
                artificial teeth anchored to adjacent natural teeth or implants,
                effectively restoring your smile and functionality.
              </p>

              {/* Image Slider */}
              <div className={styles.bridgesPage__imageSlider}>
                <div className={styles.slider__mainImage}>
                  <img
                    src={images[currentImage]}
                    alt={`Dental Bridge ${currentImage + 1}`}
                  />
                </div>
                <div className={styles.slider__thumbnails}>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`${styles.slider__thumbnail} ${
                        currentImage === index ? styles.active : ""
                      }`}
                      onClick={() => setCurrentImage(index)}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button
                  className={styles.slider__nextButton}
                  onClick={handleNextImage}
                >
                  Next
                </button>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <h2 className={styles.bridgesPage__subheader}>
                Types of Dental Bridges
              </h2>
              <section className={styles.bridgesPage__text}>
                <h3>Traditional Dental Bridges</h3>
                <p>
                  The most common type, traditional bridges, involve creating a
                  crown for the tooth or implant on either side of the missing
                  tooth, with a pontic (false tooth) in between. They are made
                  from porcelain fused to metal or ceramics.
                </p>

                <h3>Maryland Bonded Bridges</h3>
                <p>
                  Also known as resin-bonded bridges, these use a metal or
                  porcelain framework bonded to the backs of adjacent teeth.
                  Maryland bridges are typically used for front teeth.
                </p>

                <h3>Cantilever Bridges</h3>
                <p>
                  Cantilever bridges are used when there are adjacent teeth on
                  only one side of the missing tooth or teeth. They are less
                  common and generally not recommended in areas of the mouth
                  that receive a lot of stress.
                </p>

                <h3>Implant-Supported Bridges</h3>
                <p>
                  These bridges are supported by dental implants rather than
                  crowns or frameworks. They are ideal when multiple teeth are
                  missing and provide a secure and long-lasting solution.
                </p>
              </section>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <h2 className={styles.bridgesPage__subheader}>
                Benefits of Dental Bridges
              </h2>
              <p className={styles.bridgesPage__text}>
                Choosing a dental bridge to replace missing teeth offers several
                advantages:
              </p>
              <ul className={styles.bridgesPage__list}>
                <li className={styles.bridgesPage__listItem}>
                  Restore your smile and confidence.
                </li>
                <li className={styles.bridgesPage__listItem}>
                  Improve chewing and speaking abilities.
                </li>
                <li className={styles.bridgesPage__listItem}>
                  Maintain facial shape and prevent sagging.
                </li>
                <li className={styles.bridgesPage__listItem}>
                  Prevent remaining teeth from shifting out of position.
                </li>
                <li className={styles.bridgesPage__listItem}>
                  Distribute bite forces properly by replacing missing teeth.
                </li>
              </ul>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <h2 className={styles.bridgesPage__subheader}>The Procedure</h2>
              <section className={styles.bridgesPage__text}>
                <h3>Initial Consultation</h3>
                <p>
                  During your initial visit, we'll perform a comprehensive
                  examination, including X-rays, to determine the best type of
                  bridge for your situation. We'll discuss your options and
                  develop a personalized treatment plan.
                </p>

                <h3>Tooth Preparation</h3>
                <p>
                  For traditional bridges, the adjacent teeth (abutments) are
                  prepared by removing a small amount of enamel to accommodate
                  the crowns. For implant-supported bridges, implants are
                  surgically placed into the jawbone.
                </p>

                <h3>Impressions and Temporary Bridge</h3>
                <p>
                  We take impressions of your teeth to create a custom bridge
                  that fits perfectly. A temporary bridge may be placed to
                  protect your teeth and gums while the permanent bridge is
                  being fabricated.
                </p>

                <h3>Permanent Bridge Placement</h3>
                <p>
                  Once your custom bridge is ready, we'll fit and adjust it to
                  ensure comfort and proper bite alignment. The bridge is then
                  permanently cemented or attached to the implants.
                </p>

                <h3>Post-Procedure Care</h3>
                <p>
                  We'll provide detailed instructions on how to care for your
                  new bridge. Good oral hygiene and regular dental check-ups are
                  essential to maintain the longevity of your bridge.
                </p>
              </section>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <h2 className={styles.bridgesPage__subheader}>Before & After</h2>
              <div className={styles.beforeAfterGrid}>
                {beforeAfterImages.map((image, index) => (
                  <div key={index} className={styles.beforeAfterItem}>
                    <div className={styles.beforeAfter__imageContainer}>
                      <img
                        src={image.before}
                        alt={`Before Dental Bridge ${index + 1}`}
                        className={styles.beforeAfter__image}
                      />
                      <span className={styles.beforeAfter__label}>Before</span>
                    </div>
                    <div className={styles.beforeAfter__imageContainer}>
                      <img
                        src={image.after}
                        alt={`After Dental Bridge ${index + 1}`}
                        className={styles.beforeAfter__image}
                      />
                      <span className={styles.beforeAfter__label}>After</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <h2 className={styles.bridgesPage__subheader}>
                Why Choose Bana Dental Design?
              </h2>
              <p className={styles.bridgesPage__text}>
                At Bana Dental Design, our skilled team is committed to
                providing personalized care and high-quality dental bridges
                tailored to your needs. We use state-of-the-art technology to
                ensure optimal results and patient satisfaction.
              </p>
              <Link
                href="/contact-us"
                className={styles.bridgesPage__contactButton}
              >
                Schedule a Consultation
              </Link>
            </ScrollFadeIn>
          </article>
        </section>

        {/* Consultation Banner */}
        <ConsultationBanner />
      </main>
    </>
  );
};

export default Bridges;
