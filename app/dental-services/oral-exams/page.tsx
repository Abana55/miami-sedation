import React from "react";
import Head from "next/head";
import styles from "../../DentalServices.module.scss";
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";
import ScrollFadeIn from "@/app/components/ScrollFadeIn/ScrollFadeIn"; // Include scroll effect component

const OralExams: React.FC = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Oral Exams | Your Dental Office</title>
        <meta
          name="description"
          content="Regular oral exams are essential for maintaining your oral health. Learn about the importance of dental exams, what happens during an oral exam, and how they can prevent serious dental issues."
        />
        <meta
          name="keywords"
          content="Oral Exams, Dental Exams, Oral Health, Preventive Dentistry, early detection, gum disease, cavity prevention"
        />
        <meta name="author" content="Your Dental Office" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Oral Exams | Your Dental Office" />
        <meta
          property="og:description"
          content="Regular oral exams are essential for maintaining your oral health. Discover what to expect during an oral exam and how they can help prevent serious dental issues."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/services/oral-exams"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/oral-exam-1.jpg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Your Dental Office" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oral Exams | Your Dental Office" />
        <meta
          name="twitter:description"
          content="Learn why regular oral exams are crucial for your oral health. Understand the process, benefits, and what to expect at Your Dental Office."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/images/oral-exam-1.jpg"
        />
        <meta name="twitter:site" content="@YourDentalOffice" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://yourdomain.com/services/oral-exams"
        />

        {/* Structured Data for Rich Snippets */}
        <script type="application/ld+json">
          {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Oral Exams",
      "provider": {
        "@type": "Dentist",
        "name": "Your Dental Office",
        "image": "https://yourdomain.com/images/oral-exam-1.jpg",
        "description": "Regular oral exams help detect dental issues early, maintain oral health, and prevent gum disease and cavities. Learn about the process and benefits.",
        "logo": "https://yourdomain.com/logo.png",
        "sameAs": [
          "https://www.facebook.com/YourDentalOffice",
          "https://twitter.com/YourDentalOffice",
          "https://www.instagram.com/YourDentalOffice"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main St",
          "addressLocality": "City",
          "addressRegion": "State",
          "postalCode": "12345",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-123-456-7890",
          "contactType": "Customer Service"
        }
      },
      "areaServed": {
        "@type": "Place",
        "name": "City, State"
      },
      "url": "https://yourdomain.com/services/oral-exams",
      "image": "https://yourdomain.com/images/oral-exam-1.jpg",
      "description": "Learn about oral exams, the process, and how regular exams help prevent serious dental issues like cavities and gum disease."
    }`}
        </script>

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#00447C" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <div className={styles.oralExamsPage}>
        {/* Header Section */}
        <section className={styles.headerSection}>
          <h1 className={styles.oralExamsTitle}>
            The Importance of Regular Oral Exams
          </h1>
          <p className={styles.oralExamsIntro}>
            Oral exams are a key part of preventive dental care. Early detection
            of dental issues like cavities, gum disease, or oral cancer can save
            you time, money, and discomfort in the long run.
          </p>
        </section>

        {/* Detailed Benefits Section */}
        <ScrollFadeIn>
          <section className={styles.oralExamsSection}>
            <h2 className={styles.oralExamsSectionTitle}>
              Why Are Oral Exams So Important?
            </h2>
            <p className={styles.oralExamsText}>
              Oral exams help ensure that your teeth, gums, and overall oral
              health are well-maintained. During these exams, your dentist can
              detect potential problems before they worsen, leading to fewer
              complications and more straightforward treatments.
            </p>
            <p className={styles.oralExamsText}>
              By scheduling regular oral exams, you’ll gain the following
              benefits:
            </p>
            <ul className={styles.oralExamsList}>
              <li className={styles.oralExamsListItem}>
                Early detection of cavities, gum disease, and other dental
                problems.
              </li>
              <li className={styles.oralExamsListItem}>
                Identification of oral cancer symptoms for timely treatment.
              </li>
              <li className={styles.oralExamsListItem}>
                Removal of plaque and tartar that you can’t reach with daily
                brushing.
              </li>
              <li className={styles.oralExamsListItem}>
                Personalized advice on improving your oral hygiene routine.
              </li>
            </ul>
          </section>
        </ScrollFadeIn>

        {/* What Happens During an Oral Exam */}
        <ScrollFadeIn>
          <section className={styles.oralExamsSection}>
            <h2 className={styles.oralExamsSectionTitle}>
              What Happens During an Oral Exam?
            </h2>
            <div className={styles.oralExamsImageContainer}>
              <img
                src="/images/oral-exam-1.jpg"
                alt="Oral Exam"
                className={styles.oralExamsImage}
              />
            </div>
            <p className={styles.oralExamsText}>
              During an oral exam, our dentists thoroughly examine your teeth,
              gums, and mouth. The process typically includes:
            </p>
            <ul className={styles.oralExamsList}>
              <li className={styles.oralExamsListItem}>
                Visual inspection of your teeth and gums to detect any signs of
                decay, inflammation, or disease.
              </li>
              <li className={styles.oralExamsListItem}>
                X-rays to check for hidden problems such as cavities between
                teeth or below the gum line.
              </li>
              <li className={styles.oralExamsListItem}>
                Assessment of your bite and jaw to detect any misalignments or
                issues with the temporomandibular joint (TMJ).
              </li>
              <li className={styles.oralExamsListItem}>
                A discussion of any concerns or symptoms you may be
                experiencing.
              </li>
            </ul>
          </section>
        </ScrollFadeIn>

        {/* Frequency of Exams */}
        <ScrollFadeIn>
          <section className={styles.oralExamsSection}>
            <h2 className={styles.oralExamsSectionTitle}>
              How Often Should You Have an Oral Exam?
            </h2>
            <p className={styles.oralExamsText}>
              We recommend scheduling oral exams at least twice a year. However,
              patients with specific dental conditions may need more frequent
              check-ups to ensure their oral health is maintained.
            </p>
            <p className={styles.oralExamsConclusion}>
              Don’t wait until you have a problem—schedule regular oral exams to
              ensure the long-term health of your teeth and gums.
            </p>
          </section>
        </ScrollFadeIn>

        {/* Why Choose Us */}
        <ScrollFadeIn>
          <section className={styles.oralExamsSection}>
            <h2 className={styles.oralExamsSectionTitle}>
              Why Choose Our Dental Practice for Your Oral Exam?
            </h2>
            <p className={styles.oralExamsText}>
              Our dental team provides personalized, professional care during
              every visit. We use the latest technology to ensure early
              detection of dental issues, and our friendly team is always
              available to answer any questions or concerns you may have.
            </p>
            <ul className={styles.oralExamsList}>
              <li className={styles.oralExamsListItem}>
                Experienced and compassionate dental professionals.
              </li>
              <li className={styles.oralExamsListItem}>
                State-of-the-art technology for precise diagnostics.
              </li>
              <li className={styles.oralExamsListItem}>
                A commitment to your comfort and convenience.
              </li>
            </ul>
          </section>
        </ScrollFadeIn>

        {/* Consultation Banner */}
        <ConsultationBanner />
      </div>
    </>
  );
};

export default OralExams;
