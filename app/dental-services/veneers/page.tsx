import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../DentalServices.module.scss";

const Veneers = () => {
  const portfolioImages = [
    { before: "/images/veneers-before1.jpg", after: "/images/veneers-after1.jpg" },
    { before: "/images/veneers-before2.jpg", after: "/images/veneers-after2.jpg" },
    { before: "/images/veneers-before3.jpg", after: "/images/veneers-after3.jpg" },
    
  ];

  return (
    <>
      <Head>
        <title>Dental Veneers | Bana Dental Design</title>
        <meta
          name="description"
          content="Learn about the different types of dental veneers provided by Bana Dental Design. Dental veneers can enhance your smile by covering imperfections."
        />
        <meta
          name="keywords"
          content="dental veneers, cosmetic dentistry, smile enhancement, Bana Dental Design"
        />
      </Head>
      <main className={`${styles["service-page"]} ${styles["service-page--cosmetic"]}`}>
        <h1 className={styles["service-page__header"]}>Dental Veneers</h1>
        <section className={styles["service-page__content"]}>
          <article className={styles["service-page__articles"]}>
            <p className={styles["service-page__text"]}>
              Dental veneers are thin, custom-made shells designed to cover the front surface of your teeth. They are used to improve the appearance of your smile by covering imperfections such as discoloration, chips, or gaps.
            </p>
            <h2 className={styles["service-page__subheader"]}>Types of Dental Veneers</h2>
            <section className={styles["service-page__text"]}>
              <h3>Porcelain Veneers</h3>
              <p>
                Porcelain veneers are made from high-quality ceramic material and are known for their natural appearance and durability. They are resistant to staining and can last for many years with proper care.
              </p>

              <h3>Composite Veneers</h3>
              <p>
                Composite veneers are made from a resin material and are applied directly to the teeth. They are less expensive than porcelain veneers but may not last as long and are more prone to staining.
              </p>

              <h3>Lumineers</h3>
              <p>
                Lumineers are a type of ultra-thin porcelain veneer that requires minimal tooth preparation. They are reversible and can be removed if necessary.
              </p>
            </section>
            <h2 className={styles["service-page__subheader"]}>Benefits of Dental Veneers</h2>
            <section className={styles["service-page__text"]}>
              <ul className={styles["service-page__list"]}>
                <li className={styles["service-page__list__item"]}>Enhance the appearance of your smile.</li>
                <li className={styles["service-page__list__item"]}>Cover imperfections such as discoloration, chips, and gaps.</li>
                <li className={styles["service-page__list__item"]}>Durable and resistant to staining.</li>
                <li className={styles["service-page__list__item"]}>Custom-made for a natural look and feel.</li>
              </ul>
            </section>
            <h2 className={styles["service-page__subheader"]}>Procedure Overview</h2>
            <section className={styles["service-page__text"]}>
              <h3>Initial Consultation</h3>
              <p>
                During the initial consultation, your dentist will examine your teeth, discuss your goals, and determine if veneers are the right option for you. X-rays and impressions of your teeth may be taken.
              </p>

              <h3>Tooth Preparation</h3>
              <p>
                For porcelain and composite veneers, a small amount of enamel is removed from the tooth surface to make room for the veneers. This ensures a natural fit and appearance.
              </p>

              <h3>Impressions</h3>
              <p>
                Impressions of your teeth are taken and sent to a dental lab where your custom veneers are made. This process can take a few weeks.
              </p>

              <h3>Veneer Placement</h3>
              <p>
                Once the veneers are ready, they are placed on your teeth to check the fit and color. Adjustments are made if necessary, and then the veneers are bonded to your teeth using a special adhesive.
              </p>

              <h3>Post-Procedure Care</h3>
              <p>
                After the procedure, you will receive instructions on how to care for your new veneers. This includes maintaining good oral hygiene, avoiding certain foods, and attending regular dental check-ups to ensure the veneers remain in good condition.
              </p>
            </section>
            <h2 className={styles["service-page__subheader"]}>Why Choose Us?</h2>
            <p className={styles["service-page__text"]}>
              Bana Dental Design offers high-quality dental veneers and personalized care to enhance your smile. Our experienced team is dedicated to providing the best possible outcomes for our patients.
            </p>
            <Link href="/contact-us" className={styles["service-page__contact-button"]}>
              Contact Us
            </Link>
          </article>
          <aside className={styles["service-page__image-slider"]}>
            <div className={styles["slider__main-image"]}>
              <img src="/images/veneers1.jpg" alt="Dental Veneer Procedure" />
            </div>
            <div className={styles["slider__thumbnails"]}>
              <div className={styles["thumbnail"]}>
                <img src="/images/veneers2.jpg" alt="Dental Veneer Example" />
              </div>
              <div className={styles["thumbnail"]}>
                <img src="/images/veneers3.jpg" alt="Patient with Dental Veneers" />
              </div>
            </div>
          </aside>
        </section>

        <section className={styles["service-page__portfolio"]}>
          <h2 className={styles["service-page__subheader"]}>Veneers Before and After</h2>
          <div className={styles["portfolio"]}>
            {portfolioImages.map((image, index) => (
              <div key={index} className={styles["portfolio__item"]}>
                <div className={styles["portfolio__image-container"]}>
                  <img src={image.before} alt={`Before Veneers ${index + 1}`} className={styles["portfolio__image"]} />
                  <span className={styles["portfolio__label"]}>Before</span>
                </div>
                <div className={styles["portfolio__image-container"]}>
                  <img src={image.after} alt={`After Veneers ${index + 1}`} className={styles["portfolio__image"]} />
                  <span className={styles["portfolio__label"]}>After</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Veneers;
