import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../../DentalServices.module.scss";

const SedationDentistryPage = () => {
  return (
    <>
      <Head>
        <title>
          Sedation Dentistry | Comfortable Dental Care | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Experience stress-free dental visits with Sedation Dentistry at Bana Dental Design. Learn about our sedation options and how we ensure your comfort."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/sedation-dentistry"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Sedation Dentistry | Comfortable Dental Care | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Experience stress-free dental visits with Sedation Dentistry at Bana Dental Design. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/sedation-dentistry.jpg"
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/sedation-dentistry"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sedation Dentistry | Comfortable Dental Care | Bana Dental Design"
        />
        <meta
          name="twitter:description"
          content="Relax during your dental treatment with our sedation options. Contact Bana Dental Design today!"
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/sedation-dentistry.jpg"
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
                  name: "What is Sedation Dentistry?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sedation Dentistry involves the use of medication to help patients relax during dental procedures. It is ideal for patients with dental anxiety or those undergoing lengthy treatments.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of sedation do you offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer various sedation options, including nitrous oxide (laughing gas), oral sedation, and IV sedation, depending on your needs and the complexity of the procedure.",
                  },
                },
                // Add more FAQs as needed
              ],
            }),
          }}
        />
      </Head>
      <div
        className={`${styles["service-page"]} ${styles["sedationDentistryPage"]}`}
      >
        {/* Header Section */}
        <section className={styles.headerSection}>
          <h1 className={styles.servicePageHeaderTitle}>Sedation Dentistry</h1>
          <p className={styles.servicePageIntro}>
            Comfortable and Stress-Free Dental Care for All Patients
          </p>
        </section>

        {/* Hero Image */}
        <section className={styles.servicePageHero}>
          <Image
            src="/images/sedation-dentistry.jpg"
            alt="Patient relaxing during dental treatment with sedation at Bana Dental Design"
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
            What is Sedation Dentistry?
          </h2>
          <p className={styles.servicePageText}>
            Sedation Dentistry involves the use of medication to help patients
            relax during dental procedures. It's an excellent option for
            individuals with dental anxiety, sensitive gag reflexes, difficulty
            getting numb, or those undergoing extensive treatments.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${styles.benefitsSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Benefits of Sedation Dentistry
          </h2>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitCard}>
              <h3>Reduced Anxiety</h3>
              <p>Feel calm and relaxed during your dental appointments.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Comfort During Procedures</h3>
              <p>
                Experience minimal discomfort, even during lengthy treatments.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Efficient Treatment</h3>
              <p>Allows for more work to be completed in fewer visits.</p>
            </div>
          </div>
        </section>

        {/* Types of Sedation Section */}
        <section
          className={`${styles.typesOfSedationSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Types of Sedation We Offer
          </h2>
          <div className={styles.sedationTypesContainer}>
            <div className={styles.sedationTypeCard}>
              <h3>Nitrous Oxide (Laughing Gas)</h3>
              <p>
                A mild sedative inhaled through a mask, helping you relax while
                remaining awake and responsive.
              </p>
            </div>
            <div className={styles.sedationTypeCard}>
              <h3>Oral Sedation</h3>
              <p>
                A prescribed pill taken before your appointment, inducing a
                deeper level of relaxation.
              </p>
            </div>
            <div className={styles.sedationTypeCard}>
              <h3>IV Sedation</h3>
              <p>
                Administered intravenously, providing a deeper sedation level
                for patients undergoing complex procedures.
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
            During your initial consultation, we'll discuss your medical
            history, concerns, and preferences to determine the most suitable
            sedation option. On the day of your procedure, we'll monitor you
            closely to ensure your safety and comfort throughout the treatment.
          </p>
        </section>

        {/* Risks Section */}
        <section
          className={`${styles.risksSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>Possible Risks</h2>
          <p className={styles.servicePageText}>
            While sedation dentistry is generally safe, potential risks may
            include allergic reactions, breathing difficulties, or adverse
            interactions with medications. Our team conducts thorough
            evaluations to minimize risks and ensure your safety.
          </p>
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
              <h3>Is sedation dentistry safe?</h3>
              <p>
                Yes, when administered by trained professionals, sedation
                dentistry is safe. We monitor patients closely to ensure their
                well-being.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Will I be unconscious during the procedure?</h3>
              <p>
                Most sedation options keep you awake but deeply relaxed. IV
                sedation may induce a sleep-like state, but you can still
                respond to stimuli.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long does the sedation last?</h3>
              <p>
                The duration depends on the type of sedation used. Effects may
                last from a few minutes after the procedure to several hours.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I drive myself home after sedation?</h3>
              <p>
                For nitrous oxide, you can typically drive yourself home. For
                oral or IV sedation, you'll need someone to accompany you.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is sedation dentistry covered by insurance?</h3>
              <p>
                Coverage varies by provider and plan. Our team can help you
                understand your benefits and explore financing options.
              </p>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </section>

        {/* Contact Banner */}
        <section className={styles.servicePageContactBanner}>
          <p className={styles.servicePageContactText}>
            Ready to experience comfortable dental care with Sedation Dentistry?
          </p>
          <Link href="/contact" className={styles.servicePageContactButton}>
            Schedule Your Consultation Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default SedationDentistryPage;
