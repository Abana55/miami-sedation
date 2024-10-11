import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../DentalServices.module.scss';


const InlaysOnlaysPage = () => {
  return (
    <>
      <Head>
        <title>Inlays and Onlays | Bana Dental Design</title>
        <meta
          name="description"
          content="Restore damaged teeth with precision-crafted inlays and onlays at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Inlays, Onlays, Dental Restoration, Bana Dental Design, Tooth Repair, Dental Services"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What is the difference between an inlay and an onlay?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'An inlay fits within the grooves of a tooth, while an onlay covers one or more cusps of the tooth.',
                  },
                },
                // add other faq's to this section 
              ],
            }),
          }}
        />
      </Head>
      <div
        className={`${styles["service-page"]} ${styles["inlaysOnlaysPage"]}`}
      >
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
        <section
          className={`${styles.servicePageDetails} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            What are Inlays and Onlays?
          </h2>
          <p className={styles.servicePageText}>
            Inlays and onlays are custom-made dental restorations used to repair
            damaged or decayed teeth. They are an excellent alternative to
            traditional fillings and crowns, especially when the damage is too
            extensive for a filling but not severe enough to require a crown.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${styles.benefitsSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Benefits of Inlays and Onlays
          </h2>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitCard}>
              <h3>Durability</h3>
              <p>
                Inlays and onlays are made from strong materials that last
                longer than traditional fillings.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Aesthetics</h3>
              <p>
                They blend seamlessly with your natural teeth for a beautiful
                smile.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Conservative Treatment</h3>
              <p>
                They preserve more of your natural tooth structure compared to
                crowns.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${styles.processSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>Our Process</h2>
          <p className={styles.servicePageText}>
            The treatment typically requires two visits. During the first visit,
            we prepare the tooth and take impressions to create a custom inlay
            or onlay. A temporary restoration is placed until your next
            appointment. In the second visit, the inlay or onlay is bonded to
            your tooth, restoring its function and appearance.
          </p>
        </section>

        {/* Risks Section */}
        <section
          className={`${styles.risksSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>Possible Risks</h2>
          <p className={styles.servicePageText}>
            While inlays and onlays are generally safe, some patients may
            experience sensitivity or discomfort, which usually subsides shortly
            after the procedure. Our team ensures you are comfortable throughout
            the treatment.
          </p>
        </section>

        <section
          className={`${styles.faqSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <h3>What is the difference between an inlay and an onlay?</h3>
              <p>
                An inlay fits within the grooves of a tooth, while an onlay
                covers one or more cusps of the tooth.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long do inlays and onlays last?</h3>
              <p>With proper care, they can last up to 10-15 years or more.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Are they noticeable?</h3>
              <p>
                No, they are crafted to match the color of your natural teeth.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is the procedure painful?</h3>
              <p>
                The procedure is typically performed under local anesthesia, so
                you should not feel pain during the treatment.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How do I care for them?</h3>
              <p>Maintain good oral hygiene and regular dental check-ups.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I eat normally after getting an inlay or onlay?</h3>
              <p>
                Yes, once the inlay or onlay is bonded, you can resume normal
                eating habits. It restores the strength and function of your
                tooth.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How much do inlays and onlays cost?</h3>
              <p>
                The cost varies depending on the material used and the
                complexity of the case. We provide a detailed estimate after
                your consultation.
              </p>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </section>

        {/* Contact Banner */}
        <section className={styles.servicePageContactBanner}>
          <p className={styles.servicePageContactText}>
            Ready to restore your smile with inlays and onlays?
          </p>
          <Link href="/contact" className={styles.servicePageContactButton}>
            Contact Us Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default InlaysOnlaysPage;
