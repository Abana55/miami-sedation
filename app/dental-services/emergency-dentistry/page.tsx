import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../../DentalServices.module.scss";

const EmergencyDentistryPage = () => {
  return (
    <>
      <Head>
        <title>Emergency Dentistry | Immediate Care | Bana Dental Design</title>
        <meta
          name="description"
          content="Get immediate dental care with Emergency Dentistry services at Bana Dental Design. Learn about our urgent care solutions and how we can help you."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/emergency-dentistry"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Emergency Dentistry | Immediate Care | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Get immediate dental care with Emergency Dentistry services at Bana Dental Design. Contact us now!"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/emergency-dentistry.jpg"
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/emergency-dentistry"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Emergency Dentistry | Immediate Care | Bana Dental Design"
        />
        <meta
          name="twitter:description"
          content="Urgent dental care when you need it most. Contact Bana Dental Design for emergency dentistry services."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/emergency-dentistry.jpg"
        />

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is considered a dental emergency?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Severe toothaches, knocked-out teeth, broken teeth, and severe oral infections are considered dental emergencies.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you accept walk-in emergency patients?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we strive to accommodate emergency patients as quickly as possible. Please call us immediately for assistance.",
                  },
                },
                // Add more FAQs as needed
              ],
            }),
          }}
        />
      </Head>
      <div
        className={`${styles["service-page"]} ${styles["emergencyDentistryPage"]}`}
      >
        {/* Header Section */}
        <section className={styles.headerSection}>
          <h1 className={styles.servicePageHeaderTitle}>Emergency Dentistry</h1>
          <p className={styles.servicePageIntro}>
            Immediate Dental Care When You Need It Most
          </p>
        </section>

        {/* Hero Image */}
        <section className={styles.servicePageHero}>
          <Image
            src="/images/emergency-dentistry.jpg"
            alt="Patient receiving emergency dental care at Bana Dental Design"
            width={800}
            height={500}
            className={styles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section
          className={`${styles.servicePageDetails} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            What is Emergency Dentistry?
          </h2>
          <p className={styles.servicePageText}>
            Emergency Dentistry provides urgent dental care for unexpected
            issues that require immediate attention. Whether you're experiencing
            severe pain, a knocked-out tooth, or a sudden dental injury, our
            team is here to help you promptly and effectively.
          </p>
        </section>

        {/* Common Emergencies Section */}
        <section
          className={`${styles.commonEmergenciesSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Common Dental Emergencies
          </h2>
          <ul className={styles.emergencyList}>
            <li>Severe toothache or oral pain</li>
            <li>Knocked-out tooth (avulsed tooth)</li>
            <li>Chipped or broken teeth</li>
            <li>Lost fillings or crowns</li>
            <li>Abscesses or severe infections</li>
            <li>Soft tissue injuries (cuts to the tongue, cheeks, or lips)</li>
            {/* Add more as needed */}
          </ul>
        </section>

        {/* What to Do Section */}
        <section
          className={`${styles.whatToDoSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            What to Do in a Dental Emergency
          </h2>
          <p className={styles.servicePageText}>
            If you're experiencing a dental emergency, contact us immediately at{" "}
            <a href="tel:your-phone-number" className={styles.phoneLink}>
              Your Phone Number
            </a>
            . Our team will provide guidance over the phone and arrange for you
            to be seen as soon as possible.
          </p>
        </section>

        {/* FAQs */}
        <section
          className={`${styles.faqSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <h3>What is considered a dental emergency?</h3>
              <p>
                Severe toothaches, knocked-out teeth, broken teeth, and severe
                oral infections are considered dental emergencies.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you accept walk-in emergency patients?</h3>
              <p>
                Yes, we strive to accommodate emergency patients as quickly as
                possible. Please call us immediately for assistance.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How can I manage pain until I see the dentist?</h3>
              <p>
                Over-the-counter pain relievers and cold compresses can help
                alleviate pain temporarily. Avoid placing aspirin directly on
                the gums.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is emergency dentistry covered by insurance?</h3>
              <p>
                Coverage varies by provider and plan. Our team can help you
                understand your benefits and explore financing options.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>What if I have a dental emergency after hours?</h3>
              <p>
                Call our office number for instructions. We have protocols in
                place to assist patients with after-hours emergencies.
              </p>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </section>

        {/* Contact Banner */}
        <section className={styles.servicePageContactBanner}>
          <p className={styles.servicePageContactText}>
            Experiencing a Dental Emergency?
          </p>
          <Link href="/contact" className={styles.servicePageContactButton}>
            Contact Us Immediately
          </Link>
        </section>
      </div>
    </>
  );
};

export default EmergencyDentistryPage;
