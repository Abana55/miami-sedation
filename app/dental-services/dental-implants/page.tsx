// pages/dental-services/dental-implants/page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../../DentalServices.module.scss"; // Common styles
import styles from "./DentalImplants.module.scss"; // Page-specific styles
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn"; 
import FAQs from "../../components/FAQs/FAQs"; 

const DentalImplantsPage: React.FC = () => {
  // FAQs data
  const faqs = [
    {
      question: "What is a dental implant?",
      answer:
        "A dental implant is a titanium post surgically placed into the jawbone beneath the gum line to act as a tooth root. It allows your dentist to mount replacement teeth or a bridge into that area.",
    },
    {
      question: "Who is a good candidate for dental implants?",
      answer:
        "Generally, good candidates are individuals with healthy gums and enough bone to support the implant. A consultation is necessary to determine if implants are right for you.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care, dental implants can last a lifetime, making them a long-term solution for missing teeth.",
    },
    {
      question: "Does getting a dental implant hurt?",
      answer:
        "The procedure is performed under local anesthesia, so you should not feel pain during the surgery. Post-operative discomfort can be managed with medication.",
    },
    {
      question: "How do I care for my dental implants?",
      answer:
        "Maintain good oral hygiene by brushing and flossing regularly, and visit your dentist for routine check-ups. Dental implants require the same care as natural teeth.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Dental Implants | Permanent Tooth Replacement | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Replace missing teeth permanently with dental implants at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Dental Implants, Tooth Replacement, Bana Dental Design, Dental Services, Missing Teeth, Implant Dentistry"
        />
        <meta
          property="og:title"
          content="Dental Implants | Permanent Tooth Replacement | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Replace missing teeth permanently with dental implants at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/dental-implants"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/dental-implants.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/dental-implants"
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
        className={`${commonStyles["service-page"]} ${styles["dentalImplantsPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>
              Dental Implants
            </h1>
            <p className={commonStyles.servicePageIntro}>
              Replace missing teeth permanently with our dental implant
              solutions.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/dental-implants.jpg"
            alt="Dental Implants at Bana Dental Design"
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
            What are Dental Implants?
          </h2>
          <p className={commonStyles.servicePageText}>
            Dental implants are artificial tooth roots made of titanium that
            provide a permanent base for fixed, replacement teeth. They are the
            closest solution to natural, healthy teeth and offer a long-term
            solution for people missing one or more teeth.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Benefits of Dental Implants
          </h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Permanent Solution</h3>
              <p>
                Dental implants are designed to last a lifetime with proper
                care.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Natural Look and Feel</h3>
              <p>They look, feel, and function like your natural teeth.</p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Preserve Jawbone</h3>
              <p>Implants prevent bone loss by stimulating the jawbone.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Our Implant Procedure
          </h2>
          <p className={commonStyles.servicePageText}>
            The implant process involves several steps, including a
            comprehensive evaluation, surgical placement of the implant, healing
            time to allow the implant to fuse with the bone, and placement of
            the custom-made crown. Our team ensures a comfortable and successful
            treatment journey.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Interested in restoring your smile with dental implants?
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

export default DentalImplantsPage;
