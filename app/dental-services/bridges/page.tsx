import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/DentalServices.module.scss";

const Bridges = () => {
    return (
        <>
        <Head>
          <title>Dental Bridges | Bana Dental Design</title>
          <meta
            name="description"
            content="Learn about the different types of dental bridges provided by Bana Dental Design. Dental bridges are used to replace missing teeth and restore your smile."
          />
          <meta
            name="keywords"
            content="dental bridges, tooth replacement, dental care, oral health, Bana Dental Design"
          />
        </Head>
        <main className={`${styles["service-page"]} ${styles["service-page--restoration"]}`}>
          <h1 className={styles["service-page__header"]}>Dental Bridges</h1>
          <section className={styles["service-page__content"]}>
            <article className={styles["service-page__articles"]}>
              <p className={styles["service-page__text"]}>
                Dental bridges are used to replace one or more missing teeth by bridging the gap created by the missing teeth. A dental bridge consists of two or more crowns for the teeth on either side of the gap and a false tooth/teeth in between.
              </p>
              <h2 className={styles["service-page__subheader"]}>Types of Dental Bridges</h2>
              <section className={styles["service-page__text"]}>
                <h3>Traditional Dental Bridges</h3>
                <p>
                  Traditional dental bridges are the most common type of bridge. They are made of porcelain fused to metal or ceramics. Traditional bridges consist of one or more false teeth held in place by dental crowns that have been cemented onto the abutment teeth.
                </p>
  
                <h3>Maryland Bonded Bridges</h3>
                <p>
                  Maryland bonded bridges, also known as resin-bonded bridges, are made of porcelain or porcelain fused to metal supported by a framework. The framework has wings that are bonded to the back of the existing teeth.
                </p>
  
                <h3>Cantilever Bridges</h3>
                <p>
                  Cantilever bridges are used when there are adjacent teeth on only one side of the missing tooth or teeth. They are not very common and are typically used for the front teeth.
                </p>
  
                <h3>Implant-Supported Bridges</h3>
                <p>
                  Implant-supported bridges are similar to traditional bridges, but they are supported by dental implants instead of crowns. These are used when you have more than one tooth missing. Implants are surgically placed for every missing tooth, and this bridge is then placed over them.
                </p>
              </section>
              <h2 className={styles["service-page__subheader"]}>Why Choose a Dental Bridge?</h2>
              <p className={styles["service-page__text"]}>
                Choosing a dental bridge to replace missing teeth can have several benefits:
                <ul className={styles["service-page__list"]}>
                  <li className={styles["service-page__list__item"]}>Restore your smile and the ability to properly chew and speak.</li>
                  <li className={styles["service-page__list__item"]}>Maintain the shape of your face.</li>
                  <li className={styles["service-page__list__item"]}>Prevent remaining teeth from drifting out of position.</li>
                  <li className={styles["service-page__list__item"]}>Distribute the forces in your bite properly by replacing missing teeth.</li>
                </ul>
              </p>
              <h2 className={styles["service-page__subheader"]}>Procedure Overview</h2>
              <section className={styles["service-page__text"]}>
                <h3>Initial Consultation</h3>
                <p>
                  During the initial consultation, your dentist will examine your teeth and gums, take X-rays, and discuss your treatment options. The dentist will also explain the procedure and answer any questions you may have.
                </p>
  
                <h3>Tooth Preparation</h3>
                <p>
                  For traditional and cantilever bridges, the abutment teeth need to be prepared by removing a portion of enamel to make room for the crowns. For implant-supported bridges, implants will be surgically placed in the jawbone.
                </p>
  
                <h3>Impressions and Temporary Bridge</h3>
                <p>
                  Impressions of your teeth will be taken to create a custom bridge. A temporary bridge may be placed to protect the exposed teeth and gums while the permanent bridge is being made.
                </p>
  
                <h3>Permanent Bridge Placement</h3>
                <p>
                  Once the permanent bridge is ready, the temporary bridge will be removed, and the new bridge will be fitted and adjusted for comfort and proper bite. The bridge is then permanently cemented into place.
                </p>
  
                <h3>Post-Procedure Care</h3>
                <p>
                  After the procedure, you will receive instructions on how to care for your new bridge. This includes maintaining good oral hygiene, avoiding certain foods, and attending regular dental check-ups to ensure the bridge remains in good condition.
                </p>
              </section>
              <h2 className={styles["service-page__subheader"]}>Why Choose Us?</h2>
              <p className={styles["service-page__text"]}>
                Bana Dental Design offers high-quality dental bridges and personalized care to ensure the best outcomes for our patients. Our experienced team is dedicated to restoring your smile and improving your oral health.
              </p>
              <Link href="/contact-us" className={styles["service-page__contact-button"]}>
                Contact Us
              </Link>
            </article>
            <aside className={styles["service-page__image-slider"]}>
              <div className={styles["slider__main-image"]}>
                <img src="/images/bridge1.jpg" alt="Dental Bridge Procedure" />
              </div>
              <div className={styles["slider__thumbnails"]}>
                <div className={styles["thumbnail"]}>
                  <img src="/images/bridge2.jpg" alt="Dental Bridge Example" />
                </div>
                <div className={styles["thumbnail"]}>
                  <img src="/images/bridge3.jpg" alt="Patient with Dental Bridge" />
                </div>
              </div>
            </aside>
          </section>
        </main>
      </>
    );
  };


                
export default Bridges;
