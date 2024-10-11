import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import commonStyles from '../../DentalServices.module.scss'; // Common styles
import styles from './Veneers.module.scss'; // Page-specific styles
import ScrollFadeIn from '../../components/ScrollFadeIn/ScrollFadeIn'; 
import FAQs from '../../components/FAQs/FAQs'; 

const VeneersPage: React.FC = () => {
  // FAQs data
  const faqs = [
    {
      question: 'What are dental veneers?',
      answer:
        'Dental veneers are thin, custom-made shells designed to cover the front surface of teeth to improve their appearance. They are made from porcelain or resin composite materials.',
    },
    {
      question: 'Who is a good candidate for veneers?',
      answer:
        'Individuals with chipped, discolored, misaligned, or worn-down teeth may be good candidates. A consultation is necessary to determine if veneers are right for you.',
    },
    {
      question: 'How long do veneers last?',
      answer:
        'With proper care, veneers can last between 10 to 15 years or even longer.',
    },
    {
      question: 'Does getting veneers hurt?',
      answer:
        'The procedure is minimally invasive and typically requires little to no anesthesia. Some patients may experience temporary sensitivity.',
    },
    {
      question: 'How do I care for my veneers?',
      answer:
        'Maintain good oral hygiene by brushing and flossing regularly, avoid biting hard objects, and visit your dentist for routine check-ups.',
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>Dental Veneers | Transform Your Smile | Bana Dental Design</title>
        <meta
          name="description"
          content="Enhance your smile with custom dental veneers at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Dental Veneers, Cosmetic Dentistry, Bana Dental Design, Dental Services, Smile Makeover"
        />
        <meta property="og:title" content="Dental Veneers | Transform Your Smile | Bana Dental Design" />
        <meta
          property="og:description"
          content="Enhance your smile with custom dental veneers at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/veneers"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/dental-veneers.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com/dental-services/veneers" />

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
      <div className={`${commonStyles['service-page']} ${styles['veneersPage']}`}>
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>Dental Veneers</h1>
            <p className={commonStyles.servicePageIntro}>
              Transform your smile with our custom dental veneers.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/dental-veneers.jpg"
            alt="Dental Veneers at Bana Dental Design"
            width={800}
            height={500}
            className={commonStyles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section className={`${commonStyles.servicePageDetails} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>What are Dental Veneers?</h2>
          <p className={commonStyles.servicePageText}>
            Dental veneers are thin, custom-made shells crafted from tooth-colored materials designed to cover the front surface of teeth. They improve the appearance of your teeth by altering their color, shape, size, or length, offering a natural and attractive look.
          </p>
        </section>

        {/* Benefits Section */}
        <section className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Benefits of Dental Veneers</h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Enhanced Appearance</h3>
              <p>
                Correct imperfections like discoloration, chips, or gaps for a flawless smile.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Natural Look</h3>
              <p>
                Veneers mimic the light-reflecting properties of natural teeth.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Stain Resistance</h3>
              <p>
                Porcelain veneers resist stains, keeping your smile bright.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Our Veneer Procedure</h2>
          <p className={commonStyles.servicePageText}>
            The veneer process typically involves three appointments: consultation, preparation, and bonding. We'll discuss your goals, prepare your teeth by removing a small amount of enamel, take impressions, and then bond the custom-made veneers to your teeth for a stunning transformation.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Ready to enhance your smile with dental veneers?
          </p>
          <Link href="/contact" className={commonStyles.servicePageContactButton}>
            Schedule a Consultation Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default VeneersPage;
