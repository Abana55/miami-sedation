// pages/dental-services/inlays-onlays/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../DentalServices.module.scss';

const InlaysOnlaysPage = () => {
  return (
    <div className={`${styles['service-page']} ${styles['inlaysOnlaysPage']}`}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1 className={styles.servicePageHeaderTitle}>Inlays and Onlays</h1>
        <p className={styles.servicePageIntro}>
          Precision restorations to preserve your natural smile.
        </p>
      </section>

      {/* Hero Image */}
      <section className={styles.servicePageHero}>
        <Image
          src="/images/inlays-onlays.jpg"
          alt="Inlays and Onlays"
          width={800}
          height={500}
          className={styles.servicePageHeroImage}
        />
      </section>

      {/* Details Section */}
      <section className={`${styles.servicePageDetails} ${styles.servicePageSection}`}>
        <h2 className={styles.servicePageSubheader}>What are Inlays and Onlays?</h2>
        <p className={styles.servicePageText}>
          Inlays and onlays are custom-made dental restorations used to repair
          damaged or decayed teeth. They are an excellent alternative to
          traditional fillings and crowns, especially when the damage is too
          extensive for a filling but not severe enough to require a crown.
        </p>
      </section>

      {/* Benefits Section */}
      <section className={`${styles.benefitsSection} ${styles.servicePageSection}`}>
        <h2 className={styles.servicePageSubheader}>Benefits of Inlays and Onlays</h2>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitCard}>
            <h3>Durability</h3>
            <p>Inlays and onlays are made from strong materials that last longer than traditional fillings.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Aesthetics</h3>
            <p>They blend seamlessly with your natural teeth for a beautiful smile.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Conservative Treatment</h3>
            <p>They preserve more of your natural tooth structure compared to crowns.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`${styles.processSection} ${styles.servicePageSection}`}>
        <h2 className={styles.servicePageSubheader}>Our Process</h2>
        <p className={styles.servicePageText}>
          The treatment typically requires two visits. During the first visit, we
          prepare the tooth and take impressions to create a custom inlay or onlay.
          A temporary restoration is placed until your next appointment. In the
          second visit, the inlay or onlay is bonded to your tooth, restoring its
          function and appearance.
        </p>
      </section>

      {/* Risks Section */}
      <section className={`${styles.risksSection} ${styles.servicePageSection}`}>
        <h2 className={styles.servicePageSubheader}>Possible Risks</h2>
        <p className={styles.servicePageText}>
          While inlays and onlays are generally safe, some patients may experience
          sensitivity or discomfort, which usually subsides shortly after the
          procedure. Our team ensures you are comfortable throughout the treatment.
        </p>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.faqSection} ${styles.servicePageSection}`}>
        <h2 className={styles.servicePageSubheader}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <h3>How long do inlays and onlays last?</h3>
            <p>With proper care, they can last up to 10-15 years or more.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Are they noticeable?</h3>
            <p>No, they are crafted to match the color of your natural teeth.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>How do I care for them?</h3>
            <p>Maintain good oral hygiene and regular dental check-ups.</p>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className={styles.servicePageContactBanner}>
        <p className={styles.servicePageContactText}>
          Ready to restore your smile with inlays and onlays?
        </p>
        <Link href="/contact">
          <a className={styles.servicePageContactButton}>Contact Us Today</a>
        </Link>
      </section>
    </div>
  );
};

export default InlaysOnlaysPage;
