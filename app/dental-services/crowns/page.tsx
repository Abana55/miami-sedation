// pages/dental-services/crowns/page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../../DentalServices.module.scss"; // Common styles
import styles from "./Crowns.module.scss"; // Page-specific styles
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn"; 
import FAQs from "../../components/FAQs/FAQs"; 

const CrownsPage: React.FC = () => {
  const faqs = [
    {
      question: "What is a dental crown?",
      answer:
        "A dental crown is a custom-made cap that covers a damaged or decayed tooth, restoring its shape, size, strength, and appearance.",
    },
    {
      question: "Why might I need a dental crown?",
      answer:
        "You may need a crown to protect a weak tooth, restore a broken tooth, cover a dental implant, or improve the appearance of a discolored or misshapen tooth.",
    },
    {
      question: "How long do dental crowns last?",
      answer:
        "With proper care, dental crowns can last between 10 to 15 years or even longer.",
    },
    {
      question: "Does getting a crown hurt?",
      answer:
        "The procedure is typically performed under local anesthesia, so you should not feel pain during the treatment.",
    },
    {
      question: "How do I care for my dental crown?",
      answer:
        "Maintain good oral hygiene by brushing and flossing regularly, and visit your dentist for routine check-ups.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Dental Crowns | Restore and Protect Your Teeth | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Restore damaged teeth with custom dental crowns at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Dental Crowns, Tooth Restoration, Bana Dental Design, Dental Services, Tooth Repair"
        />
        <meta
          property="og:title"
          content="Dental Crowns | Restore and Protect Your Teeth | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Restore damaged teeth with custom dental crowns at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/crowns"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/dental-crowns.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/crowns"
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
        className={`${commonStyles["service-page"]} ${styles["crownsPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>
              Dental Crowns
            </h1>
            <p className={commonStyles.servicePageIntro}>
              Restore and protect your teeth with custom dental crowns.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/dental-crowns.jpg"
            alt="Dental Crowns at Bana Dental Design"
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
            What are Dental Crowns?
          </h2>
          <p className={commonStyles.servicePageText}>
            Dental crowns are custom-made caps that cover damaged or decayed
            teeth. They restore the tooth's shape, size, strength, and improve
            its appearance. Crowns are used to protect weak teeth, restore
            broken teeth, or cover dental implants.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Benefits of Dental Crowns
          </h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Restored Function</h3>
              <p>
                Enables you to bite and chew properly by restoring damaged
                teeth.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Protection</h3>
              <p>Protects weakened teeth from further damage or decay.</p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Improved Appearance</h3>
              <p>
                Enhances the look of your smile by covering discolored or
                misshapen teeth.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Our Crown Placement Process
          </h2>
          <p className={commonStyles.servicePageText}>
            The crown placement typically requires two visits. During the first
            visit, we prepare the tooth by removing any decay and shaping it to
            fit the crown. We'll take impressions to create a custom crown and
            place a temporary one. On the second visit, we'll remove the
            temporary crown and cement the permanent one in place.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Interested in restoring your smile with dental crowns?
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

export default CrownsPage;
