// pages/dental-services/fillings/page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../../DentalServices.module.scss"; // Common styles
import styles from "./Fillings.module.scss"; // Page-specific styles
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";
import FAQs from "../../components/FAQs/FAQs";

const FillingsPage: React.FC = () => {
  const faqs = [
    {
      question: "What is a dental filling?",
      answer:
        "A dental filling is a restorative material used to repair minimal tooth fractures, cavities, or otherwise damaged surfaces of the teeth.",
    },
    {
      question: "What types of fillings are available?",
      answer:
        "Common types include amalgam (silver), composite (tooth-colored), gold, and porcelain fillings.",
    },
    {
      question: "How long do dental fillings last?",
      answer:
        "The lifespan of a filling depends on the material used and your oral habits, but they can last anywhere from 5 to 15 years or more.",
    },
    {
      question: "Does getting a filling hurt?",
      answer:
        "The procedure is typically performed under local anesthesia, so you should not feel pain during the treatment.",
    },
    {
      question: "How do I care for my dental fillings?",
      answer:
        "Maintain good oral hygiene by brushing and flossing regularly, and visit your dentist for routine check-ups.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Dental Fillings | Restore Damaged Teeth | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Repair cavities and restore damaged teeth with dental fillings at Bana Dental Design. Learn about the types, benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Dental Fillings, Tooth Decay, Cavities, Bana Dental Design, Dental Services, Tooth Restoration"
        />
        <meta
          property="og:title"
          content="Dental Fillings | Restore Damaged Teeth | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Repair cavities and restore damaged teeth with dental fillings at Bana Dental Design. Learn about the types, benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/fillings"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/dental-fillings.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/fillings"
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
        className={`${commonStyles["service-page"]} ${styles["fillingsPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>
              Dental Fillings
            </h1>
            <p className={commonStyles.servicePageIntro}>
              Repair cavities and restore damaged teeth with our dental
              fillings.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/dental-fillings.jpg"
            alt="Dental Fillings at Bana Dental Design"
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
            What are Dental Fillings?
          </h2>
          <p className={commonStyles.servicePageText}>
            Dental fillings are materials used to repair teeth that have been
            damaged by cavities or trauma. They restore the tooth's shape and
            function, prevent further decay, and can be made from various
            materials such as composite resin, amalgam, gold, or porcelain.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Benefits of Dental Fillings
          </h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Restore Function</h3>
              <p>
                Enables proper chewing and biting by repairing damaged teeth.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Prevent Further Decay</h3>
              <p>
                Seals off areas where bacteria can enter, preventing further
                decay.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Natural Appearance</h3>
              <p>
                Tooth-colored fillings blend with your natural teeth for an
                aesthetic look.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Our Filling Procedure
          </h2>
          <p className={commonStyles.servicePageText}>
            The procedure involves removing the decayed portion of the tooth,
            cleaning the affected area, and filling the cavity with a suitable
            material. The process is usually quick and performed under local
            anesthesia to ensure your comfort.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Need to repair a cavity or damaged tooth?
          </p>
          <Link
            href="/contact"
            className={commonStyles.servicePageContactButton}
          >
            Schedule an Appointment Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default FillingsPage;
