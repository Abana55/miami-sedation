import React from "react";
import styles from "../../DentalServices.module.scss";
import Head from "next/head";
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn"; 

const Xrays: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dental X-rays | Your Dental Office</title>
        <meta
          name="description"
          content="Dental X-rays are essential for diagnosing and treating dental issues. Learn about the importance of X-rays and what to expect during your visit."
        />
        <meta
          name="keywords"
          content="Dental X-rays, Diagnostic Dentistry, Oral Health, Preventive Dentistry"
        />
        <meta name="author" content="Your Dental Office" />
        <meta
          property="og:title"
          content="Dental X-rays | Your Dental Office"
        />
        <meta
          property="og:description"
          content="Dental X-rays are essential for diagnosing and treating dental issues. Learn about the importance of X-rays and what to expect during your visit."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/services/x-rays"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/xrays-1.jpg"
        />
        <link rel="canonical" href="https://yourdomain.com/services/x-rays" />
      </Head>

      <div className={styles.xraysPage}>
        {/* Header Section */}
        <section className={styles.xraysPage__header}>
          <h1 className={styles.xraysPage__title}>
            The Role of X-rays in Dental Care
          </h1>
          <p className={styles.xraysPage__intro}>
            Dental X-rays are a critical tool in diagnosing and treating dental
            issues. They provide a clear picture of your teeth and gums,
            allowing us to detect problems that aren't visible during a regular
            exam.
          </p>
        </section>

        {/* Main Content */}
        <section className={styles.xraysPage__content}>
          {/* Importance of X-rays */}
          <ScrollFadeIn>
            <article className={styles.xraysPage__article}>
              <h2 className={styles.xraysPage__subheader}>
                Why Are X-rays Important?
              </h2>
              <div className={styles.xraysPage__imageContainer}>
                <img
                  src="/images/xrays-1.jpg"
                  alt="Dental X-rays"
                  className={styles.xraysPage__image}
                />
              </div>
              <p className={styles.xraysPage__text}>
                X-rays help us see beyond the surface of your teeth and gums.
                They allow us to detect cavities between teeth, monitor tooth
                root health, and assess the condition of your jawbone. Detecting
                issues early helps prevent more serious problems later on.
              </p>
            </article>
          </ScrollFadeIn>

          {/* What to Expect */}
          <ScrollFadeIn>
            <article className={styles.xraysPage__article}>
              <h2 className={styles.xraysPage__subheader}>
                What to Expect During an X-ray
              </h2>
              <p className={styles.xraysPage__text}>
                The process is quick and painless. Our team will position a
                small sensor in your mouth, and within seconds, we’ll have
                detailed images of your teeth and jaws. These images help us
                provide you with the most accurate diagnosis and treatment plan.
              </p>
              <div className={styles.xraysPage__imageContainer}>
                <img
                  src="/images/xrays-2.jpg"
                  alt="Patient Receiving X-ray"
                  className={styles.xraysPage__image}
                />
              </div>
            </article>
          </ScrollFadeIn>

          {/* Safety of X-rays */}
          <ScrollFadeIn>
            <article className={styles.xraysPage__article}>
              <h2 className={styles.xraysPage__subheader}>
                Are Dental X-rays Safe?
              </h2>
              <p className={styles.xraysPage__text}>
                Yes, dental X-rays are safe. We use modern digital X-ray
                technology, which minimizes your exposure to radiation. Our
                equipment is regularly inspected and maintained to ensure the
                highest standards of safety.
              </p>
            </article>
          </ScrollFadeIn>
        </section>

        {/* Conclusion Section */}
        <section className={styles.xraysPage__conclusion}>
          <p className={styles.xraysPage__text}>
            Dental X-rays are invaluable for your dental care. They allow us to
            assess the full picture of your oral health, ensuring the best
            possible care. Contact us today to schedule your appointment and
            take the next step in maintaining your smile.
          </p>
        </section>

        {/* Consultation Banner */}
        <ConsultationBanner />
      </div>
    </>
  );
};

export default Xrays;
