import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../DentalServices.module.scss';

const PreventiveCarePage = () => {
  return (
    <>
      <Head>
        <title>Preventive Care | Protect Your Oral Health | Bana Dental Design</title>
        <meta
          name="description"
          content="Maintain optimal oral health with Preventive Care services at Bana Dental Design. Learn about our oral exams, X-rays, and teeth cleaning options."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourwebsite.com/dental-services/preventive-care" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Preventive Care | Protect Your Oral Health | Bana Dental Design" />
        <meta
          property="og:description"
          content="Maintain optimal oral health with Preventive Care services at Bana Dental Design. Book your appointment today!"
        />
        <meta property="og:image" content="https://yourwebsite.com/images/preventive-care.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/dental-services/preventive-care" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Preventive Care | Protect Your Oral Health | Bana Dental Design" />
        <meta
          name="twitter:description"
          content="Ensure a healthy smile with our comprehensive preventive care services. Contact Bana Dental Design today!"
        />
        <meta name="twitter:image" content="https://yourwebsite.com/images/preventive-care.jpg" />

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is preventive dental care?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Preventive dental care involves regular dental check-ups, cleanings, and other measures to prevent oral health issues.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How often should I have a dental exam and cleaning?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'It is recommended to have a dental exam and cleaning every six months to maintain optimal oral health.',
                  },
                },
                // Add more FAQs as needed
              ],
            }),
          }}
        />
      </Head>
      <div className={`${styles['service-page']} ${styles['preventiveCarePage']}`}>
        {/* Header Section */}
        <section className={styles.headerSection}>
          <h1 className={styles.servicePageHeaderTitle}>Preventive Care</h1>
          <p className={styles.servicePageIntro}>
            Protect Your Oral Health with Comprehensive Preventive Services
          </p>
        </section>

        {/* Hero Image */}
        <section className={styles.servicePageHero}>
          <Image
            src="/images/preventive-care.jpg"
            alt="Patient receiving preventive dental care at Bana Dental Design"
            width={800}
            height={500}
            className={styles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section className={`${styles.servicePageDetails} ${styles.servicePageSection}`}>
          <h2 className={styles.servicePageSubheader}>What is Preventive Care?</h2>
          <p className={styles.servicePageText}>
            Preventive care focuses on maintaining optimal oral health through regular check-ups, cleanings, and early detection of potential issues. By proactively caring for your teeth and gums, we help you avoid more serious dental problems down the line.
          </p>
        </section>

        {/* Benefits Section */}
        <section className={`${styles.benefitsSection} ${styles.servicePageSection}`}>
          <h2 className={styles.servicePageSubheader}>Benefits of Preventive Care</h2>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitCard}>
              <h3>Early Detection</h3>
              <p>Identify dental issues before they become serious problems.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Cost Savings</h3>
              <p>Preventive care can save you money by avoiding costly treatments.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Better Overall Health</h3>
              <p>Maintain good oral hygiene to support your overall well-being.</p>
            </div>
          </div>
        </section>

        {/* Preventive Services Banner */}
        <section className={styles.preventiveServicesBanner}>
          <h2 className={styles.preventiveServicesTitle}>Our Preventive Services</h2>
          <div className={styles.preventiveServicesButtons}>
            <Link href="/dental-services/oral-exams">
              <button className={styles.serviceButton}>Oral Exams</button>
            </Link>
            <Link href="/dental-services/dental-x-rays">
              <button className={styles.serviceButton}>Dental X-Rays</button>
            </Link>
            <Link href="/dental-services/teeth-cleaning">
              <button className={styles.serviceButton}>Teeth Cleaning</button>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className={`${styles.faqSection} ${styles.servicePageSection}`}>
          <h2 className={styles.servicePageSubheader}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <h3>What is preventive dental care?</h3>
              <p>
                Preventive dental care involves regular dental check-ups, cleanings, and other measures to prevent oral health issues.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How often should I have a dental exam and cleaning?</h3>
              <p>
                It is recommended to have a dental exam and cleaning every six months to maintain optimal oral health.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Are dental X-rays safe?</h3>
              <p>
                Yes, dental X-rays are safe. We use modern digital X-rays that emit very low levels of radiation and take necessary precautions to protect you.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Does insurance cover preventive dental care?</h3>
              <p>
                Most dental insurance plans cover preventive services like exams and cleanings. We can help you understand your coverage.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How can I maintain good oral hygiene at home?</h3>
              <p>
                Brush your teeth twice a day with fluoride toothpaste, floss daily, and maintain a balanced diet to support your oral health.
              </p>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </section>

        {/* Contact Banner */}
        <section className={styles.servicePageContactBanner}>
          <p className={styles.servicePageContactText}>
            Ready to schedule your preventive care appointment?
          </p>
          <Link href="/contact" className={styles.servicePageContactButton}>
            Book Your Appointment Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default PreventiveCarePage;
