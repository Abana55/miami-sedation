import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../../DentalServices.module.scss"; 
import styles from "./SedationDentistry.module.scss"; 
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn"; 
import FAQs from "../../components/FAQs/FAQs"; 

const SedationDentistryPage: React.FC = () => {
  // FAQs data
  const faqs = [
    {
      question: "What is sedation dentistry?",
      answer:
        "Sedation dentistry involves the use of medication to help patients relax during dental procedures. It is especially beneficial for those with dental anxiety or fear.",
    },
    {
      question: "What types of sedation are available?",
      answer:
        "There are several levels of sedation including minimal sedation (anxiolysis), moderate sedation (conscious sedation), deep sedation, and general anesthesia. Your dentist will recommend the best option based on your needs.",
    },
    {
      question: "Is sedation dentistry safe?",
      answer:
        "Yes, sedation dentistry is safe when administered by a trained and experienced dental professional. All necessary precautions are taken to ensure patient safety.",
    },
    {
      question: "Will I be unconscious during the procedure?",
      answer:
        "Depending on the level of sedation, you may remain fully conscious, in a light sleep, or completely unconscious. Your level of awareness will be determined based on your specific needs and the complexity of the procedure.",
    },
    {
      question: "How should I prepare for sedation dentistry?",
      answer:
        "Preparation instructions may vary based on the type of sedation. Generally, you may be advised to avoid eating or drinking for a certain period before the procedure. Your dentist will provide detailed instructions during your consultation.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Sedation Dentistry | Comfortable Dental Care | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Experience comfortable dental care with sedation dentistry at Bana Dental Design. Learn about the benefits, types of sedation, and FAQs."
        />
        <meta
          name="keywords"
          content="Sedation Dentistry, Comfortable Dental Care, Bana Dental Design, Dental Anxiety, Relaxation Dentistry"
        />
        <meta
          property="og:title"
          content="Sedation Dentistry | Comfortable Dental Care | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Experience comfortable dental care with sedation dentistry at Bana Dental Design. Learn about the benefits, types of sedation, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/sedation-dentistry"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/sedation-dentistry.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/sedation-dentistry"
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
        className={`${commonStyles["service-page"]} ${styles["sedationDentistryPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>
              Sedation Dentistry
            </h1>
            <p className={commonStyles.servicePageIntro}>
              Comfortable dental care for a stress-free experience.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/sedation-dentistry.jpg"
            alt="Sedation Dentistry at Bana Dental Design"
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
            What is Sedation Dentistry?
          </h2>
          <p className={commonStyles.servicePageText}>
            Sedation dentistry utilizes medication to help patients relax during
            dental procedures. It is an excellent option for those who
            experience dental anxiety, fear, or have difficulty sitting through
            lengthy treatments. Our sedation methods ensure that your dental
            experience is as comfortable and stress-free as possible.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Benefits of Sedation Dentistry
          </h2>
          <div className={commonStyles.benefitsContainer}>
            <div className={commonStyles.benefitCard}>
              <h3>Reduced Anxiety</h3>
              <p>
                Alleviates fear and anxiety, making dental visits more pleasant.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Increased Comfort</h3>
              <p>
                Minimizes discomfort during procedures, allowing for a more
                relaxed experience.
              </p>
            </div>
            <div className={commonStyles.benefitCard}>
              <h3>Efficient Treatments</h3>
              <p>
                Facilitates longer and more comprehensive treatments in a single
                visit.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Our Sedation Dentistry Process
          </h2>
          <p className={commonStyles.servicePageText}>
            Our sedation dentistry process begins with a thorough consultation
            to assess your needs and determine the most appropriate sedation
            method. We offer various levels of sedation, including minimal,
            moderate, deep sedation, and general anesthesia, tailored to your
            comfort and the complexity of the procedure. Throughout the process,
            our experienced team ensures your safety and well-being.
          </p>
        </section>

        {/* Related Services Banner */}
        <section className={styles.relatedServicesBanner}>
          <h2 className={styles.relatedServicesTitle}>
            Explore Our Other Dental Services
          </h2>
          <div className={styles.relatedServicesButtons}>
            <Link href="/dental-services/veneers">
              <button className={styles.serviceButton}>Veneers</button>
            </Link>
            <Link href="/dental-services/root-canal-treatment">
              <button className={styles.serviceButton}>
                Root Canal Treatment
              </button>
            </Link>
            {/* Add more related service buttons as needed */}
          </div>
        </section>

        {/* FAQs Section */}
        <FAQs faqs={faqs} />

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Ready to experience comfortable dental care?
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

export default SedationDentistryPage;
