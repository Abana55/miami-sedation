import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../DentalServices.module.scss";

const DentalImplants = () => {
  return (
    <>
      <Head>
        <title>Dental Implants | Your Dental Practice</title>
        <meta
          name="description"
          content="Discover the benefits of dental implants at Your Dental Practice. Dental implants are a permanent solution for missing teeth, designed to enhance your smile and improve oral health."
        />
        <meta
          name="keywords"
          content="dental implants, tooth replacement, missing teeth, dental practice, dental implant benefits"
        />
        <link
          rel="canonical"
          href="https://www.yourdomain.com/dental-implants"
        />
      </Head>

      <main className={styles["service-page"]}>
        {/* Hero Section with Image and Overlay */}
        <section className={styles["service-page__hero"]}>
          <div className={styles["service-page__hero-overlay"]}>
            <h1 className={styles["service-page__header"]}>Dental Implants</h1>
            <p className={styles["service-page__intro-text"]}>
              A permanent solution for missing teeth, dental implants restore
              your smile, functionality, and confidence.
            </p>
            <Link href="#contact" passHref>
              <button className={styles["service-page__cta-button"]}>
                Book a Consultation
              </button>
            </Link>
          </div>
          <Image
            src="/images/dental-implants-hero.jpg"
            alt="Dental Implants"
            layout="fill"
            objectFit="cover"
            className={styles["service-page__hero-image"]}
            priority
          />
        </section>

        {/* What Are Dental Implants? */}
        <section className={styles["service-page__details"]}>
          <h2 className={styles["service-page__subheader"]}>
            What Are Dental Implants?
          </h2>
          <div className={styles["service-page__two-column"]}>
            <Image
              src="/images/implants-diagram.jpg"
              alt="Dental Implants Diagram"
              width={500}
              height={300}
              className={styles["service-page__image"]}
            />
            <p className={styles["service-page__text"]}>
              Dental implants are titanium posts surgically placed into the
              jawbone, mimicking natural tooth roots. Implants provide a secure
              base for artificial teeth, such as crowns or bridges. With a
              natural appearance and exceptional durability, implants are the
              gold standard for tooth replacement.
            </p>
          </div>
        </section>

        {/* Purpose and Key Facts Section */}
        <section className={styles["service-page__purpose-facts"]}>
          <div className={styles["service-page__highlight"]}>
            <h2 className={styles["service-page__subheader"]}>
              Purpose of Dental Implants
            </h2>
            <p className={styles["service-page__text"]}>
              Dental implants are designed to replace missing teeth, restoring
              the functionality and appearance of your smile. They help prevent
              bone loss, improve oral health, and give you the confidence to
              smile freely.
            </p>
          </div>

          <div className={styles["service-page__facts"]}>
            <h3>Key Facts About Dental Implants</h3>
            <ul className={styles["service-page__list"]}>
              <li>
                <strong>Durability:</strong> Implants can last a lifetime with
                proper care.
              </li>
              <li>
                <strong>98% Success Rate:</strong> One of the most reliable
                procedures in modern dentistry.
              </li>
              <li>
                <strong>Bone Preservation:</strong> Helps prevent bone loss by
                stimulating the jawbone.
              </li>
            </ul>
          </div>
        </section>

        {/* Benefits of Dental Implants */}
        <section className={styles["service-page__benefits"]}>
          <h2 className={styles["service-page__subheader"]}>
            Benefits of Dental Implants
          </h2>
          <div className={styles["service-page__benefits-grid"]}>
            <div className={styles["service-page__benefit-card"]}>
              <Image
                src="/images/implants-benefit1.jpg"
                alt="Improved Appearance"
                width={300}
                height={200}
                className={styles["service-page__benefit-image"]}
              />
              <h3>Improved Appearance</h3>
              <p>
                Dental implants look and feel like your natural teeth, enhancing
                your smile.
              </p>
            </div>
            <div className={styles["service-page__benefit-card"]}>
              <Image
                src="/images/implants-benefit2.jpg"
                alt="Improved Functionality"
                width={300}
                height={200}
                className={styles["service-page__benefit-image"]}
              />
              <h3>Enhanced Functionality</h3>
              <p>
                Restore your ability to eat, speak, and chew comfortably with
                implants.
              </p>
            </div>
            <div className={styles["service-page__benefit-card"]}>
              <Image
                src="/images/implants-benefit3.jpg"
                alt="Long-Term Oral Health"
                width={300}
                height={200}
                className={styles["service-page__benefit-image"]}
              />
              <h3>Long-Term Oral Health</h3>
              <p>
                Implants help maintain bone structure and prevent further tooth
                loss.
              </p>
            </div>
          </div>
        </section>

        {/* Before and After Section */}
        <section className={styles["service-page__before-after"]}>
          <h2 className={styles["service-page__subheader"]}>
            Before and After
          </h2>
          <p className={styles["service-page__text"]}>
            See the remarkable transformations of our patients. Our implants
            have helped many regain their smiles and confidence.
          </p>
          <div className={styles["service-page__before-after-images"]}>
            <Image
              src="/images/before.jpg"
              alt="Before Dental Implants"
              width={300}
              height={200}
              className={styles["service-page__before-image"]}
            />
            <Image
              src="/images/after.jpg"
              alt="After Dental Implants"
              width={300}
              height={200}
              className={styles["service-page__after-image"]}
            />
          </div>
        </section>

        {/* Why Choose Us? */}
        <section className={styles["service-page__why-choose-us"]}>
          <h2 className={styles["service-page__subheader"]}>Why Choose Us?</h2>
          <p className={styles["service-page__text"]}>
            Our dental team combines advanced technology with years of expertise
            to provide personalized dental implant treatments. From consultation
            to final restoration, we ensure that every step of your implant
            journey is smooth, comfortable, and successful.
          </p>
          <ul className={styles["service-page__why-list"]}>
            <li>Highly experienced implant specialists</li>
            <li>State-of-the-art technology</li>
            <li>Comfort-focused care in a relaxing environment</li>
          </ul>
        </section>

        {/* Contact Form Banner */}
        <section
          className={styles["service-page__contact-banner"]}
          id="contact"
        >
          <div className={styles["service-page__contact-content"]}>
            <h3>Ready to Transform Your Smile?</h3>
            <p>
              Schedule a consultation today and take the first step toward a
              brighter, healthier smile.
            </p>
            <Link href="/contact-us" passHref>
              <button className={styles["service-page__contact-button"]}>
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default DentalImplants;
