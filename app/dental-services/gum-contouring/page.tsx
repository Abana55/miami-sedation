// pages/dental-services/gum-contouring/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import commonStyles from '../../DentalServices.module.scss'; // Common styles
import styles from './GumContouring.module.scss'; // Page-specific styles
import ScrollFadeIn from '../../components/ScrollFadeIn/ScrollFadeIn'; 
import FAQs from '../../components/FAQs/FAQs'; 

const GumContouringPage: React.FC = () => {
  // FAQs data
  const faqs = [
    {
      question: 'What is gum contouring?',
      answer:
        'Gum contouring is a cosmetic dental procedure that reshapes the gum line to improve the appearance of your smile. It involves removing or reshaping excess gum tissue for a more balanced look.',
    },
    {
      question: 'Who is a good candidate for gum contouring?',
      answer:
        'Individuals with a "gummy" smile, uneven gum line, or excess gum tissue that affects the appearance of their teeth may benefit from gum contouring.',
    },
    {
      question: 'Is gum contouring painful?',
      answer:
        'The procedure is typically performed under local anesthesia, so you should not feel pain during the treatment. Some discomfort or sensitivity may occur afterward, which can be managed with medication.',
    },
    {
      question: 'How long does it take to recover from gum contouring?',
      answer:
        'Recovery time is usually short, with most patients resuming normal activities within a few days. Full healing may take a couple of weeks.',
    },
    {
      question: 'Are the results of gum contouring permanent?',
      answer:
        'Yes, gum contouring provides permanent results as the excess gum tissue does not grow back.',
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>Gum Contouring | Enhance Your Smile | Bana Dental Design</title>
        <meta
          name="description"
          content="Improve the appearance of your smile with gum contouring at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Gum Contouring, Cosmetic Dentistry, Bana Dental Design, Dental Services, Gummy Smile"
        />
        <meta property="og:title" content="Gum Contouring | Enhance Your Smile | Bana Dental Design" />
        <meta
          property="og:description"
          content="Improve the appearance of your smile with gum contouring at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/gum-contouring"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/gum-contouring.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com/dental-services/gum-contouring" />

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
      <div className={`${commonStyles['service-page']} ${styles['gumContouringPage']}`}>
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>Gum Contouring</h1>
            <p className={commonStyles.servicePageIntro}>
              Enhance your smile with our professional gum contouring services.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/gum-contouring.jpg"
            alt="Gum Contouring at Bana Dental Design"
            width={800}
            height={500}
            className={commonStyles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section className={`${commonStyles.servicePageDetails} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>What is Gum Contouring?</h2>
          <p className={commonStyles.servicePageText}>
            Gum contouring is a cosmetic dental procedure that reshapes the gum line to create a more balanced and symmetrical smile. It involves removing excess gum tissue or restoring receding gum lines to enhance the appearance of your teeth.
          </p>
        </section>

        {/* Benefits Section */}
        <section className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Benefits of Gum Contouring</h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Improved Aesthetics</h3>
              <p>
                Achieve a balanced smile by correcting a "gummy" appearance or uneven gum line.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Enhanced Confidence</h3>
              <p>
                Feel more confident in your smile with proportionate gums and teeth.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Customized Results</h3>
              <p>
                Treatment tailored to your specific needs and desired outcome.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Our Gum Contouring Procedure</h2>
          <p className={commonStyles.servicePageText}>
            The procedure involves using specialized tools or laser technology to carefully remove or reshape excess gum tissue. It's performed under local anesthesia to ensure your comfort. Our experienced team will guide you through each step, from consultation to recovery.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Interested in enhancing your smile with gum contouring?
          </p>
          <Link href="/contact" className={commonStyles.servicePageContactButton}>
            Schedule a Consultation Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default GumContouringPage;
