import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../../DentalServices.module.scss";
import styles from "./OralExams.module.scss";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";
import FAQs from "../../components/FAQs/FAQs";

const OralExamsPage: React.FC = () => {
  // FAQs data
  const faqs = [
    {
      question: "What is an oral exam?",
      answer:
        "An oral exam is a comprehensive evaluation of your oral health, including teeth, gums, and other structures of the mouth.",
    },
    {
      question: "How often should I have an oral exam?",
      answer:
        "It is recommended to have an oral exam every six months to maintain optimal oral health.",
    },
    {
      question: "What happens during an oral exam?",
      answer:
        "During an oral exam, the dentist will check for cavities, gum disease, oral cancer, and other issues. X-rays may also be taken if necessary.",
    },
    {
      question: "Do oral exams hurt?",
      answer:
        "Oral exams are generally painless. You may experience slight discomfort if you have sensitive areas, but the dentist will ensure your comfort.",
    },
    {
      question: "Are oral exams covered by insurance?",
      answer:
        "Most dental insurance plans cover preventive services like oral exams. We can help you understand your coverage.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Oral Exams | Comprehensive Dental Check-Ups | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Maintain optimal oral health with comprehensive oral exams at Bana Dental Design. Learn about the importance, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Oral Exams, Dental Check-Ups, Preventive Dentistry, Bana Dental Design, Dental Services"
        />
        <meta
          property="og:title"
          content="Oral Exams | Comprehensive Dental Check-Ups | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Maintain optimal oral health with comprehensive oral exams at Bana Dental Design. Learn about the importance, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/oral-exams"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/oral-exams.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/oral-exams"
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
        className={`${commonStyles["service-page"]} ${styles["oralExamsPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>Oral Exams</h1>
            <p className={commonStyles.servicePageIntro}>
              Comprehensive dental check-ups for a healthy smile.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/oral-exams.jpg"
            alt="Patient receiving an oral exam at Bana Dental Design"
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
            What are Oral Exams?
          </h2>
          <p className={commonStyles.servicePageText}>
            Oral exams are comprehensive evaluations of your oral health. They
            involve checking your teeth, gums, and other structures of the mouth
            to detect any issues early on. Regular oral exams are essential for
            maintaining optimal oral health and preventing dental problems.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Benefits of Regular Oral Exams
          </h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Early Detection</h3>
              <p>Identify dental issues before they become serious problems.</p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Preventive Care</h3>
              <p>
                Receive guidance on maintaining oral hygiene to prevent future
                issues.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Overall Health</h3>
              <p>
                Oral health is linked to overall health; regular exams
                contribute to your well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Our Examination Process
          </h2>
          <p className={commonStyles.servicePageText}>
            During your oral exam, our dentist will thoroughly inspect your
            mouth for signs of cavities, gum disease, oral cancer, and other
            conditions. We may use X-rays to get a complete picture of your oral
            health. We'll also discuss any concerns you have and provide
            personalized advice.
          </p>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Ready to schedule your next oral exam?
          </p>
          <Link
            href="/contact"
            className={commonStyles.servicePageContactButton}
          >
            Book Your Appointment Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default OralExamsPage;
