import React from "react";
import Head from "next/head";
import ScrollFadeIn from "@/app/components/ScrollFadeIn/ScrollFadeIn"; 
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";
import styles from "../../DentalServices.module.scss";
import FAQs from '../../components/FAQs/FAQs';


const TeethCleaning: React.FC = () => {
  const faqs = [
    {
      question: 'How often should I get my teeth cleaned?',
      answer: 'It is recommended to have your teeth professionally cleaned every six months.',
    },
    {
      question: 'Is teeth cleaning painful?',
      answer: 'Teeth cleaning is generally not painful. You may experience minor discomfort if you have sensitive teeth or gums.',
    },
    
  ];
  
  return (
    <>
      <Head>
        <title>Teeth Cleaning | Your Dental Office</title>
        <meta
          name="description"
          content="Learn why regular teeth cleaning is essential for your oral health. Our professional teeth cleaning services help prevent cavities, gum disease, and maintain your smile."
        />
        <meta
          name="keywords"
          content="Teeth Cleaning, Dental Cleaning, Oral Health, Preventive Dentistry"
        />
        <meta name="author" content="Your Dental Office" />
        <meta
          property="og:title"
          content="Teeth Cleaning | Your Dental Office"
        />
        <meta
          property="og:description"
          content="Learn why regular teeth cleaning is essential for your oral health. Our professional teeth cleaning services help prevent cavities, gum disease, and maintain your smile."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/services/teeth-cleaning"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/teeth-cleaning-1.jpg"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/services/teeth-cleaning"
        />
      </Head>
      
      <div className={styles.teethCleaningPage}>
        {/* Header Section */}
        <section className={styles.headerSection}>
          <ScrollFadeIn>
            <h1 className={styles.teethCleaningTitle}>
              Why Teeth Cleaning is Essential for Your Oral Health
            </h1>
            <p className={styles.teethCleaningIntro}>
              Regular teeth cleaning is a fundamental part of maintaining your oral health.
              It helps prevent cavities, gum disease, and other oral issues, ensuring your
              smile stays bright and healthy.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <ScrollFadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.teethCleaningSectionTitle}>
                Benefits of Regular Teeth Cleaning
              </h2>
            </div>
            <div className={styles.benefitsContainer}>
              <div className={styles.benefitCard}>
                <img src="/icons/prevent-cavities.png" alt="Prevent Cavities" />
                <h3>Prevents Cavities</h3>
                <p>Professional cleanings remove plaque that can lead to tooth decay.</p>
              </div>
              <div className={styles.benefitCard}>
                <img src="/icons/gum-health.png" alt="Gum Health" />
                <h3>Maintains Gum Health</h3>
                <p>Regular cleanings help reduce the risk of gum disease and infection.</p>
              </div>
              <div className={styles.benefitCard}>
                <img src="/icons/fresh-breath.png" alt="Fresh Breath" />
                <h3>Freshens Breath</h3>
                <p>Cleanings help eliminate bad breath caused by plaque buildup.</p>
              </div>
            </div>
          </ScrollFadeIn>
        </section>
        <FAQs faqs={faqs} />

        <ConsultationBanner />
      </div>
    </>
  );
};

export default TeethCleaning;
