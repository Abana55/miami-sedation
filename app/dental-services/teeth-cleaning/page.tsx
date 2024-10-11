import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import commonStyles from '../../DentalServices.module.scss'; // Common styles
import styles from './TeethWhitening.module.scss'; // Page-specific styles
import ScrollFadeIn from '../../components/ScrollFadeIn/ScrollFadeIn'; 
import FAQs from '../../components/FAQs/FAQs'; 

const TeethWhiteningPage: React.FC = () => {
  const faqs = [
    {
      question: 'What is teeth whitening?',
      answer:
        'Teeth whitening is a cosmetic dental procedure that lightens teeth by removing stains and discoloration.',
    },
    {
      question: 'Is teeth whitening safe?',
      answer:
        'Yes, when performed by dental professionals, teeth whitening is a safe procedure.',
    },
    {
      question: 'How long does the teeth whitening process take?',
      answer:
        'In-office teeth whitening typically takes about an hour. At-home treatments may take longer depending on the desired results.',
    },
    {
      question: 'How long do the results last?',
      answer:
        'Results can last from several months to a few years, depending on your oral hygiene habits and lifestyle.',
    },
    {
      question: 'Are there any side effects?',
      answer:
        'Some people may experience temporary tooth sensitivity or gum irritation after whitening.',
    },
    {
      question: 'Can anyone get their teeth whitened?',
      answer:
        'Most people are good candidates, but a consultation is necessary to determine if teeth whitening is right for you.',
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>Teeth Whitening | Brighten Your Smile | Bana Dental Design</title>
        <meta
          name="description"
          content="Achieve a brighter smile with professional teeth whitening services at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Teeth Whitening, Dental Whitening, Cosmetic Dentistry, Bana Dental Design, Smile Brightening, Dental Services"
        />
        <meta property="og:title" content="Teeth Whitening | Brighten Your Smile | Bana Dental Design" />
        <meta
          property="og:description"
          content="Achieve a brighter smile with professional teeth whitening services at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/teeth-whitening"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/teeth-whitening.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com/dental-services/teeth-whitening" />

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
      <div className={`${commonStyles['service-page']} ${styles['teethWhiteningPage']}`}>
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>Teeth Whitening</h1>
            <p className={commonStyles.servicePageIntro}>
              Brighten your smile with our professional teeth whitening services.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/teeth-whitening.jpg"
            alt="Patient receiving teeth whitening at Bana Dental Design"
            width={800}
            height={500}
            className={commonStyles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section className={`${commonStyles.servicePageDetails} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>What is Teeth Whitening?</h2>
          <p className={commonStyles.servicePageText}>
            Teeth whitening is a cosmetic dental procedure that lightens teeth by removing stains and discoloration. At Bana Dental Design, we offer professional teeth whitening treatments that are safe and effective, giving you a brighter, more confident smile.
          </p>
        </section>

        {/* Benefits Section */}
        <section className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Benefits of Teeth Whitening</h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Enhanced Appearance</h3>
              <p>
                Achieve a brighter smile that can boost your self-confidence.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Quick and Effective</h3>
              <p>
                Noticeable results in a single appointment with our in-office treatments.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Customized Treatment</h3>
              <p>
                Personalized whitening solutions tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Our Whitening Process</h2>
          <p className={commonStyles.servicePageText}>
            Our teeth whitening process begins with a consultation to determine the best treatment for you. We offer both in-office whitening for immediate results and take-home kits for gradual whitening. Our professional-grade products ensure effective and safe results.
          </p>
        </section>

        {/* Risks Section */}
        <section className={`${commonStyles.risksSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Possible Risks</h2>
          <p className={commonStyles.servicePageText}>
            Teeth whitening is generally safe, but some patients may experience temporary tooth sensitivity or gum irritation. Our team will guide you through precautions to minimize any discomfort.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Ready to brighten your smile with teeth whitening?
          </p>
          <Link href="/contact" className={commonStyles.servicePageContactButton}>
            Schedule Your Appointment Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default TeethWhiteningPage;
