import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import commonStyles from "../../DentalServices.module.scss"; // Common styles
import styles from "./FullArchDentistry.module.scss"; // Page-specific styles
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";
import FAQs from "../../components/FAQs/FAQs";

const FullArchDentistryPage: React.FC = () => {
  const faqs = [
    {
      question: "What is full arch dentistry?",
      answer:
        "Full arch dentistry refers to the restoration or replacement of an entire arch of teeth, either the upper or lower set, often using dental implants and prosthetics like bridges or dentures.",
    },
    {
      question: "Who is a good candidate for full arch restoration?",
      answer:
        "Individuals missing most or all of their teeth in an arch, or those with severely damaged teeth, may be good candidates for full arch restoration. A consultation is necessary to determine suitability.",
    },
    {
      question: "How long does the full arch treatment take?",
      answer:
        "The duration varies depending on the specific treatment plan, but it typically involves multiple appointments over several months.",
    },
    {
      question: "Is the procedure painful?",
      answer:
        "The procedure is performed under local anesthesia or sedation, so you should not feel pain during the treatment. Post-operative discomfort can be managed with medication.",
    },
    {
      question: "How do I care for my new teeth after full arch restoration?",
      answer:
        "Maintain good oral hygiene by brushing and flossing regularly, follow your dentist’s aftercare instructions, and attend regular dental check-ups.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Head>
        <title>
          Full Arch Dentistry | Complete Smile Restoration | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Restore your entire smile with full arch dentistry at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta
          name="keywords"
          content="Full Arch Dentistry, Smile Restoration, Bana Dental Design, Dental Implants, Dental Services"
        />
        <meta
          property="og:title"
          content="Full Arch Dentistry | Complete Smile Restoration | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Restore your entire smile with full arch dentistry at Bana Dental Design. Learn about the benefits, process, and FAQs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/full-arch-dentistry"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/full-arch-dentistry.jpg"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/full-arch-dentistry"
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
        className={`${commonStyles["service-page"]} ${styles["fullArchDentistryPage"]}`}
      >
        {/* Header Section */}
        <section className={commonStyles.headerSection}>
          <ScrollFadeIn>
            <h1 className={commonStyles.servicePageHeaderTitle}>
              Full Arch Dentistry
            </h1>
            <p className={commonStyles.servicePageIntro}>
              Restore your entire smile with our comprehensive full arch
              dentistry solutions.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Hero Image */}
        <section className={commonStyles.servicePageHero}>
          <Image
            src="/images/full-arch-dentistry.jpg"
            alt="Full Arch Dentistry at Bana Dental Design"
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
            What is Full Arch Dentistry?
          </h2>
          <p className={commonStyles.servicePageText}>
            Full arch dentistry involves the restoration or replacement of an
            entire arch of teeth, either the upper or lower set. This
            comprehensive solution is ideal for individuals who have lost most
            or all of their teeth or have severely damaged teeth that need
            replacement. Utilizing dental implants and prosthetics, we can
            restore function and aesthetics to your smile.
          </p>
        </section>

        <section
          className={`${commonStyles.benefitsSection} ${commonStyles.servicePageSection}`}
        >
          <ScrollFadeIn>
            <h2 className={commonStyles.servicePageSubheader}>
              Benefits of Full Arch Restoration
            </h2>
            <div className={commonStyles.benefitsContainer}>
              <div className={commonStyles.benefitCard}>
                <h3>Improved Functionality</h3>
                <p>
                  Regain the ability to eat and speak comfortably with a full
                  set of teeth.
                </p>
              </div>
              <div className={commonStyles.benefitCard}>
                <h3>Enhanced Aesthetics</h3>
                <p>
                  Achieve a natural-looking smile that boosts your confidence.
                </p>
              </div>
              <div className={commonStyles.benefitCard}>
                <h3>Bone Preservation</h3>
                <p>
                  Dental implants stimulate the jawbone, preventing bone loss.
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </section>

        {/* Process Section */}
        <section
          className={`${commonStyles.processSection} ${commonStyles.servicePageSection}`}
        >
          <h2 className={commonStyles.servicePageSubheader}>
            Our Full Arch Treatment Process
          </h2>
          <p className={commonStyles.servicePageText}>
            The process begins with a comprehensive evaluation to determine the
            best treatment plan for your needs. We may use dental implants to
            anchor a fixed bridge or denture. The procedure involves surgical
            placement of implants, a healing period to allow for
            osseointegration, and then the attachment of your custom prosthetic
            teeth.
          </p>
        </section>

        {/* Risks Section */}
        <section
          className={`${styles.risksSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>Possible Risks</h2>
          <p className={styles.servicePageText}>
            While Full Arch Dentistry has a high success rate, potential risks
            include implant failure, infection, or complications from surgery.
            Our experienced team takes all necessary precautions to minimize
            risks and will discuss any concerns with you before treatment.
          </p>
        </section>
        <ScrollFadeIn>
          <FAQs faqs={faqs} />
        </ScrollFadeIn>

        {/* Related Services Banner */}
        <section className={styles.relatedServicesBanner}>
          <h2 className={styles.relatedServicesTitle}>
            Explore Our Restorative Dentistry Services
          </h2>
          <div className={styles.relatedServicesButtons}>
            <Link href="/dental-services/dental-implants">
              <button className={styles.serviceButton}>Dental Implants</button>
            </Link>
            <Link href="/dental-services/dentures">
              <button className={styles.serviceButton}>Dentures</button>
            </Link>
          </div>
        </section>

        {/* Contact Banner */}
        <section className={commonStyles.servicePageContactBanner}>
          <p className={commonStyles.servicePageContactText}>
            Ready to restore your smile with full arch dentistry?
          </p>
          <Link href="/contact" className={commonStyles.servicePageContactButton}>
            Schedule a Consultation Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default FullArchDentistryPage;
