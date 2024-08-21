import React from "react";
import styles from "../../DentalServices.module.scss";
import Head from 'next/head';
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";


const Xrays: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dental X-rays | Your Dental Office</title>
        <meta name="description" content="Dental X-rays are essential for diagnosing and treating dental issues. Learn about the importance of X-rays and what to expect during your visit." />
        <meta name="keywords" content="Dental X-rays, Diagnostic Dentistry, Oral Health, Preventive Dentistry" />
        <meta name="author" content="Your Dental Office" />
        <meta property="og:title" content="Dental X-rays | Your Dental Office" />
        <meta property="og:description" content="Dental X-rays are essential for diagnosing and treating dental issues. Learn about the importance of X-rays and what to expect during your visit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services/x-rays" />
        <meta property="og:image" content="https://yourdomain.com/images/xrays-1.jpg" />
        <link rel="canonical" href="https://yourdomain.com/services/x-rays" />
      </Head>
      <div className={styles.xraysPage}>
        <h1 className={styles.xraysTitle}>The Role of X-rays in Dental Care</h1>
        <div className={styles.xraysContent}>
        <p className={styles.xraysIntro}>
          Dental X-rays are a critical tool in diagnosing and treating dental
          issues. They provide a clear picture of the structure of your teeth
          and gums, allowing our dentists to detect problems that are not
          visible during a regular dental exam.
        </p>

        <h2 className={styles.xraysSectionTitle}>Why Are X-rays Important?</h2>
        <div className={styles.xraysImagePlaceholder}>
          <img
            src="/images/xrays-1.jpg"
            alt="Dental X-rays"
            className={styles.xraysImage}
          />
        </div>
        <p className={styles.xraysText}>
          X-rays help us see beyond the surface of your teeth and gums. They
          allow us to detect cavities between teeth, monitor the health of your
          tooth roots, and assess the condition of your jawbone. X-rays are
          essential in diagnosing issues early, which can prevent more serious
          dental problems down the road.
        </p>

        <h2 className={styles.xraysSectionTitle}>
          What to Expect During an X-ray?
        </h2>
        <p className={styles.xraysText}>
          The process of taking dental X-rays is quick and painless. Our team
          will position a small X-ray sensor in your mouth, and within seconds,
          we’ll have detailed images of your teeth and jaws. These images help
          us provide you with the most accurate diagnosis and treatment plan.
        </p>
        <div className={styles.xraysImagePlaceholder}>
          <img
            src="/images/xrays-2.jpg"
            alt="Patient Receiving X-ray"
            className={styles.xraysImage}
          />
        </div>

        <h2 className={styles.xraysSectionTitle}>Are Dental X-rays Safe?</h2>
        <p className={styles.xraysText}>
          Yes, dental X-rays are safe. We use modern digital X-ray technology,
          which minimizes your exposure to radiation. Our equipment is regularly
          inspected and maintained to ensure that it is operating at the highest
          standards of safety.
        </p>

        <p className={styles.xraysConclusion}>
          Dental X-rays are an invaluable part of your dental care. They allow
          us to see the full picture of your oral health, ensuring you receive
          the best possible care. Contact us today to learn more about our X-ray
          services or to schedule your next appointment.
        </p>
      </div>
      <ConsultationBanner />
    </div>
    
    </>
  );
};

export default Xrays;
