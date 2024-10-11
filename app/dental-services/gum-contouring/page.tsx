import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../../DentalServices.module.scss";

const GumContouringPage = () => {
  return (
    <>
      <Head>
        <title>Gum Contouring | Enhance Your Smile | Bana Dental Design</title>
        <meta
          name="description"
          content="Achieve a balanced and beautiful smile with Gum Contouring at Bana Dental Design. Learn about our gum reshaping services, benefits, and FAQs."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/gum-contouring"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Gum Contouring | Enhance Your Smile | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Achieve a balanced and beautiful smile with Gum Contouring at Bana Dental Design. Book your consultation today!"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/gum-contouring.jpg"
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/gum-contouring"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gum Contouring | Enhance Your Smile | Bana Dental Design"
        />
        <meta
          name="twitter:description"
          content="Expert gum reshaping for a harmonious smile. Contact Bana Dental Design today!"
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/gum-contouring.jpg"
        />

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Gum Contouring?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Gum Contouring is a cosmetic dental procedure that reshapes the gum line to create a more balanced and symmetrical smile.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Gum Contouring painful?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The procedure is typically performed under local anesthesia, minimizing discomfort. Post-procedure soreness is usually mild and temporary.",
                  },
                },
                // Add more FAQs as needed
              ],
            }),
          }}
        />
      </Head>
      <div
        className={`${styles["service-page"]} ${styles["gumContouringPage"]}`}
      >
        {/* Header Section */}
        <section className={styles.headerSection}>
          <h1 className={styles.servicePageHeaderTitle}>Gum Contouring</h1>
          <p className={styles.servicePageIntro}>
            Achieve a Harmonious Smile with Expert Gum Reshaping
          </p>
        </section>

        {/* Hero Image */}
        <section className={styles.servicePageHero}>
          <Image
            src="/images/gum-contouring.jpg"
            alt="Patient after gum contouring treatment at Bana Dental Design"
            width={800}
            height={500}
            className={styles.servicePageHeroImage}
          />
        </section>

        {/* Details Section */}
        <section
          className={`${styles.servicePageDetails} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            What is Gum Contouring?
          </h2>
          <p className={styles.servicePageText}>
            Gum Contouring, also known as gum reshaping or tissue sculpting, is
            a cosmetic dental procedure that alters the shape of your gums. It's
            ideal for individuals with uneven gum lines, excessive gum tissue (a
            "gummy smile"), or gums that have receded and expose too much of the
            teeth.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${styles.benefitsSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Benefits of Gum Contouring
          </h2>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitCard}>
              <h3>Enhanced Aesthetics</h3>
              <p>Create a balanced gum line for a more attractive smile.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Improved Confidence</h3>
              <p>Feel more confident when smiling, speaking, and laughing.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Better Oral Health</h3>
              <p>
                Removing excess gum tissue can reduce the risk of gum disease.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className={`${styles.processSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>Our Process</h2>
          <p className={styles.servicePageText}>
            The Gum Contouring procedure typically involves the use of a soft
            tissue laser or scalpel to carefully remove and reshape excess gum
            tissue. The area is numbed with local anesthesia to ensure your
            comfort. The length of the procedure depends on the extent of
            reshaping needed.
          </p>
        </section>

        {/* Risks Section */}
        <section
          className={`${styles.risksSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>Possible Risks</h2>
          <p className={styles.servicePageText}>
            Risks are minimal but may include sensitivity, swelling, or
            infection. Our team provides detailed aftercare instructions to
            promote healing and minimize risks.
          </p>
        </section>
        {/* Internal Linking Banner */}
        <section className={styles.relatedServicesBanner}>
          <h2 className={styles.relatedServicesTitle}>
            Explore Our Cosmetic Dentistry Services
          </h2>
          <div className={styles.relatedServicesButtons}>
            <Link href="/dental-services/teeth-whitening">
              <button className={styles.serviceButton}>Teeth Whitening</button>
            </Link>
            <Link href="/dental-services/veneers">
              <button className={styles.serviceButton}>Dental Veneers</button>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section
          className={`${styles.faqSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <h3>Is Gum Contouring painful?</h3>
              <p>
                The procedure is typically performed under local anesthesia,
                minimizing discomfort. Any post-procedure soreness is usually
                mild and temporary.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long is the recovery time?</h3>
              <p>
                Recovery generally takes a few days to a week. During this time,
                you may need to follow a soft diet and maintain proper oral
                hygiene.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Am I a candidate for Gum Contouring?</h3>
              <p>
                Ideal candidates are individuals with uneven gum lines,
                excessive gum tissue, or receding gums. A consultation with our
                dental team will determine if it's right for you.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How much does Gum Contouring cost?</h3>
              <p>
                The cost varies based on the extent of treatment needed. We
                provide a detailed estimate after your initial consultation.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Will insurance cover Gum Contouring?</h3>
              <p>
                Insurance may cover the procedure if it's deemed medically
                necessary. Our team can help you understand your coverage and
                financing options.
              </p>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </section>

        {/* Contact Banner */}
        <section className={styles.servicePageContactBanner}>
          <p className={styles.servicePageContactText}>
            Ready to enhance your smile with Gum Contouring?
          </p>
          <Link href="/contact" className={styles.servicePageContactButton}>
            Schedule Your Consultation Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default GumContouringPage;
