import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../DentalServices.module.scss";
import styles from "./FinanceWithUs.module.scss";
import ScrollFadeIn from "../components/ScrollFadeIn/ScrollFadeIn";
import FAQs from "../components/FAQs/FAQs";
import MyButton from "../components/MyButton/MyButton";

const FinanceWithUsPage: React.FC = () => {
  // FAQs data (optional, can include financing-related FAQs)
  const faqs = [
    {
      question: "What financing options are available?",
      answer:
        "We offer various financing options including Alphaeon, Sunbit, CareCredit, and Proceed Finance to help you manage the cost of your dental procedures.",
    },
    {
      question: "How do I apply for financing?",
      answer:
        "You can apply for financing directly through our office. Our financial advisors will guide you through the application process and help you choose the best option for your needs.",
    },
    {
      question: "Are there any interest rates or fees?",
      answer:
        "Each financing option has its own interest rates and terms. Our team will provide detailed information on each plan to help you make an informed decision.",
    },
    {
      question: "Can I apply for multiple financing options?",
      answer:
        "While you can explore multiple options, we recommend selecting the one that best fits your financial situation to avoid overlapping commitments.",
    },
    {
      question: "Is financing available for all dental procedures?",
      answer:
        "Yes, financing is available for a wide range of dental procedures including cosmetic, restorative, and orthodontic treatments. Speak with our team to confirm eligibility.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Finance with Us | Flexible Dental Financing | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Explore flexible financing options at Bana Dental Design. Learn about Alphaeon, Sunbit, CareCredit, and Proceed Finance to manage the cost of your dental procedures."
        />
        <meta
          name="keywords"
          content="Dental Financing, Finance with Us, Alphaeon, Sunbit, CareCredit, Proceed Finance, Bana Dental Design"
        />
        <meta
          property="og:title"
          content="Finance with Us | Flexible Dental Financing | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Explore flexible financing options at Bana Dental Design. Learn about Alphaeon, Sunbit, CareCredit, and Proceed Finance to manage the cost of your dental procedures."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/finance-with-us"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/finance-with-us.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/finance-with-us"
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
        className={`${commonStyles["service-page"]} ${styles["financeWithUsPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>
              Finance with Us
            </h1>
            <p className={commonStyles.servicePageIntro}>
              Flexible financing options to make your dental care affordable.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/finance-with-us.jpg"
            alt="Finance with Us at Bana Dental Design"
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
            Our Financing Options
          </h2>
          <p className={commonStyles.servicePageText}>
            At Bana Dental Design, we understand that dental procedures can be a
            significant investment. That's why we offer a variety of financing
            options to help you manage the cost of your treatments without
            compromising on quality care.
          </p>
        </section>

        {/* Financing Options Section */}
        <section
          className={`${commonStyles.servicePageSection} ${styles.financingOptionsSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Available Financing Partners
          </h2>
          <div className={styles.financingOptionsContainer}>
            {/* Alphaeon */}
            <div className={styles.financingOption}>
              <Image
                src="/images/alphaeon-logo.png"
                alt="Alphaeon Logo"
                width={150}
                height={80}
                className={styles.financingOption__logo}
              />
              <p>
                Alphaeon offers a range of financing solutions tailored to your
                dental needs. Enjoy flexible payment plans with competitive
                interest rates.
              </p>
              <MyButton
                href="https://www.alphaeon.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.financingOption__link}
              >
                Learn More
              </MyButton>
            </div>

            {/* Sunbit */}
            <div className={styles.financingOption}>
              <Image
                src="/images/sunbit-logo.png"
                alt="Sunbit Logo"
                width={150}
                height={80}
                className={styles.financingOption__logo}
              />
              <p>
                Sunbit provides fast and easy financing for your dental
                procedures. Apply in minutes and get instant approval.
              </p>
              <MyButton
                href="https://www.sunbit.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.financingOption__link}
              >
                Learn More
              </MyButton>
            </div>

            {/* CareCredit */}
            <div className={styles.financingOption}>
              <Image
                src="/images/carecredit-logo.png"
                alt="CareCredit Logo"
                width={150}
                height={80}
                className={styles.financingOption__logo}
              />
              <p>
                CareCredit is a dedicated healthcare credit card that covers
                dental treatments with flexible financing options.
              </p>
              <MyButton
                href="https://www.carecredit.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.financingOption__link}
              >
                Learn More
              </MyButton>
            </div>

            {/* Proceed Finance */}
            <div className={styles.financingOption}>
              <Image
                src="/images/proceed-finance-logo.png"
                alt="Proceed Finance Logo"
                width={150}
                height={80}
                className={styles.financingOption__logo}
              />
              <p>
                Proceed Finance offers personalized financing plans to ensure
                you receive the dental care you need without financial strain.
              </p>
              <MyButton
                href="https://www.proceedfinance.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.financingOption__link}
              >
                Learn More
              </MyButton>
            </div>
          </div>
        </section>

        {/* Related Services Banner */}
        <section className={styles.relatedServicesBanner}>
          <h2 className={styles.relatedServicesTitle}>
            Explore Our Other Dental Services
          </h2>
          <div className={styles.relatedServicesButtons}>
            <MyButton
              href="/dental-services/sedation-dentistry"
              className={styles.serviceButton}
            >
              Sedation Dentistry
            </MyButton>
            <MyButton
              href="/dental-services/emergency-dentistry"
              className={styles.serviceButton}
            >
              Emergency Dentistry
            </MyButton>
            {/* Add more related service buttons as needed */}
          </div>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Ready to make your dental care affordable?
          </p>
          <MyButton
            href="/contact-us"
            className={commonStyles.servicePageContactButton}
          >
            Schedule a Consultation Today
          </MyButton>
        </section>
      </div>
    </>
  );
};

export default FinanceWithUsPage;
