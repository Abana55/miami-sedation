import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import commonStyles from '../../DentalServices.module.scss'; 
import styles from './InlaysOnlays.module.scss'; 
import ScrollFadeIn from '@/app/components/ScrollFadeIn/ScrollFadeIn'; 
import FAQs from '@/app/components/FAQs/FAQs'; 

const InlaysOnlaysPage = () => {
  const faqs = [
    {
      question: 'What is the difference between an inlay and an onlay?',
      answer: 'An inlay fits within the grooves of a tooth, while an onlay covers one or more cusps of the tooth.',
    },
    {
      question: 'How long do inlays and onlays last?',
      answer: 'With proper care, they can last up to 10-15 years or more.',
    },
    {
      question: 'Are they noticeable?',
      answer: 'No, they are crafted to match the color of your natural teeth.',
    },
    {
      question: 'Is the procedure painful?',
      answer: 'The procedure is typically performed under local anesthesia, so you should not feel pain during the treatment.',
    },
    {
      question: 'How do I care for them?',
      answer: 'Maintain good oral hygiene and regular dental check-ups.',
    },
    {
      question: 'Can I eat normally after getting an inlay or onlay?',
      answer: 'Yes, once the inlay or onlay is bonded, you can resume normal eating habits. It restores the strength and function of your tooth.',
    },
    {
      question: 'How much do inlays and onlays cost?',
      answer: 'The cost varies depending on the material used and the complexity of the case. We provide a detailed estimate after your consultation.',
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>Inlays and Onlays | Restore Your Smile | Bana Dental Design</title>
        <meta
          name="description"
          content="Restore damaged teeth with precision-crafted inlays and onlays at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Inlays, Onlays, Dental Restoration, Bana Dental Design, Tooth Repair, Dental Services"
        />
        <meta property="og:title" content="Inlays and Onlays | Restore Your Smile | Bana Dental Design" />
        <meta
          property="og:description"
          content="Restore damaged teeth with precision-crafted inlays and onlays at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/inlays-onlays"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/inlays-onlays.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com/dental-services/inlays-onlays" />

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
      <div className={`${commonStyles['service-page']} ${styles['inlaysOnlaysPage']}`}>
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>Inlays and Onlays</h1>
            <p className={commonStyles.servicePageIntro}>
              Precision restorations to preserve your natural smile.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/inlays-onlays.jpg"
            alt="Inlays and Onlays at Bana Dental Design"
            width={800}
            height={500}
            className={commonStyles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section className={`${commonStyles.servicePageDetails} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>What are Inlays and Onlays?</h2>
          <p className={commonStyles.servicePageText}>
            Inlays and onlays are custom-made dental restorations used to repair damaged or decayed teeth. They are an excellent alternative to traditional fillings and crowns, especially when the damage is too extensive for a filling but not severe enough to require a crown.
          </p>
        </section>

        {/* Benefits Section */}
        <section className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Benefits of Inlays and Onlays</h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Durability</h3>
              <p>
                Inlays and onlays are made from strong materials that last longer than traditional fillings.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Aesthetics</h3>
              <p>
                They blend seamlessly with your natural teeth for a beautiful smile.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Conservative Treatment</h3>
              <p>
                They preserve more of your natural tooth structure compared to crowns.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Our Process</h2>
          <p className={commonStyles.servicePageText}>
            The treatment typically requires two visits. During the first visit, we prepare the tooth and take impressions to create a custom inlay or onlay. A temporary restoration is placed until your next appointment. In the second visit, the inlay or onlay is bonded to your tooth, restoring its function and appearance.
          </p>
        </section>

        {/* Risks Section */}
        <section className={`${commonStyles.risksSection} ${commonStyles.servicePageSection}`}>
          <h2 className={commonStyles.servicePageSubheader}>Possible Risks</h2>
          <p className={commonStyles.servicePageText}>
            While inlays and onlays are generally safe, some patients may experience sensitivity or discomfort, which usually subsides shortly after the procedure. Our team ensures you are comfortable throughout the treatment.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Ready to restore your smile with inlays and onlays?
          </p>
          <Link href="/contact" className={commonStyles.servicePageContactButton}>
            Contact Us Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default InlaysOnlaysPage;
