import React from "react";
import styles from "../../DentalServices.module.scss";
import Head from "next/head";
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";

const Xrays: React.FC = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Dental X-rays | Your Dental Office</title>
        <meta
          name="description"
          content="Dental X-rays are crucial for diagnosing dental issues early. Discover the benefits, safety, and importance of dental X-rays at Your Dental Office."
        />
        <meta
          name="keywords"
          content="Dental X-rays, Diagnostic Dentistry, Oral Health, Preventive Dentistry, digital X-rays, dental radiographs, cavity detection"
        />
        <meta name="author" content="Your Dental Office" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:title"
          content="Dental X-rays | Your Dental Office"
        />
        <meta
          property="og:description"
          content="Dental X-rays are essential for diagnosing and treating dental issues. Learn about the importance of X-rays, their role in preventive dentistry, and how they ensure the best oral health care."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/services/x-rays"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/xrays-1.jpg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Your Dental Office" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dental X-rays | Your Dental Office"
        />
        <meta
          name="twitter:description"
          content="Dental X-rays play a vital role in detecting dental issues early. Learn about the safety and benefits of X-rays in modern dentistry."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/images/xrays-1.jpg"
        />
        <meta name="twitter:site" content="@YourDentalOffice" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourdomain.com/services/x-rays" />

        {/* Structured Data for Rich Snippets */}
        <script type="application/ld+json">
          {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Dental X-rays",
      "provider": {
        "@type": "Dentist",
        "name": "Your Dental Office",
        "image": "https://yourdomain.com/images/xrays-1.jpg",
        "description": "Dental X-rays are crucial for diagnosing and treating dental issues. Learn about their importance in preventive care.",
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
      "url": "https://yourdomain.com/services/x-rays",
      "image": "https://yourdomain.com/images/xrays-1.jpg",
      "description": "Learn about the benefits of dental X-rays for early detection of cavities, gum disease, and oral health issues."
    }`}
        </script>

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#00447C" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <div className={styles.xraysPage}>
        {/* Header Section */}
        <section className={styles.xraysPage__header}>
          <h1 className={styles.xraysPage__title}>
            The Role of X-rays in Dental Care
          </h1>
          <p className={styles.xraysPage__intro}>
            Dental X-rays are a critical tool in diagnosing and treating dental
            issues. They provide a clear picture of your teeth and gums,
            allowing us to detect problems that aren't visible during a regular
            exam.
          </p>
        </section>

        {/* Main Content */}
        <section className={styles.xraysPage__content}>
          {/* Importance of X-rays */}
          <ScrollFadeIn>
            <article className={styles.xraysPage__article}>
              <h2 className={styles.xraysPage__subheader}>
                Why Are X-rays Important?
              </h2>
              <div className={styles.xraysPage__imageContainer}>
                <img
                  src="/images/xrays-1.jpg"
                  alt="Dental X-rays"
                  className={styles.xraysPage__image}
                />
              </div>
              <p className={styles.xraysPage__text}>
                X-rays help us see beyond the surface of your teeth and gums.
                They allow us to detect cavities between teeth, monitor tooth
                root health, and assess the condition of your jawbone. Detecting
                issues early helps prevent more serious problems later on.
              </p>
            </article>
          </ScrollFadeIn>

          {/* How X-rays Support Preventive Dentistry */}
          <ScrollFadeIn>
            <article className={styles.xraysPage__article}>
              <h2 className={styles.xraysPage__subheader}>
                How X-rays Support Preventive Dentistry
              </h2>
              <p className={styles.xraysPage__text}>
                Dental X-rays are more than just diagnostic tools—they are
                integral to many preventive treatments. By providing detailed
                insight into your dental health, X-rays allow us to:
              </p>
              <ul className={styles.xraysPage__list}>
                <li className={styles.xraysPage__listItem}>
                  Detect **cavities** in areas that are hard to reach or see,
                  such as between teeth or under existing dental work, before
                  they cause major damage.
                </li>
                <li className={styles.xraysPage__listItem}>
                  Identify **early signs of gum disease** by revealing changes
                  in bone structure, allowing for timely intervention to prevent
                  the disease from progressing.
                </li>
                <li className={styles.xraysPage__listItem}>
                  Monitor the condition of **wisdom teeth**, ensuring that they
                  are growing correctly and identifying whether removal is
                  necessary before they impact other teeth.
                </li>
                <li className={styles.xraysPage__listItem}>
                  Check for **abscesses, cysts, and infections** in the roots of
                  teeth that may not be causing symptoms yet but could lead to
                  severe pain or complications if left untreated.
                </li>
                <li className={styles.xraysPage__listItem}>
                  Evaluate **tooth development** in children, including tracking
                  how baby teeth are giving way to adult teeth, ensuring the
                  need for orthodontics or other treatments is identified early.
                </li>
                <li className={styles.xraysPage__listItem}>
                  Examine the **jawbone health**, especially in patients with
                  implants or missing teeth, to determine if any bone loss is
                  occurring and to plan appropriate treatments.
                </li>
              </ul>
              <p className={styles.xraysPage__text}>
                By integrating X-rays into routine exams, we ensure that we
                catch potential issues before they escalate into more serious
                conditions, saving you both time and cost in the long run.
              </p>
            </article>
          </ScrollFadeIn>

          {/* What to Expect */}
          <ScrollFadeIn>
            <article className={styles.xraysPage__article}>
              <h2 className={styles.xraysPage__subheader}>
                What to Expect During an X-ray
              </h2>
              <p className={styles.xraysPage__text}>
                The process of taking dental X-rays is quick and painless. Our
                team will position a small sensor in your mouth, and within
                seconds, we’ll have detailed images of your teeth and jaws.
                These images help us provide you with the most accurate
                diagnosis and treatment plan.
              </p>
              <div className={styles.xraysPage__imageContainer}>
                <img
                  src="/images/xrays-2.jpg"
                  alt="Patient Receiving X-ray"
                  className={styles.xraysPage__image}
                />
              </div>
            </article>
          </ScrollFadeIn>

          {/* Safety of X-rays */}
          <ScrollFadeIn>
            <article className={styles.xraysPage__article}>
              <h2 className={styles.xraysPage__subheader}>
                Are Dental X-rays Safe?
              </h2>
              <p className={styles.xraysPage__text}>
                Yes, dental X-rays are safe. We use modern digital X-ray
                technology, which minimizes your exposure to radiation. Our
                equipment is regularly inspected and maintained to ensure the
                highest standards of safety. In fact, digital X-rays reduce
                radiation exposure by as much as 90% compared to traditional
                film X-rays.
              </p>
              <p className={styles.xraysPage__text}>
                While the radiation exposure is minimal, we take every
                precaution to ensure your safety, including using lead aprons
                and thyroid collars during the procedure.
              </p>
            </article>
          </ScrollFadeIn>
        </section>

        {/* Conclusion Section */}
        <section className={styles.xraysPage__conclusion}>
          <p className={styles.xraysPage__text}>
            Dental X-rays are invaluable for your dental care. They allow us to
            assess the full picture of your oral health, ensuring you receive
            the best possible care. Contact us today to schedule your
            appointment and take the next step in maintaining your smile.
          </p>
        </section>

        {/* Consultation Banner */}
        <ConsultationBanner />
      </div>
    </>
  );
};

export default Xrays;
