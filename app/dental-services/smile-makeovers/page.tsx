import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../DentalServices.module.scss';

const SmileMakeoversPage = () => {
  return (
    <>
      <Head>
        <title>Smile Makeovers | Full Mouth Rehabilitation | Bana Dental Design</title>
        <meta
          name="description"
          content="Transform your smile with comprehensive Smile Makeovers at Bana Dental Design. Learn about our Full Mouth Rehabilitation services, benefits, and FAQs."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourwebsite.com/dental-services/smile-makeovers" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Smile Makeovers | Full Mouth Rehabilitation | Bana Dental Design" />
        <meta property="og:description" content="Transform your smile with comprehensive Smile Makeovers at Bana Dental Design. Book your consultation today!" />
        <meta property="og:image" content="https://yourwebsite.com/images/smile-makeovers.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/dental-services/smile-makeovers" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smile Makeovers | Full Mouth Rehabilitation | Bana Dental Design" />
        <meta name="twitter:description" content="Expert full mouth rehabilitation for a stunning smile transformation. Contact Bana Dental Design today!" />
        <meta name="twitter:image" content="https://yourwebsite.com/images/smile-makeovers.jpg" />

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What is a Smile Makeover?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'A Smile Makeover is a comprehensive treatment plan that combines multiple cosmetic and restorative dental procedures to improve the appearance and function of your smile.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'Who is a candidate for Full Mouth Rehabilitation?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Individuals with multiple dental issues such as missing teeth, severe decay, or bite problems are ideal candidates for Full Mouth Rehabilitation.',
                  },
                },
                // Add more FAQs as needed
              ],
            }),
          }}
        />
      </Head>
      <div className={`${styles['service-page']} ${styles['smileMakeoversPage']}`}>
        {/* Header Section */}
        <section className={styles.headerSection}>
          <h1 className={styles.servicePageHeaderTitle}>Smile Makeovers</h1>
          <p className={styles.servicePageIntro}>
            Transform Your Smile with Comprehensive Full Mouth Rehabilitation
          </p>
        </section>

        {/* Hero Image */}
        <section className={styles.servicePageHero}>
          <Image
            src="/images/smile-makeovers.jpg"
            alt="Patient with a transformed smile after full mouth rehabilitation"
            width={800}
            height={500}
            className={styles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section className={`${styles.servicePageDetails} ${styles.servicePageSection}`}>
          <h2 className={styles.servicePageSubheader}>What is a Smile Makeover?</h2>
          <p className={styles.servicePageText}>
            A Smile Makeover, or Full Mouth Rehabilitation, is a personalized treatment plan that combines cosmetic and restorative dental procedures to address multiple dental issues. It's designed to improve the appearance, function, and health of your teeth and gums, giving you a confident and beautiful smile.
          </p>
        </section>

        {/* Benefits Section */}
        <section className={`${styles.benefitsSection} ${styles.servicePageSection}`}>
          <h2 className={styles.servicePageSubheader}>Benefits of a Smile Makeover</h2>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitCard}>
              <h3>Improved Aesthetics</h3>
              <p>Achieve a harmonious and attractive smile by addressing cosmetic imperfections.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Enhanced Function</h3>
              <p>Restore proper biting and chewing function by correcting misalignments and damage.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Boosted Confidence</h3>
              <p>Feel more confident in social and professional settings with a revitalized smile.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`${styles.processSection} ${styles.servicePageSection}`}>
          <h2 className={styles.servicePageSubheader}>Our Process</h2>
          <p className={styles.servicePageText}>
            Our comprehensive process begins with a thorough consultation to understand your goals and assess your dental health. We then develop a customized treatment plan that may include procedures like dental implants, veneers, crowns, bridges, orthodontics, and teeth whitening. Throughout your Smile Makeover journey, our team ensures you are comfortable and informed at every step.
          </p>
        </section>

        {/* Risks Section */}
        <section className={`${styles.risksSection} ${styles.servicePageSection}`}>
          <h2 className={styles.servicePageSubheader}>Possible Risks</h2>
          <p className={styles.servicePageText}>
            As with any dental procedures, there are potential risks such as sensitivity, discomfort, or complications from surgeries. Our experienced team takes all necessary precautions to minimize risks and will discuss any concerns you may have before treatment begins.
          </p>
        </section>

        {/* FAQs */}
        <section className={`${styles.faqSection} ${styles.servicePageSection}`}>
          <h2 className={styles.servicePageSubheader}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <h3>What is a Smile Makeover?</h3>
              <p>
                A Smile Makeover is a comprehensive treatment plan that combines multiple cosmetic and restorative dental procedures to improve the appearance and function of your smile.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long does a Full Mouth Rehabilitation take?</h3>
              <p>
                The duration varies depending on the complexity of your case and the treatments involved. It can range from a few weeks to several months.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is a Smile Makeover painful?</h3>
              <p>
                We prioritize patient comfort and use modern anesthesia and sedation techniques to ensure minimal discomfort during procedures.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How much does a Smile Makeover cost?</h3>
              <p>
                The cost depends on the specific treatments included in your plan. We provide a detailed estimate after your initial consultation.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Will my insurance cover Full Mouth Rehabilitation?</h3>
              <p>
                Insurance coverage varies. Our team can assist you in understanding your benefits and exploring financing options.
              </p>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </section>

        {/* Before and After Gallery */}
        <section className={`${styles.beforeAfterSection} ${styles.servicePageSection}`}>
          <h2 className={styles.servicePageSubheader}>Before and After Gallery</h2>
          <p className={styles.servicePageText}>
            See the transformative results of our Smile Makeover treatments.
          </p>
          <div className={styles.beforeAfterGallery}>
            <div className={styles.galleryItem}>
              <Image
                src="/images/smile-makeover-before1.jpg"
                alt="Before Smile Makeover - Patient 1"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <p>Before</p>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/smile-makeover-after1.jpg"
                alt="After Smile Makeover - Patient 1"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <p>After</p>
            </div>
            {/* Add more gallery items as needed */}
          </div>
        </section>

        {/* Contact Banner */}
        <section className={styles.servicePageContactBanner}>
          <p className={styles.servicePageContactText}>
            Ready to transform your smile with a Smile Makeover?
          </p>
          <Link href="/contact" className={styles.servicePageContactButton}>
            Schedule Your Consultation Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default SmileMakeoversPage;
