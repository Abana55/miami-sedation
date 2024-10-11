import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import commonStyles from '../../DentalServices.module.scss'; // Common styles
import styles from './TeethCleaning.module.scss'; // Page-specific styles
import ScrollFadeIn from '../../components/ScrollFadeIn/ScrollFadeIn'; 
import FAQs from '../../components/FAQs/FAQs'; 

const TeethCleaningPage: React.FC = () => {
  // FAQs data
  const faqs = [
    {
      question: 'How often should I get my teeth cleaned?',
      answer:
        'It is recommended to have your teeth professionally cleaned every six months to maintain optimal oral health.',
    },
    {
      question: 'Is teeth cleaning painful?',
      answer:
        'Teeth cleaning is generally not painful. Some patients may experience minor discomfort if they have sensitive teeth or gums.',
    },
    {
      question: 'What happens during a teeth cleaning appointment?',
      answer:
        'A dental hygienist will remove plaque and tartar buildup, polish your teeth, and may apply fluoride treatment to protect your teeth.',
    },
    {
      question: 'Why is teeth cleaning important?',
      answer:
        'Regular teeth cleaning helps prevent cavities, gum disease, and other oral health issues by removing harmful bacteria and buildup.',
    },
    {
      question: 'Can teeth cleaning whiten my teeth?',
      answer:
        'Teeth cleaning can remove surface stains and make your teeth appear brighter, but it is not a substitute for professional teeth whitening.',
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>Teeth Cleaning | Maintain Your Oral Health | Bana Dental Design</title>
        <meta
          name="description"
          content="Keep your smile healthy with professional teeth cleaning services at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Teeth Cleaning, Dental Cleaning, Oral Health, Bana Dental Design, Preventive Dentistry, Dental Services"
        />
        <meta property="og:title" content="Teeth Cleaning | Maintain Your Oral Health | Bana Dental Design" />
        <meta
          property="og:description"
          content="Keep your smile healthy with professional teeth cleaning services at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/teeth-cleaning"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/teeth-cleaning.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com/dental-services/teeth-cleaning" />

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
      <div className={`${commonStyles['service-page']} ${styles['teethCleaningPage']}`}>
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>Teeth Cleaning</h1>
            <p className={commonStyles.servicePageIntro}>
              Keep your smile healthy with our professional teeth cleaning services.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/teeth-cleaning.jpg"
            alt="Patient receiving teeth cleaning at Bana Dental Design"
            width={800}
            height={500}
            className={commonStyles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section className={`${commonStyles.servicePageDetails} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>What is Teeth Cleaning?</h2>
          <p className={commonStyles.servicePageText}>
            Teeth cleaning is a preventive dental procedure that involves removing plaque, tartar, and stains from your teeth. It helps maintain good oral hygiene and prevents cavities, gum disease, and other dental issues.
          </p>
        </section>

        {/* Benefits Section */}
        <section className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Benefits of Regular Teeth Cleaning</h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Prevent Cavities</h3>
              <p>
                Removes plaque buildup that can lead to tooth decay.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Maintain Gum Health</h3>
              <p>
                Prevents gum disease by removing tartar and bacteria.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Freshen Breath</h3>
              <p>
                Eliminates bad breath caused by plaque and bacteria.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Our Cleaning Process</h2>
          <p className={commonStyles.servicePageText}>
            During your teeth cleaning appointment, our dental hygienist will use specialized tools to gently remove plaque and tartar from your teeth and gum line. We'll polish your teeth to remove surface stains and may apply a fluoride treatment for added protection.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Ready to schedule your next teeth cleaning?
          </p>
          <Link href="/contact" className={commonStyles.servicePageContactButton}>
            Book Your Appointment Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default TeethCleaningPage;
