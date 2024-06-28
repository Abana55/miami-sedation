import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../DentalServices.module.scss";

const TeethWhitening = () => {
  return (
    <>
      <Head>
        <title>Teeth Whitening | Bana Dental Design</title>
        <meta
          name="description"
          content="Learn about the professional teeth whitening services provided by Bana Dental Design. Achieve a brighter smile with our safe and effective teeth whitening options."
        />
        <meta
          name="keywords"
          content="teeth whitening, cosmetic dentistry, smile enhancement, Bana Dental Design"
        />
      </Head>
      <main className={`${styles["service-page"]} ${styles["service-page--cosmetic"]}`}>
        <h1 className={styles["service-page__header"]}>Teeth Whitening</h1>
        <section className={styles["service-page__content"]}>
          <article className={styles["service-page__articles"]}>
            <p className={styles["service-page__text"]}>
              Teeth whitening is a popular cosmetic dental procedure designed to lighten the color of your teeth and remove stains and discoloration. It is a safe and effective way to achieve a brighter smile and boost your confidence.
            </p>
            <h2 className={styles["service-page__subheader"]}>Types of Teeth Whitening</h2>
            <section className={styles["service-page__text"]}>
              <h3>In-Office Teeth Whitening</h3>
              <p>
                In-office teeth whitening is performed by a dental professional and can significantly whiten your teeth in just one visit. The procedure involves applying a high-concentration bleaching gel to your teeth and activating it with a special light. This method provides the fastest and most dramatic results.
              </p>

              <h3>Take-Home Whitening Kits</h3>
              <p>
                Take-home whitening kits are custom-made for you by your dentist. They include custom-fitted trays and a professional-grade bleaching gel. You can achieve noticeable results in a few weeks by wearing the trays for a specified amount of time each day.
              </p>

              <h3>Over-the-Counter Whitening Products</h3>
              <p>
                Over-the-counter whitening products, such as whitening toothpaste, strips, and gels, are available at most drugstores. While these products can help remove surface stains, they are less effective than professional treatments and may take longer to show results.
              </p>
            </section>
            <h2 className={styles["service-page__subheader"]}>Benefits of Teeth Whitening</h2>
            <section className={styles["service-page__text"]}>
              <ul className={styles["service-page__list"]}>
                <li className={styles["service-page__list__item"]}>Enhances the appearance of your smile.</li>
                <li className={styles["service-page__list__item"]}>Boosts your self-confidence.</li>
                <li className={styles["service-page__list__item"]}>Removes stains and discoloration.</li>
                <li className={styles["service-page__list__item"]}>Safe and effective when performed by a dental professional.</li>
              </ul>
            </section>
            <h2 className={styles["service-page__subheader"]}>Procedure Overview</h2>
            <section className={styles["service-page__text"]}>
              <h3>Initial Consultation</h3>
              <p>
                During the initial consultation, your dentist will examine your teeth and discuss your goals. They will determine if you are a good candidate for teeth whitening and explain the available options.
              </p>

              <h3>In-Office Whitening Procedure</h3>
              <p>
                If you choose in-office whitening, the procedure will begin with a thorough cleaning of your teeth. A protective barrier will be placed on your gums, and the bleaching gel will be applied to your teeth. The gel is then activated with a special light, and the process is repeated until the desired shade is achieved.
              </p>

              <h3>Take-Home Whitening Kits</h3>
              <p>
                If you opt for a take-home whitening kit, your dentist will take impressions of your teeth to create custom-fitted trays. You will receive detailed instructions on how to use the trays and the bleaching gel at home. Typically, you will wear the trays for a specified amount of time each day for a few weeks.
              </p>

              <h3>Post-Procedure Care</h3>
              <p>
                After the teeth whitening procedure, it is important to maintain good oral hygiene and avoid foods and beverages that can stain your teeth. Regular dental check-ups will help ensure your smile stays bright and healthy.
              </p>
            </section>
            <h2 className={styles["service-page__subheader"]}>Why Choose Us?</h2>
            <p className={styles["service-page__text"]}>
              At Bana Dental Design, we offer professional teeth whitening services to help you achieve a brighter smile. Our experienced team uses the latest techniques and high-quality materials to ensure safe and effective results. Schedule your consultation today and discover the difference we can make in your smile.
            </p>
            <Link href="/contact-us" className={styles["service-page__contact-button"]}>
              Contact Us
            </Link>
          </article>
          <aside className={styles["service-page__image-slider"]}>
            <div className={styles["slider__main-image"]}>
              <img src="/images/Teeth Whitening Cottonbro.jpg" alt="Teeth Whitening Procedure" />
            </div>
            <div className={styles["slider__thumbnails"]}>
              <div className={styles["thumbnail"]}>
                <img src="/images/Teeth Whitening Karolina Grabowska.jpg" alt="Teeth Whitening Before and After" />
              </div>
              <div className={styles["thumbnail"]}>
                <img src="/images/Teeth Whitening Karolina Grabowska (1).jpg" alt="Patient with Whiter Teeth" />
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default TeethWhitening;
