import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../../DentalServices.module.scss"; // Common styles
import styles from "./EmergencyDentistry.module.scss"; // Page-specific styles
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn"; 
import FAQs from "../../components/FAQs/FAQs"; 

const EmergencyDentistryPage: React.FC = () => {
  // FAQs data
  const faqs = [
    {
      question: "What constitutes a dental emergency?",
      answer:
        "Dental emergencies include severe toothaches, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, and infections that cause swelling or fever.",
    },
    {
      question: "How quickly should I seek emergency dental care?",
      answer:
        "You should seek emergency dental care immediately when experiencing severe pain, trauma to the mouth, or signs of infection to prevent further complications.",
    },
    {
      question: "Does emergency dental care hurt?",
      answer:
        "Emergency dental procedures are performed under local anesthesia or sedation to ensure your comfort. Some minor discomfort may occur after the procedure, which can be managed with medication.",
    },
    {
      question: "What should I do if a tooth is knocked out?",
      answer:
        "If a tooth is knocked out, handle it by the crown, rinse it gently with water if dirty, and try to place it back in the socket. If that’s not possible, keep it moist by placing it in milk or a saline solution and seek emergency dental care immediately.",
    },
    {
      question: "Are emergency dental services covered by insurance?",
      answer:
        "Coverage for emergency dental services varies depending on your insurance plan. It’s best to contact your insurance provider to understand your coverage details.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Emergency Dentistry | Immediate Dental Care | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Facing a dental emergency? Bana Dental Design provides immediate emergency dentistry services to relieve pain and address urgent dental issues. Learn more about our services and FAQs."
        />
        <meta
          name="keywords"
          content="Emergency Dentistry, Immediate Dental Care, Bana Dental Design, Dental Emergencies, Urgent Dental Services"
        />
        <meta
          property="og:title"
          content="Emergency Dentistry | Immediate Dental Care | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Facing a dental emergency? Bana Dental Design provides immediate emergency dentistry services to relieve pain and address urgent dental issues. Learn more about our services and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/emergency-dentistry"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/emergency-dentistry.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/emergency-dentistry"
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
        className={`${commonStyles["service-page"]} ${styles["emergencyDentistryPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>
              Emergency Dentistry
            </h1>
            <p className={commonStyles.servicePageIntro}>
              Immediate dental care when you need it most.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/emergency-dentistry.jpg"
            alt="Emergency Dentistry at Bana Dental Design"
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
            What is Emergency Dentistry?
          </h2>
          <p className={commonStyles.servicePageText}>
            Emergency dentistry involves urgent dental care to address immediate
            dental issues such as severe pain, trauma to the mouth, or
            infections. Our team at Bana Dental Design is equipped to handle a
            wide range of dental emergencies to provide relief and prevent
            further complications.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Benefits of Our Emergency Dental Services
          </h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Immediate Relief</h3>
              <p>
                Quickly alleviate pain and discomfort associated with dental
                emergencies.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Prevent Further Damage</h3>
              <p>
                Addressing issues promptly to avoid more severe dental problems.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Comprehensive Care</h3>
              <p>
                Receive a wide range of emergency dental treatments tailored to
                your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Our Emergency Dentistry Process
          </h2>
          <p className={commonStyles.servicePageText}>
            When you experience a dental emergency, our process begins with a
            prompt consultation to assess the situation. We utilize advanced
            diagnostic tools to determine the best course of action, whether it
            involves pain management, restorative procedures, or surgical
            interventions. Our goal is to provide effective and compassionate
            care to restore your oral health swiftly.
          </p>
        </section>

        {/* Related Services Banner */}
        <section className={styles.relatedServicesBanner}>
          <h2 className={styles.relatedServicesTitle}>
            Explore Our Other Dental Services
          </h2>
          <div className={styles.relatedServicesButtons}>
            <Link href="/dental-services/root-canal-treatment">
              <button className={styles.serviceButton}>
                Root Canal Treatment
              </button>
            </Link>
            <Link href="/dental-services/braces">
              <button className={styles.serviceButton}>Braces</button>
            </Link>
            {/* Add more related service buttons as needed */}
          </div>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Facing a dental emergency?
          </p>
          <Link
            href="/contact"
            className={commonStyles.servicePageContactButton}
          >
            Contact Us Immediately
          </Link>
        </section>
      </div>
    </>
  );
};

export default EmergencyDentistryPage;
