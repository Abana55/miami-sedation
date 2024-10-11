import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../../DentalServices.module.scss"; // Common styles
import styles from "./Bridges.module.scss"; // Page-specific styles
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn"; 
import FAQs from "../../components/FAQs/FAQs"; 

const BridgesPage: React.FC = () => {
  // FAQs data
  const faqs = [
    {
      question: "What is a dental bridge?",
      answer:
        "A dental bridge is a fixed dental restoration used to replace one or more missing teeth by joining an artificial tooth permanently to adjacent teeth or dental implants.",
    },
    {
      question: "How long do dental bridges last?",
      answer:
        "With proper care, dental bridges can last between 5 to 15 years or even longer.",
    },
    {
      question: "What are the types of dental bridges?",
      answer:
        "The main types are traditional bridges, cantilever bridges, Maryland bridges, and implant-supported bridges.",
    },
    {
      question: "Is getting a dental bridge painful?",
      answer:
        "The procedure is typically performed under local anesthesia, so you should not feel pain during the treatment.",
    },
    {
      question: "How do I care for my dental bridge?",
      answer:
        "Maintain good oral hygiene by brushing and flossing regularly, and visit your dentist for routine check-ups. Special flossing tools may be recommended.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Dental Bridges | Replace Missing Teeth | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Replace missing teeth with custom dental bridges at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Dental Bridges, Tooth Replacement, Bana Dental Design, Dental Services, Missing Teeth"
        />
        <meta
          property="og:title"
          content="Dental Bridges | Replace Missing Teeth | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Replace missing teeth with custom dental bridges at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/bridges"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/dental-bridges.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/bridges"
        />

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </Head>
      <div
        className={`${commonStyles["service-page"]} ${styles["bridgesPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>
              Dental Bridges
            </h1>
            <p className={commonStyles.servicePageIntro}>
              Replace missing teeth with custom dental bridges.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/dental-bridges.jpg"
            alt="Dental Bridges at Bana Dental Design"
            width={800}
            height={500}
            className={commonStyles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section
          className={`${commonStyles.servicePageDetails} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            What are Dental Bridges?
          </h2>
          <p className={commonStyles.servicePageText}>
            Dental bridges are fixed dental prosthetics that fill the gap
            created by one or more missing teeth. They are anchored to
            neighboring teeth or dental implants and restore your smile, ability
            to chew, and maintain the shape of your face.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Benefits of Dental Bridges
          </h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Restored Smile</h3>
              <p>Improve your appearance by filling gaps in your smile.</p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Improved Function</h3>
              <p>Restore your ability to chew and speak properly.</p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Prevent Shifting Teeth</h3>
              <p>Prevent remaining teeth from drifting out of position.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Our Bridge Placement Process
          </h2>
          <p className={commonStyles.servicePageText}>
            The bridge placement typically requires two visits. In the first
            visit, the abutment teeth are prepared by removing a portion of
            enamel to accommodate the crown. Impressions are taken to fabricate
            the custom bridge, and a temporary bridge is placed. In the second
            visit, the permanent bridge is adjusted for fit and then cemented
            into place.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Considering dental bridges to restore your smile?
          </p>
          <Link
            href="/contact"
            className={commonStyles.servicePageContactButton}
          >
            Schedule a Consultation Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default BridgesPage;
