import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../../DentalServices.module.scss"; // Common styles
import styles from "./SmileMakeovers.module.scss"; // Page-specific styles
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn"; 
import FAQs from "../../components/FAQs/FAQs"; 

const SmileMakeoversPage: React.FC = () => {
  const faqs = [
    {
      question: "What is a smile makeover?",
      answer:
        "A smile makeover is a customized treatment plan that combines various cosmetic dental procedures to improve the appearance of your smile.",
    },
    {
      question: "What treatments are included in a smile makeover?",
      answer:
        "Treatments may include teeth whitening, veneers, crowns, dental implants, orthodontics, and more, depending on your individual needs.",
    },
    {
      question: "How long does a smile makeover take?",
      answer:
        "The duration varies based on the complexity of the treatment plan. It can range from one appointment to several months.",
    },
    {
      question: "Is a smile makeover right for me?",
      answer:
        "If you are unhappy with the appearance of your smile due to issues like discoloration, misalignment, gaps, or damaged teeth, a smile makeover may be suitable for you.",
    },
    {
      question: "How much does a smile makeover cost?",
      answer:
        "The cost depends on the specific treatments included in your plan. We offer consultations to provide personalized quotes.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Smile Makeovers | Transform Your Smile | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Achieve the smile of your dreams with personalized smile makeovers at Bana Dental Design. Learn about the process, treatments, and FAQs."
        />
        <meta
          name="keywords"
          content="Smile Makeovers, Cosmetic Dentistry, Bana Dental Design, Dental Services, Smile Transformation"
        />
        <meta
          property="og:title"
          content="Smile Makeovers | Transform Your Smile | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Achieve the smile of your dreams with personalized smile makeovers at Bana Dental Design. Learn about the process, treatments, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/smile-makeovers"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/smile-makeovers.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/smile-makeovers"
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
        className={`${commonStyles["service-page"]} ${styles["smileMakeoversPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>
              Smile Makeovers
            </h1>
            <p className={commonStyles.servicePageIntro}>
              Transform your smile with our personalized smile makeover
              solutions.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/smile-makeovers.jpg"
            alt="Smile Makeovers at Bana Dental Design"
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
            What is a Smile Makeover?
          </h2>
          <p className={commonStyles.servicePageText}>
            A smile makeover is a comprehensive approach to improving the
            appearance of your smile through one or more cosmetic dentistry
            procedures. Whether you're dealing with discoloration, chips, gaps,
            or misalignment, we create a customized treatment plan to address
            your unique concerns and goals.
          </p>
        </section>

        {/* Treatments Section */}
        <section
          className={`${commonStyles.treatmentsSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Common Treatments in Smile Makeovers
          </h2>
          <div className={commonStyles.treatmentsContainer}>
            <div className={commonStyles.treatmentCard}>
              <h3>Teeth Whitening</h3>
              <p>Brighten your smile by removing stains and discoloration.</p>
            </div>
            <div className={commonStyles.treatmentCard}>
              <h3>Veneers</h3>
              <p>Cover imperfections with custom-made porcelain shells.</p>
            </div>
            <div className={commonStyles.treatmentCard}>
              <h3>Dental Implants</h3>
              <p>
                Replace missing teeth with permanent, natural-looking implants.
              </p>
            </div>
            <div className={commonStyles.treatmentCard}>
              <h3>Orthodontics</h3>
              <p>Straighten misaligned teeth with braces or clear aligners.</p>
            </div>
            {/* Add more treatment cards as needed */}
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Our Smile Makeover Process
          </h2>
          <p className={commonStyles.servicePageText}>
            Our smile makeover process begins with a comprehensive consultation
            to understand your aesthetic goals and evaluate your oral health.
            We'll develop a personalized treatment plan that may include a
            combination of cosmetic and restorative procedures to achieve the
            smile you've always wanted.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Ready to transform your smile?
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

export default SmileMakeoversPage;
