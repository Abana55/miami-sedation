import React from "react";
import Head from "next/head";
import styles from "../../DentalServices.module.scss";
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";

const OralExams: React.FC = () => {
  return (
    <>
      <Head>
        <title>Oral Exams | Your Dental Office</title>
        <meta
          name="description"
          content="Regular oral exams are crucial for maintaining your oral health. Learn what to expect during an oral exam and why it's important to schedule them regularly."
        />
        <meta
          name="keywords"
          content="Oral Exams, Dental Exams, Oral Health, Preventive Dentistry"
        />
        <meta name="author" content="Your Dental Office" />
        <meta property="og:title" content="Oral Exams | Your Dental Office" />
        <meta
          property="og:description"
          content="Regular oral exams are crucial for maintaining your oral health. Learn what to expect during an oral exam and why it's important to schedule them regularly."
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
        <link
          rel="canonical"
          href="https://yourdomain.com/services/oral-exams"
        />
      </Head>
      <div className={styles.oralExamsPage}>
        <h1 className={styles.oralExamsTitle}>
          The Importance of Regular Oral Exams
        </h1>
        <div className={styles.oralExamsContent}>
          <p className={styles.oralExamsIntro}>
            Regular oral exams are a crucial part of maintaining not only your
            oral health but your overall well-being. Early detection of dental
            issues can prevent more serious problems down the road.
          </p>

          <h2 className={styles.oralExamsSectionTitle}>
            What Happens During an Oral Exam?
          </h2>
          <div className={styles.oralExamsImagePlaceholder}>
            <img
              src="/images/oral-exam-1.jpg"
              alt="Oral Exam"
              className={styles.oralExamsImage}
            />
          </div>
          <p className={styles.oralExamsText}>
            During an oral exam, our dentists carefully check your teeth, gums,
            and other parts of your mouth. We look for signs of cavities, gum
            disease, and other potential issues. This thorough examination helps
            us catch problems early, when they are easier and less costly to
            treat.
          </p>

          <h2 className={styles.oralExamsSectionTitle}>
            Why Are Oral Exams Important?
          </h2>
          <p className={styles.oralExamsText}>
            Oral exams are essential for preventing serious dental issues. They
            allow us to monitor your oral health and make recommendations for
            treatments or lifestyle changes that can improve your dental
            hygiene.
          </p>

          <div className={styles.oralExamsImagePlaceholder}>
            <img
              src="/images/oral-exam-2.jpg"
              alt="Dentist Examining Patient"
              className={styles.oralExamsImage}
            />
          </div>
          <h2 className={styles.oralExamsSectionTitle}>
            How Often Should You Have an Oral Exam?
          </h2>
          <p className={styles.oralExamsText}>
            It’s recommended that you have an oral exam at least once a year.
            However, depending on your individual needs, our dentists may
            recommend more frequent visits to ensure your oral health is
            maintained.
          </p>
          <p className={styles.oralExamsConclusion}>
            Regular oral exams are a proactive step in maintaining your health.
            Don’t wait for a problem to arise—schedule your oral exam with us
            today.
          </p>
        </div>
        <ConsultationBanner />
      </div>
    </>
  );
};

export default OralExams;
