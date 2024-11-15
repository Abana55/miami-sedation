import { NextPage } from "next";
import Head from "next/head";
import ConsultationBanner from "../components/ConsultationBanner/ConsultationBanner";
import TeamMember from "../components/TeamMember/TeamMember";
import styles from "./AboutUs.module.scss";
import React from "react";

const AboutPage: NextPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          About Us | Bana Dental Design - Miami's Premier Dental Team
        </title>
        <meta
          name="description"
          content="Meet the experienced and passionate team at Bana Dental Design. We are dedicated to providing exceptional dental care in Miami with a personal touch."
        />
        <meta
          name="keywords"
          content="Bana Dental Design, About Us, Dental Team, Miami Dentist, Dental Care, Dr. Ramon Bana, Dr. Andrew Brattain, Cosmetic Dentistry, Oral Health"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us | Bana Dental Design" />
        <meta
          property="og:description"
          content="Discover the dedicated team at Bana Dental Design committed to your oral health and a brighter smile."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.banadental.com/about-us" />
        <meta
          property="og:image"
          content="https://www.banadental.com/images/og-image.jpg" // Replace with an actual image URL
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Bana Dental Design" />
        <meta
          name="twitter:description"
          content="Meet our experienced dental team in Miami dedicated to providing exceptional dental care."
        />
        <meta
          name="twitter:image"
          content="https://www.banadental.com/images/og-image.jpg" // Replace with an actual image URL
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.banadental.com/about-us" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Bana Dental Design",
              url: "https://www.banadental.com/",
              logo: "https://www.banadental.com/images/logo.png",
              image: "https://www.banadental.com/images/clinic.jpg",
              description:
                "Bana Dental Design offers exceptional dental care services in Miami. Meet our experienced team dedicated to your oral health.",
              telephone: "+1-305-555-5555",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Miami",
                addressRegion: "FL",
                postalCode: "33101",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "25.7617",
                longitude: "-80.1918",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/banadentaldesign",
                "https://www.twitter.com/banadentaldesign",
                "https://www.instagram.com/banadentaldesign",
                // Add other social profiles
              ],
              founder: [
                {
                  "@type": "Person",
                  name: "Dr. Ramon Bana",
                  jobTitle: "Doctor of Dental Surgery",
                  image: "https://www.banadental.com/images/aboutUs/DrBana.jpg",
                },
                {
                  "@type": "Person",
                  name: "Dr. Andrew Brattain",
                  jobTitle: "Doctor of Dental Medicine",
                  image:
                    "https://www.banadental.com/images/aboutUs/DrBrittain.jpg",
                },
              ],
            }),
          }}
        />
      </Head>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Get to Know Us</h1>
          <p className={styles.text}>
            Our dental team is unlike any you’ve ever met in Miami. We value
            excellence in patient care, and it shows. We love to laugh and have
            a good time, but know when it’s time to get down to business. Our
            team is overflowing with passion and commitment. We hope you get to
            know us a little bit better here, and we can’t wait to get to know
            you!
          </p>
        </div>
      </header>

      <section>
        <h2 className={styles.subtitle}>Our Team</h2>

        <div className={styles.doctorsRow}>
          <TeamMember
            imageSrc="/images/aboutUs/DrBana.jpg"
            altText="Dr. Ramon Bana"
            name="Dr. Ramon Bana"
            position="Doctor of Dental Surgery"
            bio={[
              "Dr. Ramon Bana was born in La Habana, Cuba and came to Miami as a young boy. He graduated from Hialeah High School (Class of 1981) and went on to study at the number one dental school at the time, Marquette University in Milwaukee, Wisconsin. He graduated as a Doctor of Dental Surgery in 1991. Over the last 33 years, he has taken countless continuing education courses including implant and full arch dentistry courses, orthodontic courses, digital smile design courses, and even therapeutic and cosmetic Botox courses to keep up with the ever-growing technology in the field of dentistry.",
              "Bana’s patients describe him as down-to-earth, professional, and full of heart. Patient comfort is his top priority, and patients say they feel like extended family. He always strives to leave patients feeling better than when they arrived. He is dedicated to his practice, patients, and team—and it shows. Dr. Bana's passion for dentistry is evident through his work as his goal is always to provide only top-quality dentistry for his patients.",
              "Dr. Bana has continued his education for the past 33 years, ensuring he is bringing the best of the best to his patients. He promises excellence and does the work to make sure he delivers on that promise, and patients always leave his care healthier, happier, and with brighter smiles.",
            ]}
            isDoctor={true}
            className={styles.doctorProfile}
          />

          <TeamMember
            imageSrc="/images/aboutUs/DrBrittain.jpg"
            altText="Dr. Andrew Brattain"
            name="Dr. Andrew Brattain"
            position="Doctor of Dental Medicine"
            bio={[
              "Dr. Andrew Brattain was born and raised in Miami, FL and graduated from Christopher Columbus High School (Class of 2008). He graduated from the University of Florida in 2012, where he received his Bachelor of Science in Nutritional Sciences. He then moved to Boston and graduated from the Boston University School of Dental Medicine in 2016 with summa cum laude honors.",
              "Dr. Brattain and his wife Danielle began their professional careers in Tampa, FL. While in Tampa, they welcomed their first-born baby girl Olivia. This past year, they decided to finally move back home to Miami and are now expecting the birth of their baby boy.",
              "Dr. Brattain is very excited to join Dr. Bana and the amazing team at Miami Sedation and Cosmetic Dentistry. He believes first and foremost in the importance of building a strong relationship with each of his patients. This creates a foundation that allows for personalized treatment to achieve the best patient experience and oral health possible. Through various forms of education and experience, Dr. Brattain constantly stays up to date with the latest advancements in dental treatment and looks forward to utilizing these with all his patients.",
            ]}
            isDoctor={true}
            className={styles.doctorProfile}
          />
        </div>

        <div className={styles.staffGrid}>
          <TeamMember
            imageSrc="/images/aboutUs/Judy.jpg"
            altText="Judy Martinez"
            name="Judy Martinez"
            position="Dental Hygienist"
            bio={[
              "Judy has been a dedicated dental hygienist for over 15 years. She is passionate about preventive care and educating patients on maintaining optimal oral health. Her friendly demeanor and gentle approach make patients feel at ease during their visits.",
            ]}
          />
          <TeamMember
            imageSrc="/images/aboutUs/Sandra.jpg"
            altText="Sandra Lopez"
            name="Sandra Lopez"
            position="Dental Assistant"
            bio={[
              "Sandra brings over a decade of experience as a dental assistant. She works closely with our dentists to ensure procedures run smoothly and efficiently. Her commitment to patient comfort and care is evident in everything she does.",
            ]}
          />
          <TeamMember
            imageSrc="/images/aboutUs/Ara.jpg"
            altText="Araceli Gomez"
            name="Araceli Gomez"
            position="Dental Assistant"
            bio={[
              "Araceli's attention to detail and compassionate nature make her an invaluable member of our team. She assists in a variety of dental procedures and is dedicated to providing exceptional care to every patient.",
            ]}
          />
          <TeamMember
            imageSrc="/images/aboutUs/Jackie.jpg"
            altText="Jackie Nguyen"
            name="Jackie Nguyen"
            position="Dental Assistant"
            bio={[
              "Jackie is known for her cheerful attitude and professionalism. With a background in both general and cosmetic dentistry, she supports our dentists in delivering high-quality care tailored to each patient's needs.",
            ]}
          />
          <TeamMember
            imageSrc="/images/aboutUs/Lauren.jpg"
            altText="Lauren Bana"
            name="Lauren Bana"
            position="Social Media Manager"
            bio={[
              "Lauren is the creative force behind our online presence. With a background in digital marketing and a passion for storytelling, she connects with our patients through engaging content and community outreach.",
            ]}
          />
          <TeamMember
            imageSrc="/images/aboutUs/Lourdes.jpg"
            altText="Lourdes Bana"
            name="Lourdes Bana"
            position="Community Relations"
            bio={[
              "As the wife of Dr. Bana, Lourdes plays an integral role in our practice. Her commitment to patient care and community involvement helps us foster strong relationships and provide a welcoming environment for all.",
            ]}
          />
          <TeamMember
            imageSrc="/images/aboutUs/Yoan.jpg"
            altText="Yoan Perez"
            name="Yoan Perez"
            position="Treatment Coordinator"
            bio={[
              "Yoan ensures that every patient understands their treatment options and feels comfortable throughout their dental experience. His attention to detail and compassionate approach make him a valued member of our team.",
            ]}
          />
        </div>
      </section>

      <ConsultationBanner />
    </div>
  );
};

export default AboutPage;
