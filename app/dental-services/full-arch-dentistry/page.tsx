import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../../DentalServices.module.scss";

const FullArchDentistryPage = () => {
  return (
    <>
      <Head>
        <title>
          Full Arch Dentistry | Restore Your Smile | Bana Dental Design
        </title>
        <meta
          name="description"
          content="Transform your smile with Full Arch Dentistry at Bana Dental Design. Learn about our comprehensive solutions for full mouth restoration."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://yourwebsite.com/dental-services/full-arch-dentistry"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Full Arch Dentistry | Restore Your Smile | Bana Dental Design"
        />
        <meta
          property="og:description"
          content="Transform your smile with Full Arch Dentistry at Bana Dental Design. Book your consultation today!"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/full-arch-dentistry.jpg"
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/dental-services/full-arch-dentistry"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Full Arch Dentistry | Restore Your Smile | Bana Dental Design"
        />
        <meta
          name="twitter:description"
          content="Expert full arch dental solutions for a complete smile makeover. Contact Bana Dental Design today!"
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/full-arch-dentistry.jpg"
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
                  name: "What is Full Arch Dentistry?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Full Arch Dentistry involves replacing all the teeth in the upper or lower jaw with a full arch prosthesis supported by dental implants.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is a candidate for Full Arch Dentistry?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Individuals missing most or all of their teeth or those with failing teeth due to decay or periodontal disease may be candidates.",
                  },
                },
                // Add more FAQs as needed
              ],
            }),
          }}
        />
      </Head>
      <div
        className={`${styles["service-page"]} ${styles["fullArchDentistryPage"]}`}
      >
        {/* Header Section */}
        <section className={styles.headerSection}>
          <h1 className={styles.servicePageHeaderTitle}>Full Arch Dentistry</h1>
          <p className={styles.servicePageIntro}>
            Comprehensive Solutions for Complete Smile Restoration
          </p>
        </section>

        {/* Hero Image */}
        <section className={styles.servicePageHero}>
          <Image
            src="/images/full-arch-dentistry.jpg"
            alt="Patient smiling after full arch dental restoration at Bana Dental Design"
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
            What is Full Arch Dentistry?
          </h2>
          <p className={styles.servicePageText}>
            Full Arch Dentistry is an advanced dental procedure that replaces
            all missing or failing teeth in the upper or lower jaw with a full
            arch prosthesis supported by dental implants. This approach provides
            a stable, long-lasting solution that looks, feels, and functions
            like natural teeth.
          </p>
        </section>

        {/* Benefits Section */}
        <section
          className={`${styles.benefitsSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Benefits of Full Arch Dentistry
          </h2>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitCard}>
              <h3>Restored Function</h3>
              <p>
                Enjoy the ability to eat, speak, and smile confidently with
                fully restored dental function.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Natural Appearance</h3>
              <p>
                The prosthesis is custom-made to match the appearance of natural
                teeth, enhancing your smile.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Long-Lasting Solution</h3>
              <p>
                With proper care, implant-supported restorations can last many
                years, offering a durable solution.
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
            The Full Arch Dentistry process begins with a comprehensive
            evaluation and consultation. We create a personalized treatment plan
            that typically involves the placement of dental implants, followed
            by the attachment of a custom full arch prosthesis. Throughout the
            process, we prioritize your comfort and keep you informed at every
            step.
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

        {/* FAQs */}
        <section
          className={`${styles.faqSection} ${styles.servicePageSection}`}
        >
          <h2 className={styles.servicePageSubheader}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <h3>What is Full Arch Dentistry?</h3>
              <p>
                Full Arch Dentistry involves replacing all the teeth in the
                upper or lower jaw with a full arch prosthesis supported by
                dental implants.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long does the procedure take?</h3>
              <p>
                The entire process can take several months, including healing
                time after implant placement. We provide a detailed timeline
                during your consultation.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is the procedure painful?</h3>
              <p>
                The surgery is performed under anesthesia to ensure your
                comfort. Post-operative discomfort is manageable with prescribed
                medications.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How do I care for my new teeth?</h3>
              <p>
                Maintain good oral hygiene by brushing and flossing regularly,
                and visit us for routine check-ups and cleanings.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Will insurance cover Full Arch Dentistry?</h3>
              <p>
                Coverage varies by provider and plan. Our team can help you
                understand your benefits and explore financing options.
              </p>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </section>

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
        <section className={styles.servicePageContactBanner}>
          <p className={styles.servicePageContactText}>
            Ready to restore your smile with Full Arch Dentistry?
          </p>
          <Link href="/contact" className={styles.servicePageContactButton}>
            Schedule Your Consultation Today
          </Link>
        </section>
      </div>
    </>
  );
};

export default FullArchDentistryPage;
