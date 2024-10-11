// pages/dental-services/dental-x-rays/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import commonStyles from '../../DentalServices.module.scss'; // Common styles
import styles from './Xrays.module.scss'; // Page-specific styles
import ScrollFadeIn from '../../components/ScrollFadeIn/ScrollFadeIn'; 
import FAQs from '../../components/FAQs/FAQs'; 

const DentalXraysPage: React.FC = () => {
  // FAQs data
  const faqs = [
    {
      question: 'What are dental X-rays?',
      answer:
        'Dental X-rays are diagnostic images that allow dentists to see the structures of your teeth and jaw that are not visible during a regular examination.',
    },
    {
      question: 'Are dental X-rays safe?',
      answer:
        'Yes, dental X-rays use very low levels of radiation, and protective measures are taken to ensure patient safety.',
    },
    {
      question: 'How often should I get dental X-rays?',
      answer:
        'The frequency depends on your oral health needs. Your dentist will recommend how often you should have X-rays based on your individual situation.',
    },
    {
      question: 'Do dental X-rays hurt?',
      answer:
        'No, dental X-rays are quick and painless procedures.',
    },
    {
      question: 'Why are dental X-rays necessary?',
      answer:
        'They help detect problems like cavities, impacted teeth, and bone loss early, allowing for more effective treatment.',
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>Dental X-Rays | Advanced Diagnostic Imaging | Bana Dental Design</title>
        <meta
          name="description"
          content="Get accurate diagnoses with advanced dental X-rays at Bana Dental Design. Learn about the importance, safety, and FAQs."
        />
        <meta
          name="keywords"
          content="Dental X-Rays, Diagnostic Imaging, Bana Dental Design, Dental Services, Oral Health"
        />
        <meta property="og:title" content="Dental X-Rays | Advanced Diagnostic Imaging | Bana Dental Design" />
        <meta
          property="og:description"
          content="Get accurate diagnoses with advanced dental X-rays at Bana Dental Design. Learn about the importance, safety, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/dental-x-rays"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/dental-x-rays.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com/dental-services/dental-x-rays" />

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </Head>
      <div className={`${commonStyles['service-page']} ${styles['dentalXraysPage']}`}>
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>Dental X-Rays</h1>
            <p className={commonStyles.servicePageIntro}>
              Advanced diagnostic imaging for comprehensive dental care.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/dental-x-rays.jpg"
            alt="Dental X-Rays at Bana Dental Design"
            width={800}
            height={500}
            className={commonStyles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section className={`${commonStyles.servicePageDetails} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>What are Dental X-Rays?</h2>
          <p className={commonStyles.servicePageText}>
            Dental X-rays are essential diagnostic tools that provide detailed images of your teeth, bones, and surrounding soft tissues. They help in detecting problems that are not visible during a standard dental exam, such as cavities between teeth, impacted teeth, and bone loss.
          </p>
        </section>

        {/* Benefits Section */}
        <section className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Benefits of Dental X-Rays</h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Early Detection</h3>
              <p>
                Identify dental issues before they become serious problems.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Accurate Diagnosis</h3>
              <p>
                Provides detailed images for precise treatment planning.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Comprehensive Care</h3>
              <p>
                Ensures all aspects of your oral health are evaluated.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Our X-Ray Process</h2>
          <p className={commonStyles.servicePageText}>
            At Bana Dental Design, we use state-of-the-art digital X-ray technology that minimizes radiation exposure and provides instant images. Our trained professionals ensure your comfort and safety throughout the quick and painless procedure.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Have questions about dental X-rays or need to schedule an appointment?
          </p>
          <Link href="/contact" className={commonStyles.servicePageContactButton}>
            Contact Us Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default DentalXraysPage;
